import test from "@playwright/test";
import { basetest } from "./../Fixtures/Fixture";
import { Homepage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";
import loginData from "../TestData/loginData.json"

let homepage: Homepage;
let loginPage: LoginPage;

test.only("Validate Login Action in the Application", async ({ page }) => {
  console.log(loginData['value']);
  homepage = new Homepage(page);
  await homepage.gotoApplication(process.env.url);
  await homepage.clickOnLogin();
  loginPage = new LoginPage(page);
  await loginPage.LoginToApplication(process.env.username,process.env.password );
  await homepage.ValidateLoginIsSuccessfull();
});

basetest(
  "Login test with custom fixtures",
  async ({ browser, context, page, homepage, loginPage }) => {
    await homepage.clickOnLogin();
    await loginPage.LoginToApplication(
      "anirudha.donge@gmail.com",
      "password25"
    );
    await homepage.ValidateLoginIsSuccessfull();
  }
);
