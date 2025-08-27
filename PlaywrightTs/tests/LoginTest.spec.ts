import test from "@playwright/test";
import { basetest } from "./../Fixtures/Fixture";
import { Homepage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";

let homepage: Homepage;
let loginPage: LoginPage;

test("Validate Login Action in the Application", async ({ page }) => {
  homepage = new Homepage(page);
  await homepage.gotoApplication("https://www.automationexercise.com/");
  await homepage.clickOnLogin();
  loginPage = new LoginPage(page);
  await loginPage.LoginToApplication('anirudha.donge@gmail.com','password25');
  await homepage.ValidateLoginIsSuccessfull();
});

basetest("Login test with custom fixtures", async ({
  homepage,
  loginPage,
}) => {
  await homepage.clickOnLogin();
  await loginPage.LoginToApplication("anirudha.donge@gmail.com", "password25");
  await homepage.ValidateLoginIsSuccessfull();
});
