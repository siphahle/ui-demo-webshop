import {expect, test}from "@playwright/test"
import { ComputersPage } from "../page-object/ComputersPage";

test.use({ storageState: "resources\\storage-state\\storageState.json" });

test ("User should be able to Add Items to the Shopping Cart", async ({page}) =>{

   const computersPage = new ComputersPage(page); 
   
   
   await computersPage.navigateUrl();
   await computersPage.clickOnComputers();
   await computersPage.clickOnDesktops();
   await computersPage.addMultipleItemsToCart();
   await computersPage.clickOnshoppingCart();
   await expect(computersPage.text_totalPrice).toContainText('4695.00')
   await computersPage.clickOncheckoutBtn();
   await expect(computersPage.heading_checkout).toContainText('Checkout')
   await computersPage.clickOnContinuebtn();
   await expect(computersPage.heading_billingAddress).toContainText('Billing address')
   //await computersPage.clickOnContinuebtn();
   //await expect(computersPage.heading_shippingAddress).toContainText('Shipping address')
   //await computersPage.selectInStorePickUp();
   //await computersPage.clickOnContinuebtn();
   //await computersPage.confirmOrder();
    
})