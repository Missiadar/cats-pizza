/* eslint-disable react-hooks/rules-of-hooks */
import { test as base } from '@playwright/test';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { HomePage } from '../pom/pages/HomePage';
import { OrdersPage } from '../pom/pages/OrdersPage';

// Declare the types of your fixtures.
type MyFixtures = {
  authModal: AuthModal;
  checkoutPage: CheckoutPage;
  homePage: HomePage;
  ordersPage: OrdersPage;
};

export const test = base.extend<MyFixtures>({
  authModal: async ({ page }, use) => {
    const authModal = new AuthModal(page);
    await use(authModal);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  ordersPage: async ({ page }, use) => {
    const ordersPage = new OrdersPage(page);
    await use(ordersPage);
  },
});
export { expect } from '@playwright/test';
