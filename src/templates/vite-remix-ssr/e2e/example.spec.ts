import { test, expect } from './extensions';

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

// eslint-disable-next-line playwright/no-skipped-test
test.skip('Mocks API', async ({ page }) => {
  await page.goto('http://localhost:3000/react-query');
  const post = page.getByText('examp');
  await expect(post).toBeVisible();
});
