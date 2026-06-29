import { type Page, expect } from '@playwright/test';

export class AuthModal {
  constructor(private page: Page) {}

  async open() {
    await this.page.getByTestId('sign-in-button').click();
  }

  async signUp(name: string, email: string, password: string) {
    await this.page.getByTestId('register-button').click();
    await this.page.getByLabel('Имя:').fill(name);
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:', { exact: true }).fill(password);
    await this.page.getByLabel('Повторите пароль:').fill(password);
    await this.page.getByTestId('sign-in-sign-up-button').click();
  }

  async signIn(email: string, password: string) {
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:', { exact: true }).fill(password);
    await this.page.getByTestId('sign-in-sign-up-button').click();
  }

  async assertSignedIn() {
    await expect(this.page.getByTestId('sign-out-button')).toBeVisible();
  }
}
