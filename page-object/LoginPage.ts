import { Page } from "@playwright/test";
import * as userdata  from "../data/login-data.json";

export class LoginPage
{   

    protected readonly page;
    constructor(page: Page)
    {
        this.page = page;
    }

    async navigateUrl()
    {
       await this.page.goto("https://demowebshop.tricentis.com/")
    }
    async  clickLoginLink()
    {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }
    async enterLogincredentials()
    {
        
        await this.page.getByRole('textbox', { name: 'Email:' }).fill(userdata.username);
        await this.page.getByRole('textbox', { name: 'Password:', exact: true }).fill(userdata.passsword);
        
    }
    async clickLoginBtn ()
    {
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
}