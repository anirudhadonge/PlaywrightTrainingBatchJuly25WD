/**
 * Generics :Powerful feature which allow you to create a reusable flexible and type-safe code.
 */


function iterateArray<T>(inputPar:T[]):void{
    inputPar.forEach((value)=>{
        console.log(value);
    })
}

let jobject = [{"value":10},{"value":12},true,12]

let fruits = ['Apple','Banana','Kiwi']
let boolArray = [false,true,true]
let myNumber = [2,4,6,7,8]

iterateArray(fruits);
iterateArray(boolArray);
iterateArray(myNumber);

iterateArray(jobject);