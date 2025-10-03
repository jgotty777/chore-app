import { expect, test } from '@playwright/test';

test('welcome page', async ({ page }) => {
  await page.goto('localhost:4000/');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Welcome to')).toBeVisible();
  expect(page).toHaveTitle(/Welcome to Mantine/);
});
