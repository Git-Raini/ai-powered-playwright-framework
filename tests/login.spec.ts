import { test } from '../fixtures/baseFixture';

import { ENV } from '../utils/env';

test('Verify user can login successfully', async ({ loginPage }) => {

    console.log(ENV.ORANGE_HRM_USERNAME);

    console.log(ENV.ORANGE_HRM_PASSWORD);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        ENV.ORANGE_HRM_USERNAME,
        ENV.ORANGE_HRM_PASSWORD
    );

    await loginPage.verifySuccessfulLogin();

});