import { Page } from "@playwright/test";

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
        
        await this.page.getByRole('textbox', { name: 'Email:' }).fill('siphahle.nomnganga@gmail.com');
        await this.page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Siphahle_0412$');
        
    }
    async clickLoginBtn ()
    {
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
}