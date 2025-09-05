import {
  BeforeAll,
  Before,
  BeforeStep,
  AfterStep,
  After,
  AfterAll,
} from "@cucumber/cucumber";
import { csworld } from "../libs/cworld";
import { chromium } from "playwright";

BeforeAll(async function () {
  console.log("This is a before all function");
});

Before(async function () {
  let browser = await chromium.launch({
    headless: false,
  });
  let context = await browser.newContext();
  let page = await context.newPage();
  this.setData("page", page);
});

BeforeStep(async function (this: csworld) {});

AfterStep(async function (this:csworld) {
  let page = this.getData('page')
  const screenshot = await page.screenshot();
 this.attach(screenshot, "image/png");
  console.log("this is a after step function");
});

After(async function (this: csworld) {
  let page = this.getData("page");
  await page.close();
});

AfterAll(async function () {
  console.log("this is after all function");
});
