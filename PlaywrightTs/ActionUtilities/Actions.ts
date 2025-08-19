import { Page } from "@playwright/test";

export async function downloadFile(page: Page, locator: string) {
  const downloadEvent = page.waitForEvent("download");
  await page.locator(locator).click();
  const download = await downloadEvent;
  await download.saveAs("./Files/" + download.suggestedFilename());
}

export async function handleAlert(page: Page, locator: string) {
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    dialog.accept();
  });
  await page.locator(locator).click();
}

export async function dismissConfirmPopup(page: Page, locator: string) {
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    dialog.dismiss();
  });
  await page.locator(locator).click();
}
