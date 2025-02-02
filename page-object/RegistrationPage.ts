import { Page } from "@playwright/test";
import * as userdata  from "../data/registration-data.json";

export class RegistrationPage
{   

    protected readonly page;
    constructor(page: Page)
    {
        this.page = page;
    }

    async navigateUrl()
    {
       await this.page.goto("/")
    }
    async  clickRegisterLink()
    {
        await this.page.getByRole('link', { name: 'Register' }).click();
    }
    async selectGender()
    {
        await this.page.getByRole('radio', { name: 'Male', exact: true }).check();
    }
    async enterInformation()
    {
        await this.page.getByRole('textbox', { name: 'First name:' }).fill(userdata.FirstName);
        await this.page.getByRole('textbox', { name: 'Last name:' }).fill(userdata.LastName);
        await this.page.getByRole('textbox', { name: 'Email:' }).fill(userdata.Email);
        await this.page.getByRole('textbox', { name: 'Password:', exact: true }).fill(userdata.Password);
        await this.page.getByRole('textbox', { name: 'Confirm password:' }).fill(userdata.ConfirmPassword);
        await this.page.getByRole('button', { name: 'Register' }).click();
    }
}