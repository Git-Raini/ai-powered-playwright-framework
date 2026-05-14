import { test } from '../fixtures/baseFixture';

import { loginData } from '../test-data/loginData';

import { employeeData } from '../test-data/employeeData';

test('@regression Verify admin can add employee successfully',

async ({ loginPage, pimPage }) => {

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUsername,
        loginData.validPassword
    );

    await loginPage.verifySuccessfulLogin();

    await pimPage.navigateToPIM();

    await pimPage.clickAddEmployee();

    await pimPage.addEmployee(
        employeeData.firstName,
        employeeData.middleName,
        employeeData.lastName
    );

    await pimPage.verifyEmployeeAdded();

});