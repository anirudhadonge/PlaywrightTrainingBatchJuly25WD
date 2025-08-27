import {test as superTest,expect} from '@playwright/test'
import { Homepage } from '../PageModel/HomePage'
import { LoginPage } from '../PageModel/LoginPage'


export const basetest = superTest.extend<{homepage:Homepage, loginPage:LoginPage}>({
    homepage: async({page},use)=>{
        const homePage = new Homepage(page);
        await homePage.gotoApplication("https://www.automationexercise.com/");
        await use(homePage);
    },
    loginPage : async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})


