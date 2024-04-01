import { test, expect } from './extensions';

test('Tests the real API in the browser', async ({ page }) => {
  await page.goto('http://localhost:3000/react-query');
  const post = page.getByText('examp');
  await expect(post).toBeVisible();
});
