import {expect, test}from "@playwright/test"
import { ComputersPage } from "../page-object/ComputersPage";

test.use({ storageState: "resources\\storage-state\\storageState.json" });

test ("User should be able to Add Items to the Shopping Cart @Smoke", async ({page}) =>{

   const computersPage = new ComputersPage(page); 
   
   
   await computersPage.navigateUrl();


   await computersPage.addItemsToCartAndCheckout()

    await expect(page.getByRole('row', { name: 'Total: 4665.00', exact: true }).getByRole('strong')).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page.locator('h1')).toContainText('Checkout');

   await computersPage.completeCheckOutProcess();
    await expect(page.locator('#checkout-confirm-order-load')).toContainText('4672.00');

    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();
   


})

test.afterEach( async ({ page }) => {
    await page.getByRole('button', { name: 'Continue' }).click();
  });