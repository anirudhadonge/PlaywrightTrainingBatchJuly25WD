/**
 * In Javascript
 * function <functionName>(Parameters){}
 * let <functionName> = function (parameters){}
 * (parameters)=>{}
 */
/**
 * In Typescript
 * function <functionName>(Parameters:<Type>):<return Type>{}
 * let <functionName> = function (Parameters:<Type>):<return Type>{}
 * (parameters:<Type>):<return type>=>{}
 */

function add(val1:number,val2:number):number{
    return val1+val2
}

let addFun = function (val1:number,val2:number):number{
    console.log(val1+val2);
    return val1+val2
}

let arrowFun = (val1:number,val2:number):number=>{
    console.log(val1+val2);
    return val1+val2
}
console.log(addFun(4,5));
// console.log(typeof add('Anirudha',5));
// console.log(typeof add('Anirudha',"tutor"));