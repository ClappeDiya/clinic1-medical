import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create custom SMTP transporter
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
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #065f46;">New Contact Form Submission</h2>

        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #111827; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #111827; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the contact form on Clinic 1 Medical website.</p>
          <p>Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Edmonton' })}</p>
        </div>
      </div>
    `

    // Create transporter
    const transporter = createTransporter()

    // Send email to clinic
    const clinicMailOptions = {
      from: `"Contact Form" <${process.env.DEFAULT_FROM_EMAIL}>`, // From your mail server
      to: 'cliniconemedical@gmail.com', // Your clinic email
      replyTo: `"${firstName} ${lastName}" <${email}>`, // So you can reply directly to the person
      subject: `Contact Form: ${subject}`,
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
          <p>Dear ${firstName},</p>

          <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you as soon as possible.</p>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f9fafb; padding: 15px; border-left: 4px solid #065f46;">${message}</p>
          </div>

          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your message within 1-2 business days</li>
            <li>If urgent, please call us directly at 780-761-2430</li>
            <li>We'll respond to the email address you provided: ${email}</li>
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
      to: email,
      subject: 'We Received Your Message - Clinic 1 Medical',
      html: confirmationHtml,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    // Fallback error response
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or call us directly.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}