import {expect,test}from "@playwright/test"
import { LoginPage } from "../page-object/LoginPage";

test ("User should be able to Login", async ({page}) =>{

   const loginPage = new LoginPage(page);
   await loginPage.navigateUrl();
   await loginPage.clickLoginLink();
   await loginPage.enterLogincredentials();
   await loginPage.clickLoginBtn();

})