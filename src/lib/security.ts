/**
 * Security utilities for the Clinic 1 Medical application
 * Includes rate limiting, input sanitization, and CSRF protection
 */

// ============================================================================
// Rate Limiting
// ============================================================================

interface RateLimitEntry {
  count: number
  resetTime: number
}

// In-memory store for rate limiting (use Redis in production for multi-server deployments)
const rateLimitStore = new Map<string, RateLimitEntry>()

export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Maximum requests per window
}

/**
 * Rate limiter using token bucket algorithm
 * @param identifier - Unique identifier (IP address, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Object with allowed flag and retry information
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { windowMs: 60000, maxRequests: 5 }
): { allowed: boolean; retryAfter?: number; remaining?: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(identifier)

  // Clean up old entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetTime < now) {
        rateLimitStore.delete(key)
      }
    }
  }

  if (!entry || entry.resetTime < now) {
    // Create new entry or reset expired entry
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    })
    return { allowed: true, remaining: config.maxRequests - 1 }
  }

  if (entry.count >= config.maxRequests) {
    return {
      allowed: false,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000), // seconds
      remaining: 0,
    }
  }

  // Increment counter
  entry.count++
  return { allowed: true, remaining: config.maxRequests - entry.count }
}

// ============================================================================
// Input Sanitization
// ============================================================================

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param text - Input text to sanitize
 * @returns Sanitized text safe for HTML output
 */
export function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  return text.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char])
}

/**
 * Sanitizes email input to prevent injection attacks
 * @param email - Email address to validate and sanitize
 * @returns Sanitized email or null if invalid
 */
export function sanitizeEmail(email: string): string | null {
  // Remove any whitespace
  email = email.trim()

  // Basic email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!emailRegex.test(email)) {
    return null
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /[\r\n]/,           // Line breaks
    /%0[ad]/i,          // URL-encoded line breaks
    /content-type:/i,   // Email header injection
    /bcc:/i,            // BCC injection
    /cc:/i,             // CC injection
    /to:/i,             // TO injection
  ]

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(email)) {
      return null
    }
  }

  return email
}

/**
 * Sanitizes phone number input
 * @param phone - Phone number to sanitize
 * @returns Sanitized phone number
 */
export function sanitizePhone(phone: string): string {
  // Remove all non-numeric characters except + and spaces
  return phone.replace(/[^0-9+\s()-]/g, '').trim()
}

/**
 * Sanitizes general text input to prevent XSS and injection attacks
 * @param text - Text to sanitize
 * @param maxLength - Maximum allowed length (default: 10000)
 * @returns Sanitized text
 */
export function sanitizeText(text: string, maxLength: number = 10000): string {
  // Trim whitespace
  text = text.trim()

  // Enforce max length
  if (text.length > maxLength) {
    text = text.substring(0, maxLength)
  }

  // Remove null bytes
  text = text.replace(/\0/g, '')

  // Escape HTML
  return escapeHtml(text)
}

// ============================================================================
// CSRF Protection
// ============================================================================

/**
 * Generates a CSRF token
 * @returns CSRF token string
 */
export function generateCsrfToken(): string {
  // In production, use a cryptographically secure random generator
  // and store tokens in a secure session store
  const array = new Uint8Array(32)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array)
  } else {
    // Fallback for environments without crypto.getRandomValues
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256)
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Validates origin header to prevent CSRF attacks
 * @param request - The incoming request
 * @param allowedOrigins - Array of allowed origins
 * @returns True if origin is valid
 */
export function validateOrigin(
  request: Request,
  allowedOrigins?: string[]
): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')

  // If no origin or referer, reject (except for same-origin requests)
  if (!origin && !referer) {
    return false
  }

  const requestOrigin = origin || new URL(referer || '').origin

  // If allowedOrigins not specified, check against request host
  if (!allowedOrigins) {
    const host = request.headers.get('host')
    const protocol = request.headers.get('x-forwarded-proto') || 'https'
    const expectedOrigin = `${protocol}://${host}`
    return requestOrigin === expectedOrigin
  }

  return allowedOrigins.includes(requestOrigin)
}

// ============================================================================
// Request Size Validation
// ============================================================================

/**
 * Validates request body size
 * @param body - Request body object
 * @param maxSizeBytes - Maximum allowed size in bytes (default: 1MB)
 * @returns True if size is valid
 */
export function validateRequestSize(
  body: unknown,
  maxSizeBytes: number = 1024 * 1024
): boolean {
  const bodyString = JSON.stringify(body)
  const sizeBytes = new Blob([bodyString]).size
  return sizeBytes <= maxSizeBytes
}

// ============================================================================
// Security Headers
// ============================================================================

/**
 * Gets recommended security headers
 * @returns Headers object with security headers
 */
export function getSecurityHeaders(): Record<string, string> {
  return {
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',

    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',

    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions policy
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',

    // Content Security Policy (adjust as needed for your app)
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-inline
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),

    // HSTS (Strict-Transport-Security) - only enable if using HTTPS
    // Uncomment in production with HTTPS:
    // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  }
}
