import { test, expect } from '@playwright/test';

test('Verify users API returns successful response', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);

    expect(responseBody[0].name).toBeTruthy();

});