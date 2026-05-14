import { test, expect } from '@playwright/test';

import { APIClient } from './apiClient';

import { generateRandomString }
from '../utils/randomUtils';

test(
    'Verify user can be created successfully',

    async ({ request }) => {

        const apiClient = new APIClient(request);

        const userPayload = {

            name: `Raini-${generateRandomString(5)}`,

            email:
            `raini${generateRandomString(4)}@test.com`,

            job: 'QA Engineer'

        };

        const response =
            await apiClient.createUser(userPayload);

        const responseBody =
            await response.json();

        expect(responseBody.name)
            .toBe(userPayload.name);

        expect(responseBody.job)
            .toBe(userPayload.job);

        expect(responseBody.id)
            .toBeTruthy();

    }

);