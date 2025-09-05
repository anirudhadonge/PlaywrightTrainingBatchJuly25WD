// import { Then } from "@cucumber/cucumber";
// import { CustomWorld } from "../../../libs/CustomWorld";

import { Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { csworld } from "../../../libs/cworld";

// import {Page } from "playwright";
Then("I enter username and password", async function (this:csworld) {
  let page = this.getData('page');
  console.log(this.getData('key1'))
  await page?.locator('[data-qa="login-email"]').fill("anirudha.donge@gmail.com");
  await page?.locator('[data-qa="login-password"]').fill("password25");
  await page?.locator('[data-qa="login-button"]').click();
});


 Then('I enter {string} and {string}', async function (username:string, password:string) {
           // Write code here that turns the phrase above into concrete actions
            let page = this.getData('page');
  console.log(this.getData('key1'))
  await page?.locator('[data-qa="login-email"]').fill(username);
  await page?.locator('[data-qa="login-password"]').fill(password);
  await page?.locator('[data-qa="login-button"]').click();
         });

Then("I validate login is successfull", async function (this:csworld) {
  let page = this.getData('page');
 await expect(page.locator('[href="/logout"]')).toBeVisible();
});

