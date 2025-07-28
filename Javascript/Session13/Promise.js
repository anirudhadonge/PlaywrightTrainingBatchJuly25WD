/**
 * Promise: A promise is an Object respresenting the eventual Completion or failure of an operation.
 * Order a product from Amazon.
 * resolve : if the action fulfills then it is resolve.
 * reject : if task is not done , then we state reject.
 *
 * Different states of promise
 * Pending : we operation is in progress
 * Fullilled : Operation is successfull and returns the desired result
 * Rejected : Operation fails
 */
let flag = true;

async function start() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("...Start");
      if(flag){
      resolve("Start function resolved");
      }else{
        reject("Operation Failed.");
      }
    }, 3000);
  });
}

async function end() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("...End");
      resolve("End Function resolved");
    }, 1000);
  });
}

async function third() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("...third");
      resolve("Third Function resolved");
    }, 2000);
  });
}
/**
 * Then(): successfull output. Promise is fullfilled
 * Catch(): Operation fails.
 */
// start().then((value)=>{
//     console.log(value);
//     end().then((value)=>{
//         console.log(value);
//         third().then((thirdOutPut)=>{
//             console.log(thirdOutPut);
//         })
//     })
// }).catch((failedValue)=>{
//     console.log(failedValue);
// })

/// Async-await
await start();
await end();
await third();