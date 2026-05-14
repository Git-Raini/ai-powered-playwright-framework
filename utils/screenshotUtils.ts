import { Page } from '@playwright/test';

import { getCurrentTimestamp } from './dateUtils';

export async function captureScreenshot(
    page: Page,
    screenshotName: string
) {

    const timestamp = getCurrentTimestamp();

    await page.screenshot({

        path: `screenshots/${screenshotName}-${timestamp}.png`,

        fullPage: true

    });

}