import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  rateLimit,
  validateOrigin,
  validateRequestSize,
  sanitizeEmail,
  sanitizeText,
  sanitizePhone,
} from '@/lib/security'

// Create custom SMTP transporter with secure TLS configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD,
    },
    tls: {
      // Enforce certificate validation for security
      rejectUnauthorized: true,
      // Minimum TLS version
      minVersion: 'TLSv1.2',
    },
  })
}

export async function POST(request: Request) {
  try {
    // ============================================================================
    // Security Check 1: Origin Validation (CSRF Protection)
    // ============================================================================
    const allowedOrigins = [
      'https://clinic1medical.com',
      'https://www.clinic1medical.com',
      'http://localhost:3000', // For development
    ]

    if (!validateOrigin(request, allowedOrigins)) {
      return NextResponse.json(
        { error: 'Invalid request origin' },
        { status: 403 }
      )
    }

    // ============================================================================
    // Security Check 2: Rate Limiting
    // ============================================================================
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    const rateLimitResult = rateLimit(clientIp, {
      windowMs: 60000, // 1 minute
      maxRequests: 5, // 5 requests per minute
    })

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter?.toString() || '60',
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + (rateLimitResult.retryAfter || 60) * 1000).toISOString(),
          },
        }
      )
    }

    // ============================================================================
    // Security Check 3: Request Size Validation
    // ============================================================================
    const body = await request.json()

    if (!validateRequestSize(body, 50 * 1024)) {
      // 50KB max
      return NextResponse.json(
        { error: 'Request payload too large' },
        { status: 413 }
      )
    }

    const { firstName, lastName, email, phone, subject, message, honeypot } = body

    // ============================================================================
    // Security Check 4: Honeypot Bot Protection
    // ============================================================================
    // If honeypot field is filled, it's likely a bot
    if (honeypot) {
      // Return success to avoid revealing the honeypot
      return NextResponse.json(
        { success: true, message: 'Your message has been sent successfully!' },
        { status: 200 }
      )
    }

    // ============================================================================
    // Security Check 5: Input Validation & Sanitization
    // ============================================================================
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Sanitize and validate email
    const sanitizedEmail = sanitizeEmail(email)
    if (!sanitizedEmail) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Sanitize all text inputs
    const sanitizedFirstName = sanitizeText(firstName, 50)
    const sanitizedLastName = sanitizeText(lastName, 50)
    const sanitizedSubject = sanitizeText(subject, 200)
    const sanitizedMessage = sanitizeText(message, 5000)
    const sanitizedPhone = phone ? sanitizePhone(phone) : null

    // Additional validation
    if (
      sanitizedFirstName.length < 2 ||
      sanitizedLastName.length < 2 ||
      sanitizedSubject.length < 5 ||
      sanitizedMessage.length < 10
    ) {
      return NextResponse.json(
        { error: 'Please provide valid information in all fields' },
        { status: 400 }
      )
    }

    // ============================================================================
    // Email Content - Using Sanitized Inputs
    // ============================================================================
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #065f46;">New Contact Form Submission</h2>

        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          ${sanitizedPhone ? `<p><strong>Phone:</strong> ${sanitizedPhone}</p>` : ''}
          <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #111827; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the contact form on Clinic 1 Medical website.</p>
          <p>Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Edmonton' })}</p>
          <p>Client IP: ${clientIp}</p>
        </div>
      </div>
    `

    // Create transporter
    const transporter = createTransporter()

    // Send email to clinic
    const clinicMailOptions = {
      from: `"Contact Form" <${process.env.DEFAULT_FROM_EMAIL}>`, // From your mail server
      to: process.env.CLINIC_EMAIL || 'cliniconemedical@gmail.com', // Your clinic email
      replyTo: `"${sanitizedFirstName} ${sanitizedLastName}" <${sanitizedEmail}>`, // So you can reply directly to the person
      subject: `Contact Form: ${sanitizedSubject}`,
      html: emailHtml,
    }

    await transporter.sendMail(clinicMailOptions)

    // Send confirmation email to the user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px;">
          <h1 style="color: #065f46;">Thank You for Contacting Clinic 1 Medical</h1>
        </div>

        <div style="background: #f3f4f6; padding: 30px; border-radius: 8px;">
          <p>Dear ${sanitizedFirstName},</p>

          <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you as soon as possible.</p>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f9fafb; padding: 15px; border-left: 4px solid #065f46;">${sanitizedMessage}</p>
          </div>

          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your message within 1-2 business days</li>
            <li>If urgent, please call us directly at 780-761-2430</li>
            <li>We'll respond to the email address you provided: ${sanitizedEmail}</li>
          </ul>

          <p style="margin-top: 30px;">Best regards,<br>
          <strong>Clinic 1 Medical Team</strong></p>
        </div>

        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          <p>Clinic 1 Medical | Royal Center | 16644-71 St NW, Edmonton, AB T5Z ON5</p>
          <p>Phone: 780-761-2430 | Text: 587-926-7747</p>
        </div>
      </div>
    `

    // Send confirmation to user
    const confirmationMailOptions = {
      from: `"Clinic 1 Medical" <${process.env.DEFAULT_FROM_EMAIL}>`,
      to: sanitizedEmail,
      subject: 'We Received Your Message - Clinic 1 Medical',
      html: confirmationHtml,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining?.toString() || '0',
        },
      }
    )
  } catch (error) {
    // ============================================================================
    // Security: Enhanced Error Handling & Monitoring
    // ============================================================================

    // Log error securely (in production, send to monitoring service)
    console.error('Contact form error:', {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined,
    })

    // Don't expose internal error details to client
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or call us directly at 780-761-2430.',
        // Only include details in development mode
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 }
    )
  }
}