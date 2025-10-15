import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSecurityHeaders } from '@/lib/security'

/**
 * Next.js middleware for security headers and request validation
 * Runs on every request before reaching the route handlers
 */
export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next()

  // Add security headers to all responses
  const securityHeaders = getSecurityHeaders()
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add rate limiting headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('X-RateLimit-Policy', '5 requests per minute')
  }

  return response
}

/**
 * Configure which routes the middleware runs on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
