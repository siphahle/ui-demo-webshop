import { Locator,Page } from "@playwright/test";
import * as userdata  from "../data/registration-data.json";

export class RegistrationPage
{   

    readonly page:Page;
    link_Register: Locator;
    radioBtn_Male: Locator;
    textField_FirstName: Locator;
    textField_LastName: Locator;
    textField_Email: Locator;
    textField_Password: Locator;
    textField_ConfirmPassword: Locator;
    btn_Register: Locator;
    text_RegCompletedMsg: Locator;
    
    constructor(page: Page)
    {
        this.page = page;
        this.link_Register = page.getByRole('link', { name: 'Register' });
        this.radioBtn_Male = page.getByRole('radio', { name: 'Male', exact: true });
        this.textField_FirstName = page.getByRole('textbox', { name: 'First name:' })
        this.textField_LastName = page.getByRole('textbox', { name: 'Last name:' });
        this.textField_Email = page.getByRole('textbox', { name: 'Email:' });
        this.textField_Password = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.textField_ConfirmPassword = page.getByRole('textbox', { name: 'Confirm password:' });
        this.btn_Register = page.getByRole('button', { name: 'Register' });
        this.text_RegCompletedMsg = page.getByText('Your registration completed')
    }

    async navigateUrl()
    {
       await this.page.goto("/")
    }
    async  clickRegisterLink()
    {
        await this.link_Register.click();
    }
    async selectGender()
    {
        await this.radioBtn_Male.check();
    }
    async enterInformation()
    {
        await this.textField_FirstName.fill(userdata.FirstName);
        await this.textField_LastName.fill(userdata.LastName);
        await this.textField_Email.fill(userdata.Email);
        await this.textField_Password.fill(userdata.Password);
        await this.textField_ConfirmPassword.fill(userdata.ConfirmPassword);
        await this.btn_Register.click();
    }
}