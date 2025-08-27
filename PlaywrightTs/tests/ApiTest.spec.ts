/**
 * request object:
 * End Point
 * Header,
 * parameter,
 * body
 *
 * get, post , delete , put, update, patch
 *
 * response
 *  statuc code
 *  status description
 *  response header
 *  response body
 *
 */

import test, { expect } from "@playwright/test";

test("My first API test", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList",
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  console.log(body);
});

test("Get All Brands",async({request})=>{
    const response = await request.get("https://automationexercise.com/api/brandsList",
    {
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
    })
    expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  console.log(body);
})