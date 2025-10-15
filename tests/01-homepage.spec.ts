import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Clinic 1 Medical/i);

    // Check main heading
    await expect(page.locator('h1')).toContainText('Clinic 1 Medical');

    // Take screenshot
    await page.screenshot({ path: 'test-results/screenshots/01-homepage.png', fullPage: true });
  });

  test('should have no console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Test About link
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
    await page.goBack();

    // Test Services link
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    await page.goBack();

    // Test Doctors link
    await page.click('text=Doctors');
    await expect(page).toHaveURL(/.*doctors/);
    await page.goBack();

    // Test Resources link
    await page.click('text=Resources');
    await expect(page).toHaveURL(/.*resources/);
    await page.goBack();

    // Test Contact link
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should have logo that links to homepage', async ({ page }) => {
    await page.goto('/about');

    // Click logo to return home
    await page.click('svg[data-testid="clinic-logo"], img[alt*="logo"]').catch(() => {
      // Fallback: click any link that goes to home
      return page.click('a[href="/"]').first();
    });

    await expect(page).toHaveURL('/');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile menu button exists
    const mobileMenu = page.locator('button:has-text("Menu"), button[aria-label*="menu"]');
    await expect(mobileMenu.first()).toBeVisible();

    await page.screenshot({ path: 'test-results/screenshots/01-homepage-mobile.png', fullPage: true });
  });

  test('should have security headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();

    // Check critical security headers
    expect(headers?.['x-frame-options']).toBeDefined();
    expect(headers?.['x-content-type-options']).toBeDefined();
    expect(headers?.['referrer-policy']).toBeDefined();
  });
});
