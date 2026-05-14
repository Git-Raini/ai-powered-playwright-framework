import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

type MyFixtures = {

    loginPage: LoginPage;

    pimPage: PIMPage;

};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },
    pimPage: async ({ page }, use) => {

    const pimPage = new PIMPage(page);

    await use(pimPage);

},

});

export { expect } from '@playwright/test';