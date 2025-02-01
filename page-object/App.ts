
import {Page, test}from "@playwright/test"
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { RegistrationPage } from "./RegistrationPage";

export class App
{   
    protected page: Page;
    constructor (page: Page)
    {
        this.page = page;
    }

    public get LoginPage(): LoginPage
    {
        return new LoginPage(this.page);
    }

    public get HomePage(): HomePage
    {
        return new HomePage(this.page);
    }
    public get RegistrationPage(): RegistrationPage
    {
        return new RegistrationPage(this.page);
    }
}