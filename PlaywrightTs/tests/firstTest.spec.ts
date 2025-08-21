/**
 * Locator Object: Object which keeps the address of the html page and also provides some inbuild methods for performing some action
 * 1. click
 * 2. enter text
 * 3. drop and drop element
 * 4. downloading document
 * 5. upload document
 */

/**
 * getByRole(): page.getByRole('button' {value:"Submit"});
 * getByText(): trying get the element with Text content
 * getByLabel()
 * getByPlaceHolder()
 * getByAltText()
 * getByTitle()
 * getByTestId()
 * locator() : input would be a xpath or css locator. #<ValueID>
 */
import { test, expect, Page, chromium } from "@playwright/test";
import {
  dismissConfirmPopup,
  downloadFile,
  handleAlert,
} from "../ActionUtilities/Actions";

// test('Validate Installation text',async ({page})=>{
//   await page.goto("https://playwright.dev/");
//   await page.getByRole()
//   await page.locator(".getStarted_Sjon").click();
//   await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
// })

test("Find locators in a page", async ({ page }) => {
  // await page.goto("https://playwright.dev/");
  // await expect(page.getByAltText('Playwright logo1')).toBeVisible();
  await page.goto("https://the-internet.herokuapp.com/login");
  // await page.getByRole("link",{name:"Checkboxes"}).click();
  await page.getByLabel("Username").pressSequentially("tomsmith");
  await page.getByLabel("Password").pressSequentially("SuperSecretPassword!");
  await page.getByRole("button", { name: " Login" }).click();
  //await page.locator("[title='Email']").pressSequentially('xyz');
  //await page.getByTitle("Email").nth(0).pressSequentially("xyz");
});

test("GetByRole Example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Checkboxes" }).click();
  let count = await page.getByRole("checkbox").count();
  await page.locator("#checkboxes input").click();
  await page.getByRole("checkbox").nth(0).uncheck();
  console.log(count);
});

test("GetByLabel example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page.getByLabel("Username").pressSequentially("tomsmith");
  await page.getByLabel("Password").pressSequentially("SuperSecretPassword!");
  await page.getByRole("button").click();
});

test("Click Example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Form Authentication1" }).click();
});

test("Dropdown example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Dropdown" }).click();
  //select by value attribute
  await page.locator("#dropdown").selectOption({ value: "1" });
  //select by Label
  await page.locator("#dropdown").selectOption({ label: "Option 2" });
  //select By index
  await page.locator("#dropdown").selectOption({ index: 1 });
});

test("Fill and presssequentially example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page
    .getByLabel("Username")
    .pressSequentially("tomsmith", { delay: 500 });
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.getByRole("button").click();
});

/*
Check()-- It clicks on the checkbox --- it first checks that is required to perform the click action 
Uncheck()
*/
test("check and uncheck example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "Checkboxes" }).click();
  await page.locator("#checkboxes input").nth(0).click();
  await page.locator("#checkboxes input").nth(0).click();
  // await page.getByRole('checkbox').nth(0file-submit).check();
  // await page.getByRole('checkbox').nth(1).uncheck();
});

test("upload file example for Input tag", async ({ page }) => {
  //input tag then you use setInputFiles method
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "File Upload" }).click();
  await page
    .locator("#file-upload")
    .setInputFiles(["./uploadfiles/Playwright_fill_vs_pressSequentially.pdf"]);
  await page.locator("#file-submit").click();
});

test("update file with other html element", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole("link", { name: "File Upload" }).click();
  await fileUpload(
    page,
    "#file-upload",
    "./uploadfiles/Playwright_fill_vs_pressSequentially.pdf"
  );
  // const fileChooser = page.waitForEvent('filechooser');
  // await page.locator("#file-upload").click();
  // const fileChoose = await fileChooser;
  // await fileChoose.setFiles("./uploadfiles/Playwright_fill_vs_pressSequentially.pdf");
});

async function fileUpload(
  page: Page,
  locator: string,
  filePath: string
): Promise<void> {
  const fileChooser = page.waitForEvent("filechooser");
  await page.locator(locator).click();
  const fileChoose = await fileChooser;
  await fileChoose.setFiles(filePath);
}

test("Single Frames example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  const frameLocator = await page.frameLocator("#mce_0_ifr");
  await expect(frameLocator.locator("#tinymce")).toBeVisible();
});

test("nested Frames example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/nested_frames"]').click();
  const topFrame = page.frameLocator('[name="frame-top"]');
  const rightFrame = topFrame.frameLocator('[name="frame-right"]');
  await expect(rightFrame.locator("body")).toBeVisible();
});

