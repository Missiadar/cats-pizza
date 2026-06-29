import { test } from '../../fixtures/app.fixtures';
import { CleanUpApi } from '../api/CleanUpApi';
import { testAddress, testUser } from '../data/testData';

test.describe('Orders', () => {
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test.afterEach(async ({ request }) => {
    const cleanUpApi = new CleanUpApi(request);
    await cleanUpApi.deleteOrdersByEmail(testUser.existing.email);
  });

  test('Buying for unauthorized person in checkout', async ({
    checkoutPage,
    homePage,
    ordersPage,
  }) => {
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPage.signInInCheckout(testUser.existing.email, testUser.existing.password);
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await ordersPage.open();
    await ordersPage.assertHasOrders();
  });

  test('Buying for authorized person in checkout', async ({
    authModal,
    checkoutPage,
    homePage,
    ordersPage,
  }) => {
    await authModal.open();
    await authModal.signIn(testUser.existing.email, testUser.existing.password);
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await ordersPage.open();
    await ordersPage.assertHasOrders();
  });
});
