
import {test}from "@playwright/test"
import { App } from "../page-object/App";


test ("should be able to Login", async ({page}) =>{

   const app = new App (page);
   await app.LoginPage.navigateUrl();
   await app.LoginPage.clickLoginLink();
   await app.LoginPage.enterLogincredentials();
   await app.LoginPage.clickLoginBtn();
   await app.HomePage.isUserOnHomePage();
  
    await page.pause();
})
