import { type Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async signInInCheckout(email: string, password: string) {
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:', { exact: true }).fill(password);
    await this.page.getByTestId('sign-in-sign-up-button').click();
  }

  async fillAddress(address: {
    city: string;
    street: string;
    house: string;
    appartment: string;
    comment: string;
  }) {
    await this.page.getByLabel('Город*:').fill(address.city);
    await this.page.getByLabel('Улица*:').fill(address.street);
    await this.page.getByLabel('Дом*:').fill(address.house);
    await this.page.getByLabel('Квартира:').fill(address.appartment);
    await this.page.getByLabel('Комментарий курьеру:').fill(address.comment);
  }

  async submit() {
    await this.page.getByTestId('confirm-order-btn').click();
    await expect(this.page.getByTestId('modal-title')).toHaveText('Заказ оформлен');
    await this.page.getByTestId('close-submitted-modal-btn').click();
  }
}
