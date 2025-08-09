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
import {test ,expect, Page} from "@playwright/test";


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


test("Fill and presssequentially example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link',{name:"Form Authentication"}).click();
  await page.getByLabel("Username").pressSequentially("tomsmith",{delay:500});
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.getByRole("button").click();
})

/*
Check()-- It clicks on the checkbox --- it first checks that is required to perform the click action 
Uncheck()
*/
test('check and uncheck example',async({page})=>{
  
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link',{name:"Checkboxes"}).click();
  await page.locator("#checkboxes input").nth(0).click();
  await page.locator("#checkboxes input").nth(0).click();
  // await page.getByRole('checkbox').nth(0file-submit).check();
  // await page.getByRole('checkbox').nth(1).uncheck();
})


test('upload file example for Input tag',async({page})=>{
  //input tag then you use setInputFiles method
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link',{name:"File Upload"}).click();
  await page.locator("#file-upload").setInputFiles(["./uploadfiles/Playwright_fill_vs_pressSequentially.pdf"])
  await page.locator("#file-submit").click();
})

test("update file with other html element",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByRole('link',{name:"File Upload"}).click();
  await fileUpload(page,"#file-upload", "./uploadfiles/Playwright_fill_vs_pressSequentially.pdf");
  // const fileChooser = page.waitForEvent('filechooser');
  // await page.locator("#file-upload").click();
  // const fileChoose = await fileChooser;
  // await fileChoose.setFiles("./uploadfiles/Playwright_fill_vs_pressSequentially.pdf");
})

async function fileUpload(page:Page , locator:string,filePath:string):Promise<void>{
  const fileChooser = page.waitForEvent('filechooser');
  await page.locator(locator).click();
  const fileChoose = await fileChooser;
  await fileChoose.setFiles(filePath);
}


test("Single Frames example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  const frameLocator = await page.frameLocator("#mce_0_ifr");
  await expect(frameLocator.locator("#tinymce")).toBeVisible();
})

test.only("nested Frames example",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/nested_frames"]').click();
 const topFrame = page.frameLocator('[name="frame-top"]');
 const rightFrame = topFrame.frameLocator('[name="frame-right"]');
 await expect(rightFrame.locator('body')).toBeVisible();
})