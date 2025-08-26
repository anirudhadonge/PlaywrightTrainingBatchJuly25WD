import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class Homepage extends BasePageModel{

    //menu
    loginLink:string= '[href="/login"]';
    productLink:string='[href="/products"]';
    carLink:string= '[href="/view_cart"]';
    homeLink:string='.shop-menu.pull-right [href="/"]';
    logoutLink:string='[href="/logout"]';

    constructor(page:Page){
        super(page);
    }

    async clickOnLogin(){
        await this.clickOnElement(await this.getLocator(this.loginLink));
    }

    async clickOnProduct(){
         await this.clickOnElement(await this.getLocator(this.productLink));
    }

    async ValidateLoginIsSuccessfull(){
        await this.ValidateElementIsVisible(await this.getLocator(this.logoutLink));
    }
}