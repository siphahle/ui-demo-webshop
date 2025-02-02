import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-object/LoginPage';


test('Login and save storage state', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Perform login
    const loginPage = new LoginPage(page);
    await loginPage.navigateUrl();
    await loginPage.clickLoginLink();
    await loginPage.enterLogincredentials();
    await loginPage.clickLoginBtn();
    await expect(loginPage.link_loginMessage).toBeVisible();
   
  // Save storage state
  await page.context().storageState({ path: 'resources\\storage-state\\storageState.json' });
});
