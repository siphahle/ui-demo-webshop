import { Locator,Page } from "@playwright/test";
import * as userdata  from "../data/login-data.json";

export class LoginPage
{   
    readonly page:Page;
    link_loginMessage: Locator;
    link_login: Locator;
    textField_Email: Locator;
    textField_Password:Locator;
    btn_LogIn: Locator;
    constructor(page: Page)
    {
        this.page = page;
        this.link_loginMessage = page.getByRole('link', { name: 'testsipha@gmail.com' });
        this.link_login = page.getByRole('link', { name: 'Log in' })
        this.textField_Email = page.getByRole('textbox', { name: 'Email:' });
        this.textField_Password =page.getByRole('textbox', { name: 'Password:', exact: true });
        this.btn_LogIn = page.getByRole('button', { name: 'Log in' })
    }


    async navigateUrl()
    {
       await this.page.goto("/")
    }
    async  clickLoginLink()
    {
        await this.link_login.click();
    }
    async enterLogincredentials()
    {
        
        await this.textField_Email.fill(userdata.username);
        await this.textField_Password.fill(userdata.passsword);
        
    }
    async clickLoginBtn ()
    {
        await this.btn_LogIn.click();
    }
}