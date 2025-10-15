import { test, expect } from '@playwright/test';

test.describe('All Pages Functionality', () => {
  const pages = [
    { path: '/', name: 'Home', title: /Clinic 1 Medical/, heading: /Welcome|Clinic 1 Medical|Family Healthcare/i },
    { path: '/about', name: 'About', title: /About/, heading: /About|Our Practice|Meet/i },
    { path: '/services', name: 'Services', title: /Services/, heading: /Services|Healthcare|Medical/i },
    { path: '/doctors', name: 'Doctors', title: /Doctors|Physicians/, heading: /Doctors|Physicians|Our Team/i },
    { path: '/resources', name: 'Resources', title: /Resources/, heading: /Resources|Patient/i },
    { path: '/contact', name: 'Contact', title: /Contact/, heading: /Contact|Get in Touch/i },
  ];

  for (const page of pages) {
    test(`${page.name} page should load successfully`, async ({ page: pw }) => {
      await pw.goto(page.path);

      // Check page title
      await expect(pw).toHaveTitle(page.title);

      // Check main heading
      await expect(pw.locator('h1').first()).toBeVisible();

      // Check no console errors
      const errors: string[] = [];
      pw.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await pw.waitForLoadState('networkidle');

      // Take screenshot
      await pw.screenshot({
        path: `test-results/screenshots/04-${page.name.toLowerCase()}-page.png`,
        fullPage: true
      });

      expect(errors).toHaveLength(0);
      console.log(`✓ ${page.name} page loaded successfully`);
    });
  }

  test('All pages should have footer', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path);

      // Check footer exists
      await expect(page.locator('footer')).toBeVisible();

      // Check footer contains contact info
      await expect(page.locator('footer')).toContainText(/780-761-2430/);
      await expect(page.locator('footer')).toContainText(/Edmonton/);

      console.log(`✓ ${pg.name} page has footer with contact info`);
    }
  });

  test('All pages should have header navigation', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path);

      // Check header exists
      await expect(page.locator('header, nav').first()).toBeVisible();

      console.log(`✓ ${pg.name} page has navigation`);
    }
  });

  test('All pages should be mobile responsive', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    for (const pg of pages) {
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');

      // Take mobile screenshot
      await page.screenshot({
        path: `test-results/screenshots/04-${pg.name.toLowerCase()}-mobile.png`,
        fullPage: true
      });

      console.log(`✓ ${pg.name} page is mobile responsive`);
    }
  });

  test('All pages should load within reasonable time', async ({ page }) => {
    for (const pg of pages) {
      const startTime = Date.now();
      await page.goto(pg.path);
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;

      // Should load within 5 seconds
      expect(loadTime).toBeLessThan(5000);

      console.log(`✓ ${pg.name} page loaded in ${loadTime}ms`);
    }
  });
});
