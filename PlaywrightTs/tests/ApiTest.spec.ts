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

const apiToken = "";
test("My first API test", async ({ request }) => {
  const url = `https://automationexercise.com/api/productsList/${10}&${15}`;
  const response = await request.get(url, {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  console.log(body);
});

test("Get All Brands", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/brandsList",
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      data: {},
    }
  );
  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  console.log(body);
});

let url = "https://adonge2d0825.atlassian.net/";

let createProjectBody={
  "assigneeType": "PROJECT_LEAD",
  "avatarId": 10200,
  "description": "Postman project",
  "key": "PM5",
  "leadAccountId": "5ec67022ae79a10c16b45d62",
  "name": "DemoPlaywrightProject_part2",
  "projectTemplateKey": "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",
  "projectTypeKey": "software"
}

test("Create a new Project",async({request})=>{
  const response = await request.post('https://adonge2d0825.atlassian.net/rest/api/3/project',{
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'    
  },
  data:createProjectBody
  })

  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  console.log(body);
})

test("Get All Project",async({request})=>{
  const response = await request.get('https://adonge2d0825.atlassian.net/rest/api/3/project',{
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  })

  expect(response.ok()).toBeTruthy();
  const body = JSON.parse(await response.body());
  let flag = false;
  for(let i=0 ; i<body.length;i++){
    if(body[i]['name']=='DemoPlaywrightProject'){
      flag = true;
      break;
    }
  }
  expect(flag).toBeTruthy();
})