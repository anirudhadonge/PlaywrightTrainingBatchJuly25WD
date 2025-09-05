// import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
// import { chromium, Page } from "playwright";
// import { CustomWorld } from "../../../libs/CustomWorld";
// import { expect } from "@playwright/test";
// let page: Page;
// setDefaultTimeout(180000);
// Given("Navigate to Application", async function (this: CustomWorld) {
//   page = this.getData("page");
//   await page.goto("https://www.automationexercise.com/");
//   await page.locator('[href="/login"]').click();
// });

import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";
import { chromium, Page } from "playwright";
import {expect} from "@playwright/test"
import { csworld } from "../../../libs/cworld";

// Then("I validate login is1 successfull", async function (this: CustomWorld) {
//   expect(false).toBeTruthy();
// });
setDefaultTimeout(180000);
Given("Navigate to Application", async function (this:csworld) {
  let page = this.getData('page');
  await page.goto("https://www.automationexercise.com/login");
  this.setData('key1',"This is key1")
});

