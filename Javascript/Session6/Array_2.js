/**
 * Object 
 * let <variable> ={
 * Key1: value1,
 * Key2: value2
 * }
 * 
 * Key is the Index 
 * Value is item stored.
 * 
 * Property 
 * 1. Length
 * 
 * Inbuild Methods for some action on the Array 
 * push() : Add an Element in an Array , Element is added at the end of the array.
 * pop() : Remove the element which last in the Array.
 * indexof()
 * inclues()
 * Join()
 * slice()
 * splice()
 * 
 * Iterating an Array
 * forEach()
 * Map()
 * Filter()
 */


// console.log(fruits);
//  fruits.push('PineApple');

// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits);

// Removing Element at the begning of the Array
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);

// Adding Element at the begining.
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.unshift('Cherry','Orange'));
// console.log(fruits);


// Includes()- Validates that an element is present in the given array

// console.log(fruits.includes('Orange1'));

// Convert Array into a string and all the elements are comma seperated and you can assign a seperator.
// join() return type of this method would be string.

//console.log(fruits.join('-'));


// If I want a part of the Array 
// slice(start,End);

//console.log(fruits.slice(2,5));

// splice is a method for adding and removing the elements in between the array


let fruits1 = ["Grapes",'Berry']
// console.log(fruits.splice(2,1,["Grapes",'Berry']));
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[2][1]);
// console.log(fruits.concat(fruits1));
// console.log(fruits);

//let fruits2 =[...fruits,...fruits1];
// console.log([fruits,fruits1]);
// console.log([...fruits,...fruits1]);

// console.log([].concat(fruits).concat(fruits1));

// fruits.push(...fruits1);
// console.log(fruits);


let fruits =['Cherry','Orange','Apple','Banana','Kiwi','Mango']

/// Iterating the Array
/**
 * for loops
 * forEach();
 * map()
 * filter();
 * 
 */

// for(let i = 0 ; i<fruits.length;i++){
//         console.log(fruits[i]);
// }

fruits.forEach((v,i,fruits)=>{
    console.log(`value ${v} at index ${i} and arrays is ${fruits}`);
})