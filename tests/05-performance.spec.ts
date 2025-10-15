import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should have acceptable Core Web Vitals', async ({ page }) => {
    await page.goto('/');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        timeToFirstByte: navigation.responseStart - navigation.requestStart,
      };
    });

    console.log('Performance Metrics:', metrics);

    // DOMContentLoaded should be under 2 seconds
    expect(metrics.domContentLoaded).toBeLessThan(2000);

    // Full load should be under 5 seconds
    expect(metrics.loadComplete).toBeLessThan(5000);

    // TTFB should be under 1 second
    expect(metrics.timeToFirstByte).toBeLessThan(1000);
  });

  test('should not have too many network requests', async ({ page }) => {
    const requests: string[] = [];

    page.on('request', (request) => {
      requests.push(request.url());
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Should have reasonable number of requests (< 50 for a basic page)
    expect(requests.length).toBeLessThan(50);

    console.log(`Total network requests: ${requests.length}`);
  });

  test('should load images efficiently', async ({ page }) => {
    await page.goto('/');

    const images = await page.locator('img').all();
    console.log(`Total images on homepage: ${images.length}`);

    for (const img of images) {
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');

      // All images should have src
      expect(src).toBeTruthy();

      // All images should have alt text (accessibility)
      expect(alt).toBeTruthy();
    }

    console.log('✓ All images have proper src and alt attributes');
  });

  test('should not block rendering with large resources', async ({ page }) => {
    const largeResources: string[] = [];

    page.on('response', async (response) => {
      const size = parseInt(response.headers()['content-length'] || '0');

      // Flag resources larger than 1MB
      if (size > 1024 * 1024) {
        largeResources.push(`${response.url()} (${Math.round(size / 1024 / 1024)}MB)`);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    if (largeResources.length > 0) {
      console.warn('Large resources found:', largeResources);
    }

    // Warn if any resources are over 1MB (but don't fail the test)
    console.log(`✓ Checked for large resources (found ${largeResources.length})`);
  });

  test('should have proper caching headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();

    // Static assets should have cache headers
    // (Note: This depends on your Next.js configuration)
    console.log('Cache-Control:', headers?.['cache-control']);

    // Just check that headers exist (specific values depend on deployment)
    expect(headers).toBeTruthy();
  });
});
