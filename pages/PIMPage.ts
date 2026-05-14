import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {

    readonly page: Page;

    readonly pimMenu: Locator;

    readonly addEmployeeButton: Locator;

    readonly firstNameInput: Locator;

    readonly middleNameInput: Locator;

    readonly lastNameInput: Locator;

    readonly saveButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.pimMenu = page.locator('//span[text()="PIM"]');

        this.addEmployeeButton = page.locator('//a[text()="Add Employee"]');

        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.saveButton = page.locator('button[type="submit"]');

    }

    async navigateToPIM() {

        await this.pimMenu.click();

    }

    async clickAddEmployee() {

        await this.addEmployeeButton.click();

    }

    async addEmployee(
        firstName: string,
        middleName: string,
        lastName: string
    ) {

        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.fill(lastName);

        await this.saveButton.click();

    }

    async verifyEmployeeAdded() {

    await this.page.waitForURL(
        '**/viewPersonalDetails/**',
        { timeout: 15000 }
    );

    await expect(this.page).toHaveURL(
        /viewPersonalDetails/
    );

}
}