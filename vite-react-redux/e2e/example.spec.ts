import { test, expect } from './extensions.js';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('Mocks API', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  const post = page.getByText('examp');
  await expect(post).toBeVisible();
});
