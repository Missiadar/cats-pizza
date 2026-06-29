import { type Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {
    // данная строка больше для наглядности(она необязательна, так как мы задали private)
    this.page = page;
  }

  async open() {
    await this.page.goto('');
  }

  async addFirstCatToCart() {
    await this.page.getByTestId('cat-card_0').getByTestId('add-to-cart').click();
    await this.page.getByTestId('add-to-cart-modal').click();
  }

  async goToCheckoutFromCart() {
    await this.page.getByTestId('open-cart-btn').click();
    await this.page.getByTestId('go-to-order-btn').click();
    await this.page.getByTestId('make-order-btn').click();
  }
}
