import { Locator, Page } from "@playwright/test";

export class ComputersPage
{
    
    readonly page:Page
    btn_AddToCart: Locator;
    link_Desktop: Locator;
    radioBtn_slow: Locator;
    linkNavigation_Computers: Locator;
    picture_categoryDesktops: Locator;
    btn_addToCart72: Locator;
    radioBtn_320GB: Locator;
    btn_addToCart16: Locator;
    btn_addToCart74: Locator;
    btn_addToCart75: Locator;
    link_shoppingCart: Locator;
    checkbox_termsOfService: Locator;
    btn_Continue: Locator;
    checkbox_inStorePickUp: Locator;
    btn_paymentInfoContinue: Locator;
    btn_paymentMethodContinue: Locator;
    text_Total: Locator;
    
    
    constructor(page: Page)
    {
        this.page = page;
        this.btn_AddToCart = page.getByRole('button', { name: 'Add to cart' })
        this.link_Desktop = page.getByRole('link', { name: 'Desktops' })
        this.radioBtn_slow = page.getByRole('radio', { name: 'Slow' })
        this.linkNavigation_Computers = page.getByRole('link', { name: 'Computers' })
        this.picture_categoryDesktops = page.getByRole('link', { name: 'Picture for category Desktops' })
        this.btn_addToCart72 = page.locator('#add-to-cart-button-72')
        this.radioBtn_320GB  = page.getByRole('radio', { name: '320 GB' })
        this.btn_addToCart16 = page.locator('#add-to-cart-button-16')
        this.btn_addToCart74 = page.locator('#add-to-cart-button-74')
        this.btn_addToCart75 = page.locator('#add-to-cart-button-75')
        this.link_shoppingCart = page.getByRole('link', { name: 'Shopping cart (4)' })
        this.checkbox_termsOfService = page.locator('#termsofservice')
        this.btn_Continue = page.getByRole('button', { name: 'Continue' })
        this.checkbox_inStorePickUp = page.getByRole('checkbox', { name: 'In-Store Pickup' })
        this.btn_paymentMethodContinue = page.locator("input[onclick='PaymentMethod.save()']")
        this.btn_paymentInfoContinue = page.locator("input[onclick='PaymentInfo.save()']")
        this.text_Total = page.getByRole('row', { name: 'Total: 4665.00', exact: true }).getByRole('strong')

        
    }
    
    async navigateUrl()
    {
        await this.page.goto("/")
    }
    
    
    
    async addItemsToCartAndCheckout() {
        await this.linkNavigation_Computers.first().click();
        await this.picture_categoryDesktops.click();
        await this.btn_AddToCart.first().click();
        await this.radioBtn_slow.check();
        await this.btn_addToCart72.click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(1).click();
        await this.radioBtn_320GB.check();
        await this.btn_addToCart16.click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(2).click();
        await this.radioBtn_slow.check();
        await this.btn_addToCart74.click();
        
        await this.link_Desktop.first().click();
        await this.btn_AddToCart.nth(3).click();
        await this.radioBtn_slow.check();
        await this.btn_addToCart75.click();

        await this.link_shoppingCart.click();
        await this.checkbox_termsOfService.check();
    }   

   async completeCheckOutProcess() {
        await this.btn_Continue.click();
        await this.checkbox_inStorePickUp.check();
        await this.btn_Continue.click();
        await this.btn_paymentMethodContinue.click();
        await this.btn_paymentInfoContinue.click();
    }
}