test("Download file example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/download"]').click();
  await downloadFile(page, '[href="download/testfile3.txt"]');
  // const downloadEvent = page.waitForEvent('download');
  // await page.locator('[href="download/testfile3.txt"]').click();
  // const download = await downloadEvent;
  // await download.saveAs("./Downloads/"+download.suggestedFilename());
});

test("Alert js popup example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/javascript_alerts"]').click();
  await handleAlert(page, '[onclick="jsAlert()"]');
  // page.on('dialog',async (dialog)=>{
  //   await page.waitForTimeout(3000);
  //   console.log(dialog.message());
  //   dialog.accept();
  // })
  // await page.locator('[onclick="jsAlert()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
});

test("Confirm js accept popup example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/javascript_alerts"]').click();
  await handleAlert(page, '[onclick="jsConfirm()"]');
  // page.on('dialog',async (dialog)=>{
  //   await page.waitForTimeout(3000);
  //   console.log(dialog.message());
  //   dialog.accept();
  // })
  // await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Ok");
});

test("Confirm js dismiss popup example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/javascript_alerts"]').click();
  await dismissConfirmPopup(page, '[onclick="jsConfirm()"]');
  // page.on('dialog',async (dialog)=>{
  //   await page.waitForTimeout(3000);
  //   console.log(dialog.message());
  //   dialog.dismiss();
  // })
  // await page.locator('[onclick="jsConfirm()"]').click();
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});

test("Prompt js accept popup example", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/javascript_alerts"]').click();
  //await dismissConfirmPopup(page,'[onclick="jsConfirm()"]');
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    dialog.accept("xyz");
  });
  await page.locator('[onclick="jsPrompt()"]').click();
  await expect(page.locator("#result")).toHaveText("You entered: xyz");
});

test("Page using browser object", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/javascript_alerts"]').click();
  //await dismissConfirmPopup(page,'[onclick="jsConfirm()"]');
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    dialog.accept("xyz");
  });
  await page.locator('[onclick="jsPrompt()"]').click();
  await expect(page.locator("#result")).toHaveText("You entered: xyz");
});

test("new page example", async ({ context }) => {
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/windows"]').click();
  const newPageEvent = context.waitForEvent("page");
  await page.locator('[href="/windows/new"]').click();
  const newPage = await newPageEvent;
  await expect(newPage.locator(".example h3")).toHaveText("New Window");
  await expect(page.locator(".example h3")).toHaveText("Opening a new window");
});

test("Authentication Popup handled by Playwright config", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText(
    "Congratulations! You must have the proper credentials."
  );
});

test("Authentication Popup handled at Test Level", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/digest_auth"]').click();
  await expect(page.locator(".example p")).toContainText(
    "Congratulations! You must have the proper credentials."
  );
});

test("Drag and Drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/drag_and_drop"]').click();
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await expect(page.locator("#column-b")).toHaveText('A');
  await expect(page.locator("#column-a")).toHaveText('B');
});

test("Hovers Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/hovers"]').click();
  await page.getByAltText('User Avatar').nth(0).hover()
  await expect(page.locator(".figcaption h5").nth(0)).toHaveText("name: user1");
  const text = await page.locator(".example p").textContent();
  console.log(text);
});

test("Hovers Test with waitsforTimeout", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  const locator = page.locator('[href="/hovers"]');
  //await locator.waitFor({state:'attached',timeout:3000});
  await page.waitForLoadState()
  await locator.click();
  await page.getByAltText('User Avatar').nth(0).hover()
  await expect(page.locator(".figcaption h5").nth(0)).toHaveText("name: user1");
  const text = await page.locator(".example p").textContent();
  expect(text).not.toBe("Hover over the image for additional information");
});


test.only("Hover with Locator assertions", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  const locator = page.locator('[href="/hovers"]');
  //await locator.waitFor({state:'attached',timeout:3000});
  await page.waitForLoadState()
  await locator.click();
  await page.getByAltText('User Avatar').nth(0).hover()
  const captionLocator = page.locator(".figcaption h5").nth(0);
  await expect.soft(captionLocator).toBeVisible();
  await expect.soft(captionLocator).toHaveText("name: user1"); // Locator Assertions
  const text = await page.locator(".example p").textContent();
  expect.soft(text).not.toBe("Hover over the image for additional information"); // General Assertion
  await expect.soft(page).toHaveTitle('The Internet');
  await expect.soft(page).toHaveURL('https://the-internet.herokuapp.com/hovers');
  console.log(page.url());
});

