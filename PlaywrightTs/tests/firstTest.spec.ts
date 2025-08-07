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
  await page.goto("https://the-internet.herokuapp.com/login");
  // await page.getByRole("link",{name:"Checkboxes"}).click();
  await page.getByLabel("Username").pressSequentially("tomsmith");
  await page.getByLabel("Password").pressSequentially("SuperSecretPassword!");
  await page.getByRole("button",{name:' Login'}).click();
  //await page.locator("[title='Email']").pressSequentially('xyz');
  //await page.getByTitle("Email").nth(0).pressSequentially("xyz");

})


test('GetByRole Example',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link', { name: "Checkboxes" }).click();
  let count = await page.getByRole('checkbox').count();
  await page.locator("#checkboxes input").click();
  await page.getByRole('checkbox').nth(0).uncheck();
  console.log(count);
})

test('GetByLabel example',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link', { name: "Form Authentication" }).click();
  await page.getByLabel("Username").pressSequentially("tomsmith");
  await page.getByLabel("Password").pressSequentially("SuperSecretPassword!");
  await page.getByRole("button").click();
})

test("Click Example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link', { name: "Form Authentication1" }).click();
})

test("Dropdown example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link', { name: "Dropdown" }).click();
  //select by value attribute
  await page.locator("#dropdown").selectOption({value:"1"});
  //select by Label
  await page.locator("#dropdown").selectOption({label:"Option 2"})
  //select By index 
  await page.locator("#dropdown").selectOption({index:1});
})


test.only("Fill and presssequentially example",async({page})=>{
  
})