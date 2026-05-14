import { test } from '../fixtures/baseFixture';

import { ENV } from '../utils/env';
import { captureScreenshot } from '../utils/screenshotUtils';

test('@smoke Verify user can login successfully', async ({ loginPage, page }) => {

    console.log(ENV.ORANGE_HRM_USERNAME);

    console.log(ENV.ORANGE_HRM_PASSWORD);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        ENV.ORANGE_HRM_USERNAME,
        ENV.ORANGE_HRM_PASSWORD
    );
await captureScreenshot(page, 'successful-login');

    await loginPage.verifySuccessfulLogin();

});