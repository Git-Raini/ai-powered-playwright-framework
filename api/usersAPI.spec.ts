import { test, expect } from '@playwright/test';

import { APIClient } from './apiClient';

test(
    'Verify users API returns successful response',

    async ({ request }) => {

        const apiClient = new APIClient(request);

        const response = await apiClient.getUsers();

        const responseBody = await response.json();

        expect(responseBody.length).toBeGreaterThan(0);

        expect(responseBody[0].name).toBeTruthy();

    }

);