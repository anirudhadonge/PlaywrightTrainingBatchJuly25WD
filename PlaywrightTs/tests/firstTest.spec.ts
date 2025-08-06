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
 * locator() : input would be a xpath or css locator.
 */
import {test ,expect} from "@playwright/test";


// test('Validate Installation text',async ({page})=>{
//   await page.goto("https://playwright.dev/");
//   await page.getByRole()
//   await page.locator(".getStarted_Sjon").click();
//   await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
// })

test("Find locators in a page",async({page})=>{

  // await page.goto("https://playwright.dev/");
  // await expect(page.getByAltText('Playwright logo1')).toBeVisible();
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.locator("[title='Email']").pressSequentially('xyz');
  //await page.getByTitle("Email").nth(0).pressSequentially("xyz");

})