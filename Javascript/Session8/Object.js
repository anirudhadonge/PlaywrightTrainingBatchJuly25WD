/***
 * 
 * Object in Javascript are collections of key-value pair used to store and organize data.
 * Concrete instance containing data.
 * 
 * test: you are collecting data after every step
 * 
 * class is a template using you can create an object of it. 
 * 
 */
/**
 * Primitive Data types
 * 1. string
 * 2. numbers
 * 3. boolean
 * 4. undefined
 * 5. null
 * 6. Bigint
 * 
 * 
 * Non-Primitive Data types
 * function
 * Array
 * Object
 * 
 * 
 */
// class person {
//     constructor(name, age, isStudent){
//         this.name = name;
//         this.age = age;
//         this.isStudent= isStudent;
//     }
// }

// let p1 = new person('kirti',20,true);
// let p2 = new person('hitesh',30,false);
// let name = "anirudha";
// let age = 40;
// let person ={
//     name:"Anirudha",
//     age: 40,
//     isStudent:false
// }

// // console.log(person.name)
// // console.log(person['name']);
// console.log(person);
// person.name='Hitesh';
// console.log(person);
// person['name']= 'UNIGEN'
// console.log(person);

// // Deleting the property of the object.
// delete person['age'];
// console.log(person);


let car ={
    brand:"Maruti",
    model:"Baleno",
    onwer:{
        name:"Anirudha",
        age:40
    },
    display : function(){
        console.log("This is a function inside an object");
    }
}

// console.log(car.onwer.name);

// console.log(car['onwer']);

car.display();