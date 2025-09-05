import { BeforeAll, Before, After, AfterAll, AfterStep, Status, setDefaultTimeout, BeforeStep } from "@cucumber/cucumber";
import { CustomWorld } from "../libs/CustomWorld";
import { Browser, BrowserContext, chromium, Page } from "playwright";

let browser:Browser;
let context:BrowserContext;
let page:Page;
BeforeAll(() => {
  setDefaultTimeout(180000);
  console.log("This is a before all method");
});

AfterAll(() => {
  console.log("After all method");
});

Before(async function (this: CustomWorld,{pickle}) {
   console.log(`${pickle.name} and ${pickle.id}`)
    browser = await chromium.launch({
    headless: false,
  });
  context = await browser.newContext();
  page = await context.newPage();
  page.setDefaultTimeout(30000);
  this.setData("page", page);
});

After(async function(this:CustomWorld){
    await page.close();
    await context.close();
    await browser.close();
})

AfterStep(async function (this: CustomWorld,{result,pickleStep}) {
    if(result.status=== Status.FAILED){
      const screenshot = await page.screenshot();
      await this.attach(screenshot, "image/png");
    }
});

BeforeStep(async function (this:CustomWorld,{pickleStep}){
    console.log(`${pickleStep.text}`)
})