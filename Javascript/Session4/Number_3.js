/**
 * isNan()  : When Ever we are performing any mathamatical action on a Non Number type then NAN 
 * isFinite()
 * Number();
 */

// There two isNan() but the implementation is totally different
// Static method in Number object  Number.isNan()  , returning value is NAN or not.
// Global Function  isNan(); ,it checks whether the parameter passed is a number or other type.
// console.log(('anirudha')*5);
// console.log("Perform multiplication on string :"+Number.isNaN(('anirudha')*5)); /// When I am multiplying a string with a number --- NaN(return value);
// console.log("Value is a string 'anirudha':"+Number.isNaN('anirudha')); /// value is 'Anirudha' !=NaN
// console.log("value is number 1234 "+Number.isNaN(1234)); /// value 1234 != NaN
// console.log("Value is string '1234' "+Number.isNaN('1234')); // value 1234 !=NaN
//console.log(Number.isNaN(NaN));

// function multiply(a,b){
//     return a/b;
// }

// console.log(multiply('priyanka',5))

//isNaN() it take the value and check whether its a number type of not . Global Function

//console.log(isNaN('Anirudha'));  // check for a numberic value if we dont get it the output is true.

//console.log(Number.isNaN(('anirudha')*5));

console.log(Number.isFinite(10/0));
console.log(Number.isFinite(10/2));
//console.log(Number('Anirudha'));
