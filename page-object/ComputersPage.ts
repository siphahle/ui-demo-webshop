import { expect, Locator, Page } from "@playwright/test";

export class ComputersPage
{
    
    protected readonly page:Page
    btn_AddToCart: Locator;
    link_Desktop: Locator;
    radioBtn_slow: Locator;
    
    
    constructor(page: Page)
    {
        this.page = page;
        this.btn_AddToCart = page.getByRole('button', { name: 'Add to cart' })
        this.link_Desktop = page.getByRole('link', { name: 'Desktops' })
        this.radioBtn_slow = page.getByRole('radio', { name: 'Slow' })

        
    }
    
    async navigateUrl()
    {
        await this.page.goto("/")
    }
    
    
    
    async addItemsToCartAndCheckout() {
        await this.page.getByRole('link', { name: 'Computers' }).first().click();
        await this.page.getByRole('link', { name: 'Picture for category Desktops' }).click();
        await this.btn_AddToCart.first().click();
        await this.radioBtn_slow.check();
        await this.page.locator('#add-to-cart-button-72').click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(1).click();
        await this.page.getByRole('listitem').filter({ hasText: '320 GB' }).click();
        await this.page.getByRole('radio', { name: '320 GB' }).check();
        await this.page.locator('#add-to-cart-button-16').click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(2).click();
        await this.radioBtn_slow.check();
        await this.page.locator('#add-to-cart-button-74').click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(3).click();
        await this.radioBtn_slow.check();
        await this.page.locator('#add-to-cart-button-75').click();

        await this.page.getByRole('link', { name: 'Shopping cart (4)' }).click();
        await this.page.locator('#termsofservice').check();
    }   

   async completeCheckOutProcess() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByRole('checkbox', { name: 'In-Store Pickup' }).check();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.locator("input[onclick='PaymentMethod.save()']").click();
        await this.page.locator("input[onclick='PaymentInfo.save()']").click();
    }
}
