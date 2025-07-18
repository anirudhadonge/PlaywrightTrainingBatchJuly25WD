/**
 * Any value enclosed in "" or '' is a string type
 * 1. length (property)
 * 2. toUpperCase()
 * 3. toLowerCase()
 * 4. chatAt(n)
 * 5. indexOf()
 * 6. includes()
 * 7. slice()
 * 8. replace()
 *    a. replaceAll()
 * 9. split()
 * 10. trim()
 *     a. trimEnd()
 *     b. trimStart()
 */

// let val1 = "this is a playwright sessioin";
// let val2 = 'this is a playwright sessioin';

// console.log(typeof(val1.tr));
// console.log(typeof(val2));cl

let personName = 'Alka';
//console.log(personName.length)

// console.log(personName.toUpperCase())
// console.log(personName);

// console.log(personName.toLowerCase());
// console.log(personName);

// for(let i =0 ; i<personName.length; i++){
//     console.log(personName.charAt(i));
// }

// for(let ch of personName){
//     console.log(personName.indexOf(ch));
// }
//console.log(personName.indexOf('A'));
let val1 ='This is a Playwright training session' //"this is a playwright session playwright";

// console.log(val1.includes('Playwright'));

//console.log(val1.slice(3, 10).charAt(0))

console.log(val1.replace('i','&'));
console.log(val1.replaceAll('i','&'));
console.log(val1);