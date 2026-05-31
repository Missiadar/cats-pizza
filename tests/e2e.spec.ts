// Регистрация
// Авторизация
// Оформление заказа для неавторизованного пользователя
// Оформление заказа для авторизованного пользователя

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test('Sign up', async ({ page }) => {
  await page.getByTestId('sign-in-button').click();
  await page.getByTestId('register-button').click();
  await page.getByLabel('Имя:').fill('Данила');
  await page.getByLabel('Email:').fill('cats@cats.ru');
  await page.getByLabel('Пароль:', { exact: true }).fill('qwerty123');
  await page.getByLabel('Повторите пароль:').fill('qwerty123');
  await page.getByTestId('sign-in-sign-up-button').click();
  await expect(page.getByTestId('sign-out-button')).toBeVisible();
});

test('Sign in', async ({ page }) => {
  await page.getByTestId('sign-in-button').click();
  await page.getByLabel('Email:').fill('cats@cats.ru');
  await page.getByLabel('Пароль:', { exact: true }).fill('qwerty123');
  await page.getByTestId('sign-in-sign-up-button').click();
  await expect(page.getByTestId('sign-out-button')).toBeVisible();
});

test('Buying for unauthorized person', async ({ page }) => {
  await page.getByTestId('cat-card_0').getByTestId('add-to-cart').click();
  await page.getByTestId('add-to-cart-modal').click();
  await page.getByTestId('open-cart-btn').click();
  await page.getByTestId('go-to-order-btn').click();
  await page.getByTestId('make-order-btn').click();
  await page.getByLabel('Email:').fill('cats@cats.ru');
  await page.getByLabel('Пароль:', { exact: true }).fill('qwerty123');
  await page.getByTestId('sign-in-sign-up-button').click();
  await page.getByLabel('Город*:').fill('Москва');
  await page.getByLabel('Улица*:').fill('Беговая');
  await page.getByLabel('Дом*:').fill('12');
  await page.getByLabel('Квартира:').fill('100');
  await page.getByLabel('Комментарий курьеру:').fill('Нету');
  await page.getByTestId('confirm-order-btn').click();
  await expect(page.getByTestId('modal-title')).toHaveText('Заказ оформлен');
  await page.getByTestId('close-submitted-modal-btn').click();
  await page.getByTestId('my-orders-btn').click();
  await expect(page.getByTestId('orders-list').getByRole('listitem').first()).toBeVisible();
});

test('Buying for authorized person', async ({ page }) => {
  await page.getByTestId('sign-in-button').click();
  await page.getByLabel('Email:').fill('cats@cats.ru');
  await page.getByLabel('Пароль:', { exact: true }).fill('qwerty123');
  await page.getByTestId('sign-in-sign-up-button').click();
  await page.getByTestId('cat-card_0').getByTestId('add-to-cart').click();
  await page.getByTestId('add-to-cart-modal').click();
  await page.getByTestId('open-cart-btn').click();
  await page.getByTestId('go-to-order-btn').click();
  await page.getByTestId('make-order-btn').click();
  await page.getByLabel('Город*:').fill('Москва');
  await page.getByLabel('Улица*:').fill('Беговая');
  await page.getByLabel('Дом*:').fill('12');
  await page.getByLabel('Квартира:').fill('100');
  await page.getByLabel('Комментарий курьеру:').fill('Нету');
  await page.getByTestId('confirm-order-btn').click();
  await expect(page.getByTestId('modal-title')).toHaveText('Заказ оформлен');
  await page.getByTestId('close-submitted-modal-btn').click();
  await page.getByTestId('my-orders-btn').click();
  await expect(page.getByTestId('orders-list').getByRole('listitem').first()).toBeVisible();
});
