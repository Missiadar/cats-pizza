import { type Page, expect } from '@playwright/test';

export class OrdersPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.getByTestId('my-orders-btn').click();
  }

  async assertHasOrders() {
    await expect(this.page.getByTestId('orders-list').getByRole('listitem').first()).toBeVisible();
  }
}
