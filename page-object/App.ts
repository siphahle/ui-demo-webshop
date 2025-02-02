
import {Page, test}from "@playwright/test"
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegistrationPage";
import { ComputersPage } from "./ComputersPage";


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
    public get RegistrationPage(): RegistrationPage
    {
        return new RegistrationPage(this.page);
    }
    public get ComputersPage(): ComputersPage
    {
        return new ComputersPage(this.page)
    }
}