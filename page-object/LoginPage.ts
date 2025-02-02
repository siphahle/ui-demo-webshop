import { Page } from "@playwright/test";
import * as userdata  from "../data/login-data.json";

export class LoginPage
{   

    protected readonly page;
    link_loginMessage: any;
    constructor(page: Page)
    {
        this.page = page;
        this.link_loginMessage =page.getByRole('link', { name: 'testsipha@gmail.com' });
    }


    async navigateUrl()
    {
       await this.page.goto("/")
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