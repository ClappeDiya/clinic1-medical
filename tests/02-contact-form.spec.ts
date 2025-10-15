import { test, expect } from '@playwright/test';

test.describe('Contact Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should load contact page successfully', async ({ page }) => {
    // Check page title contains clinic name
    await expect(page).toHaveTitle(/Clinic 1 Medical/i);

    // Check main heading contains "Contact" or "Get in Touch"
    await expect(page.locator('h1').first()).toContainText(/Contact|Get in Touch/i);

    await page.screenshot({ path: 'test-results/screenshots/02-contact-page.png', fullPage: true });
  });

  test('should display contact information', async ({ page }) => {
    // Check phone number - Use .first() for multiple instances
    await expect(page.locator('text=/780-761-2430/').first()).toBeVisible();

    // Check text number - Use .first() for multiple instances
    await expect(page.locator('text=/587-926-7747/').first()).toBeVisible();

    // Check fax number
    await expect(page.locator('text=/780-473-3330/').first()).toBeVisible();

    // Check address - Use .first() for multiple instances
    await expect(page.locator('text=/16644-71 St NW/i').first()).toBeVisible();
    await expect(page.locator('text=/Edmonton/i').first()).toBeVisible();
  });

  test('should have all form fields', async ({ page }) => {
    await expect(page.locator('#firstName')).toBeVisible();
    await expect(page.locator('#lastName')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Click submit without filling form
    await page.click('button[type="submit"]');

    // Check if HTML5 validation works
    const firstName = page.locator('#firstName');
    const isInvalid = await firstName.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#email', 'invalid-email');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'Test message');

    await page.click('button[type="submit"]');

    // Check if email validation works
    const email = page.locator('#email');
    const isInvalid = await email.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('should have honeypot field hidden', async ({ page }) => {
    // Check if honeypot field exists but is hidden
    const honeypot = page.locator('#website');
    const exists = await honeypot.count() > 0;

    if (exists) {
      // Check if it's hidden using CSS
      const isHidden = await honeypot.evaluate((el: HTMLElement) => {
        const style = window.getComputedStyle(el.parentElement!);
        return style.position === 'absolute' && style.left === '-9999px';
      });
      expect(isHidden).toBe(true);
    }
  });

  test('should show loading state when submitting', async ({ page }) => {
    // Fill form with valid data
    await page.fill('#firstName', 'Test');
    await page.fill('#lastName', 'User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#phone', '1234567890');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'This is a test message for Playwright testing.');

    // Take screenshot before submission
    await page.screenshot({ path: 'test-results/screenshots/02-form-filled.png', fullPage: true });

    // Click submit
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Check for loading state
    const loadingText = await submitButton.textContent();
    expect(loadingText).toMatch(/sending|loading/i);
  });

  test('should display office hours', async ({ page }) => {
    // Check office hours - Use .first() for multiple instances
    await expect(page.locator('text=/Monday/i').first()).toBeVisible();
    await expect(page.locator('text=/9:00 AM - 5:00 PM/i').first()).toBeVisible();
    await expect(page.locator('text=/Saturday.*Closed/i').first()).toBeVisible();
  });

  test('should have emergency information', async ({ page }) => {
    // Check emergency info - Use .first() for multiple instances
    await expect(page.locator('text=/emergency/i').first()).toBeVisible();
    await expect(page.locator('text=/911/i').first()).toBeVisible();
  });

  test('should have accessible form labels', async ({ page }) => {
    // Check that all form fields have proper labels
    const firstNameLabel = await page.locator('label[for="firstName"]').textContent();
    expect(firstNameLabel).toContain('First Name');

    const lastNameLabel = await page.locator('label[for="lastName"]').textContent();
    expect(lastNameLabel).toContain('Last Name');

    const emailLabel = await page.locator('label[for="email"]').textContent();
    expect(emailLabel).toContain('Email');
  });

  test('should have no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    expect(consoleErrors).toHaveLength(0);
  });
});
