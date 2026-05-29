import { test, expect } from '@playwright/test';

test('Check header', async ({ page }) => {
  await page.goto('');
  const header = page.getByTestId('home-page-header');
  await expect(header).toBeVisible();
});

test('Check card list items', async ({ page }) => {
  await page.goto('');
  const firstCard = page.getByTestId('cat-card_0');
  await expect(firstCard).toBeVisible();
});
