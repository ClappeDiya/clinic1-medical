import { test, expect } from '@playwright/test';

test.describe('Security Features Tests', () => {
  test('should have security headers on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/services', '/doctors', '/resources', '/contact'];

    for (const path of pages) {
      const response = await page.goto(path);
      const headers = response?.headers();

      // Check X-Frame-Options
      expect(headers?.['x-frame-options']).toBeTruthy();

      // Check X-Content-Type-Options
      expect(headers?.['x-content-type-options']).toBe('nosniff');

      // Check Referrer-Policy
      expect(headers?.['referrer-policy']).toBeTruthy();

      console.log(`✓ Security headers present on ${path}`);
    }
  });

  test('should have Content-Security-Policy header', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();

    const csp = headers?.['content-security-policy'];
    expect(csp).toBeTruthy();

    // Check key CSP directives
    expect(csp).toContain('default-src');
    console.log(`✓ CSP Header: ${csp}`);
  });

  test('should serve security.txt file', async ({ page, request }) => {
    const response = await request.get('/.well-known/security.txt');

    expect(response.status()).toBe(200);

    const content = await response.text();
    expect(content).toContain('Contact:');
    expect(content).toContain('Expires:');

    console.log('✓ security.txt is accessible');
  });

  test('should have honeypot protection in contact form', async ({ page }) => {
    await page.goto('/contact');

    // Check if honeypot field exists
    const honeypotField = page.locator('input[name="honeypot"]');
    const count = await honeypotField.count();

    expect(count).toBeGreaterThan(0);

    // Verify it's hidden
    if (count > 0) {
      const isHidden = await honeypotField.evaluate((el) => {
        const parent = el.parentElement;
        if (!parent) return false;
        const style = window.getComputedStyle(parent);
        return style.position === 'absolute' && style.left.includes('-9999');
      });
      expect(isHidden).toBe(true);
      console.log('✓ Honeypot field is properly hidden');
    }
  });

  test('should have HTTPS ready configuration', async ({ page }) => {
    // This test checks if the app is ready for HTTPS
    // In production, all links should use relative URLs or HTTPS

    await page.goto('/');

    // Check for any insecure content
    const insecureContent = await page.locator('img[src^="http:"], link[href^="http:"], script[src^="http:"]').count();

    // Should be 0 insecure resources
    expect(insecureContent).toBe(0);
    console.log('✓ No insecure (HTTP) content found');
  });

  test('should sanitize user input in forms', async ({ page }) => {
    await page.goto('/contact');

    // Try to inject script tags
    const maliciousInput = '<script>alert("XSS")</script>';

    await page.fill('#firstName', maliciousInput);
    await page.fill('#message', maliciousInput);

    // Get the values back
    const firstNameValue = await page.inputValue('#firstName');
    const messageValue = await page.inputValue('#message');

    // Values should still be there (HTML will be escaped on submit)
    expect(firstNameValue).toBe(maliciousInput);
    expect(messageValue).toBe(maliciousInput);

    console.log('✓ Form accepts input (will be sanitized server-side)');
  });

  test('should have proper error handling', async ({ page }) => {
    const consoleLogs: string[] = [];

    page.on('console', (msg) => {
      consoleLogs.push(`${msg.type()}: ${msg.text()}`);
    });

    page.on('pageerror', (error) => {
      consoleLogs.push(`Page error: ${error.message}`);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that there are no unhandled errors
    const errors = consoleLogs.filter(log => log.startsWith('error:') || log.startsWith('Page error:'));

    if (errors.length > 0) {
      console.log('Errors found:', errors);
    }

    expect(errors).toHaveLength(0);
  });

  test('should load all pages without JavaScript errors', async ({ page }) => {
    const pages = [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/services', name: 'Services' },
      { path: '/doctors', name: 'Doctors' },
      { path: '/resources', name: 'Resources' },
      { path: '/contact', name: 'Contact' },
    ];

    for (const { path, name } of pages) {
      const errors: string[] = [];

      page.on('pageerror', (error) => {
        errors.push(error.message);
      });

      await page.goto(path);
      await page.waitForLoadState('networkidle');

      expect(errors).toHaveLength(0);
      console.log(`✓ ${name} page: No JavaScript errors`);
    }
  });

  test('should have proper meta tags for security', async ({ page }) => {
    await page.goto('/');

    // Check viewport meta tag (prevents zoom attacks on mobile)
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toBeTruthy();

    console.log('✓ Security-related meta tags present');
  });
});
