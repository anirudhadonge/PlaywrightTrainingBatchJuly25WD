import test, { expect } from "@playwright/test";

test.describe("Authentication Tests",async()=>{
test.beforeAll('This is before all method for Authenticationtest',async()=>{
  console.log('This is before all method for Authenticationtest')
})
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
})

test.describe('These test are of Hover with waits and assertions',async()=>{
  test.beforeAll('This is before all method for Hover',async()=>{
  console.log('This is before all method for Hover')
})
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
  expect(text).toBe("Hover over the image for additional information");
});


test("Hover with Locator assertions", async ({ page }) => {
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
  expect.soft(text).toBe("Hover over the image for additional information"); // General Assertion
  await expect.soft(page).toHaveTitle('The Internet');
  await expect.soft(page).toHaveURL('https://the-internet.herokuapp.com/hovers');
  console.log(page.url());
});
})