
import {test}from "@playwright/test"
import { RegistrationPage} from "../page-object/RegistrationPage"


test ("User should be able to Register", async ({page}) =>{

    
    const registrationPage = new RegistrationPage (page);
    await registrationPage.navigateUrl();
    await registrationPage.navigateUrl();
    await registrationPage.clickRegisterLink();
    await registrationPage.selectGender();
    await registrationPage.enterInformation();  
})