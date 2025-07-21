/**
 * Map() : its a new array after performing some action on each element.
 * filter();
 */

 let fruits =['Cherry','Orange','Apple','Banana','Kiwi','Mango']


let newArray = fruits.map((value,index,fruits)=>{
    return fruits[index].toUpperCase();
})
console.log(fruits);
console.log(newArray);

let myNumberArray =[4,51,6,87,0,5]

let filteredArray = myNumberArray.filter((value,index,myNumberArray)=>{
    return myNumberArray[index]<87;
})

console.log(filteredArray);