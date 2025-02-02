import { expect, Page } from "@playwright/test";

export class ComputersPage
{   

    protected readonly page;
    btn_addToCart: any;
    text_totalPrice: any;
    inputqtys: any;
    btn_desktops: any;
    picture_linkeDesktops:any;
    heading_checkout: any;
    heading_billingAddress: any;
    heading_shippingAddress: any;
    textYourOrder: any;
    constructor(page: Page)
    {
        this.page = page;
        this.btn_addToCart = page.locator('#add-to-cart-button-72')
        this.text_totalPrice = page.locator('span[class="product-price order-total"]')
        this.inputqtys = page.locator("input[name^='itemquantity']")
        this.btn_desktops = page.getByRole('link', { name: 'Desktops' })
        this.picture_linkeDesktops = page.getByRole('link', { name: 'Picture of Build your own cheap computer' })
        this.heading_checkout = page.getByRole('heading', { name: 'Checkout' })
        this.heading_billingAddress = page.getByRole('heading', { name: 'Billing address' })
        this.heading_shippingAddress =page.getByRole('heading', { name: 'Shipping address' })
        this.textYourOrder = page.getByText('Your order has been')
    }

    async navigateUrl()
    {
       await this.page.goto("/")
    }
    async clickOnComputers()
    {
        await this.page.getByRole('link', { name: 'Computers' }).first().click();
    }
    async clickOnDesktops ()
    {
        await this.page.getByRole('link', { name: 'Picture for category Desktops' }).click();
    }
    async addMultipleItemsToCart()

    {
        await this.page.getByRole('link', { name: 'Picture of Build your own cheap computer' }).click();
        await this.btn_addToCart.click();

        await this.btn_desktops.first().click();
        await this.picture_linkeDesktops.click
        await this.page.getByRole('button', { name: 'Add to cart' }).first()
        

        await this.btn_desktops.first().click();
        await this.page.getByRole('link', { name: 'Picture of Build your own computer' }).click();
        await this.page.getByRole('radio', { name: '320 GB' }).check();
        await this.page.locator('#add-to-cart-button-16').click();

        await this.btn_desktops.first().click();
        await this.page.getByRole('link', { name: 'Picture of Build your own expensive computer' }).click();
        await this.page.locator('#add-to-cart-button-74').click();

        await this.btn_desktops.first().click();
        await this.page.getByRole('link', { name: 'Picture of Simple Computer' }).click();
        await this.page.getByRole('radio', { name: 'Slow' }).check();
        await this.page.locator('#add-to-cart-button-75').click();
        await this.btn_desktops.first().click();
    }
    async clickOnshoppingCart()
    {
        await this.page.getByRole('link', { name: 'Shopping cart (4)' }).click();
      
    }
    async clickOncheckoutBtn()
    {   
        await this.page.locator('#termsofservice').click();
        await this.page.getByRole('button', { name: 'Checkout' }).click();

    }
    async clickOnContinuebtn ()
    {
        await this.page.getByRole('button', { name: 'Continue' }).click();
      
    }
    async clickonSecondContinuebtn()
    {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }
    async selectInStorePickUp()
    {
        //await this.page.getByRole('button', { name: 'Continue' }).click
        await this.page.getByRole('checkbox', { name: 'In-Store Pickup' }).click();
    }
    async confirmOrder()
    {
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }
    

}
