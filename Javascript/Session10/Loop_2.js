/**
 * for of // Deals with the iteration of the values
 *  
 * for in // Deals with the iteration of Keys
 */


/// Array is also an Object key value pair fruits=['Apple','Banana'] {0:'Apple',1:'Banana'}
// Object is collection of information in a key value pair format {name:"Anirudha",rollNo:7}


let fruits = ['Apple','Banana','Kiwi',"Orange","Mango"];

// for(let item of fruits){
//     console.log(item);
// }

// for(let key in fruits){
//     console.log(key);
// }

let student ={
    name:"Dinesh",
    rollNo:25,
    Branch:"Science",
    School:"DPS"
}

for(let k in student){
    console.log(k)
}