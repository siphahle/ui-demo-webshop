
import {test}from "@playwright/test"
import { App } from "../page-object/App"


test ("should be able to navigate", async ({page}) =>{

    
    const app = new App (page);
    await app.LoginPage.navigateUrl();
    await app.RegistrationPage.navigateUrl();
    await app.RegistrationPage.clickRegisterLink();
    await app.RegistrationPage.selectGender();
    await app.RegistrationPage.enterInformation();
    ///await page.pause();
    
    
    
})