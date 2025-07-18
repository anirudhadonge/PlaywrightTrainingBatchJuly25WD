/**
 * block of code that gets execute only when you call them. block of code inside {}
 * Three ways
 * 1. let <variableName> = function (){}
 * 2. function <functionName>(){}
 * 3. Arrow Function : ()=>{} //
 * you dont specify acess modifier or No return type (loosely Typed Language)in javascript
 * public, private , protect
 */

// let myFun = function(a,b){
//     if(typeof(a)!='number'){
//         a = 1;
//     }
//     if(typeof(b)!='number'){
//         b = 2
//     }
//     return a+b // Number
// }

// console.log(myFun('Anirudha',"Trainer"));

// function add(a,b){
//     return a+b;
// }

// console.log(add(4,5))


/// Function inside a function a as parameter

function fun1(fun2){
    fun2();
}

// fun1(()=>{
//     console.log("Arrow function called");
// })

// fun1((a=5,b=1)=>{
//     console.log(a+b);
// })

// setTimeout(()=>{
//     console.log("on the fly function")
// },5000);

// setTimeout(()=>{

// },1000)