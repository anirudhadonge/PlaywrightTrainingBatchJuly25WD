/**
 * If
 * else
 * nest if
 * switch
 * 
 */
/**
 * Comparison Operators
 * == : "its checks for value"
 * === : its checks for the value and the type (value && type)
 * != : " The value should be equal"
 * !==: " value or type" not be equal (value || Type)
 * >
 * <
 * >=
 * <=
 */
/**
 * Logical Operators
 * &&--- all the conditions should be satisified.
 * || --- Any one condition should be satisified.
 */


/* if(condition){
}
*/

//let flag= false;
// let myNum = 6

// console.log(typeof(myNum));
// console.log(typeof('5'));
// //myNum==='5'

// // either the value or the type 
// if(myNum !== '5'){
//     console.log(`value of myNum is ${myNum}`);
// }
// Number should greater or Equal 5 
// Number should less or equal 5
// if(myNum<=5){
//     console.log("Block of Code in If statment");
// }else{
//     console.log("This is the Else Block");
// }


// let doorState = false; // If Door is Open then the state is true , if Door is closed then state is false.

// if(!doorState){
//     console.log("I will open the door");
// }else {
//     console.log("I will do nothing");
// }

// console.log("I will walk out of the room");

// I am going to office from Magarpatta to Kalyani Nagar

// I take route from Koregaon Park.
// I take the route from B.T. Kawde road.
// I will go from Camp


// let kpRoadBlock = true;
// let btKawdeRoadBlock = false;
// let campIsBlock = true;
// // Nested If
// if(!kpRoadBlock){
//     console.log("I will go using Koregaon Park Road");
// }else if(!btKawdeRoadBlock){
//     console.log("I will take B.T. Kawde Road")
// }else if(campIsBlock){
//     console.log("I will go through Camp");
// }else {
//     console.log("I will work from home");
// }

/// Switch Statment

/**
 * switch(condition){
 * case conditon1:
 * case condition2:
 * }
 * 
 */

let month = 1;


// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("The Number did not match the Month")
// }
let env = "dev"
switch(env){
    case "dev":
        console.log("fetching Dev Environment details");
        break;
    case "stage":
        console.log("Fetching Stage Environment Details");
        break;
}
