import { test } from '../../fixtures/app.fixtures';
import { CleanUpApi } from '../api/CleanUpApi';
import { testUser } from '../data/testData';

test.describe('Authorization', () => {
  let createdUserEmail: string | null = null;

  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test.afterAll(async ({ request }) => {
    if (!createdUserEmail) return;

    const cleanUpApi = new CleanUpApi(request);
    await cleanUpApi.deleteUsersByEmail(createdUserEmail);

    createdUserEmail = null;
  });

  test('Sign up', async ({ authModal }) => {
    createdUserEmail = `${Date.now()}@test.ru`;

    await authModal.open();
    await authModal.signUp('Test', createdUserEmail, testUser.existing.password);
    await authModal.assertSignedIn();
  });

  test('Sign in', async ({ authModal }) => {
    await authModal.open();
    await authModal.signIn(testUser.existing.email, testUser.existing.password);
    await authModal.assertSignedIn();
  });
});
