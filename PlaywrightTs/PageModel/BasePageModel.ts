import { expect, Locator, Page } from "@playwright/test";

export class BasePageModel {
  page: Page;

  constructor(page) {
    this.page = page;
  }

  async gotoApplication(url:string){
    console.log("Navigate to "+url);
    await this.page.goto(url);
  }
  
  async getLocator(locator:string,nth:number=0):Promise<Locator>{
    console.log(`Get the locator for ${locator}`);
    return this.page.locator(locator).nth(nth);
  }

  async clickOnElement(locator:Locator):Promise<void>{
    console.log(`Click on element ${locator}`); 
    await locator.click();
  }

  async fill(locator:Locator,inputString:string){
    console.log(`Fill the ${inputString} in the input field`);
    await locator.fill(inputString);
  }
  async downloadFile(locator: string) {
    const downloadEvent = this.page.waitForEvent("download");
    await this.page.locator(locator).click();
    const download = await downloadEvent;
    await download.saveAs("./Files/" + download.suggestedFilename());
  }

  async handleAlert(locator: string) {
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      console.log(dialog.message());
      dialog.accept();
    });
    await this.page.locator(locator).click();
  }

  async dismissConfirmPopup(locator: string) {
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      console.log(dialog.message());
      dialog.dismiss();
    });
    await this.page.locator(locator).click();
  }

  async ValidateElementIsVisible(locator:Locator){
    console.log(`Validate the element ${locator} is visible`);
    await expect(locator).toBeVisible();
  }
}
