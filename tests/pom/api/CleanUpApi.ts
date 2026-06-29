import { type APIRequestContext } from '@playwright/test';

export class CleanUpApi {
  constructor(
    private request: APIRequestContext,
    private apiUrl: string = 'http://localhost:3001/api',
  ) {}

  async deleteUsersByEmail(email: string) {
    await this.request.delete(`${this.apiUrl}/users/by-email`, {
      data: { email: email },
    });
  }

  async deleteOrdersByEmail(email: string) {
    await this.request.delete(`${this.apiUrl}/orders/by-email`, {
      data: { email: email },
    });
  }
}
