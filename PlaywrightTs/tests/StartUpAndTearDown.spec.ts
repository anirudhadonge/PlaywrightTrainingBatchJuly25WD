import test, { expect } from "@playwright/test";
import { downloadFile } from "../ActionUtilities/Actions";

test.beforeAll("BeforeAll for Some Tests", async () => {
  console.log("This is a before All method.");
});

test.beforeEach("Navigate to the Application", async ({ page }) => {
  console.log("BeforeEach method invoked.");
  await test.step("Navigate to Application", async () => {
    await page.goto("https://the-internet.herokuapp.com");
  });
});

test.afterEach("After Each Block", async () => {
  console.log("This is after each method.");
});

test.afterAll("After All Method", async () => {
  console.log("This is After All Method");
});
test("Single Frames example", async ({ page }) => {
  await test.step("Click on Frames link", async () => {
    await page.locator('[href="/frames"]').click();
  });

  await test.step("Click on single Frames link", async () => {
    await page.locator('[href="/iframe"]').click();
  });

  await test.step("Validate the text in the frame",async()=>{
  const frameLocator = await page.frameLocator("#mce_0_ifr");
  await expect(frameLocator.locator("#tinymce")).toBeVisible();
  })
});

test("nested Frames example", async ({ page }) => {
  test.slow();
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/nested_frames"]').click();
  const topFrame = page.frameLocator('[name="frame-top"]');
  const rightFrame = topFrame.frameLocator('[name="frame-right"]');
  await expect(rightFrame.locator("body")).toBeVisible();
});

test.skip("Download file example", async ({ page }) => {
  await page.locator('[href="/download"]').click();
  await downloadFile(page, '[href="download/testfile3.txt"]');
  // const downloadEvent = page.waitForEvent('download');
  // await page.locator('[href="download/testfile3.txt"]').click();
  // const download = await downloadEvent;
  // await download.saveAs("./Downloads/"+download.suggestedFilename());
});
