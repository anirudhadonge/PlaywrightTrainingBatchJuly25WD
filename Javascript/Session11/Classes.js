/**
 * Class :Its a blueprint for creating object e.g. Dolls being produces 
 * 1. They have a mould , 
 * They pour hot plastic into those Moulds , Once the pastic solidifies the outcome is a structure of a doll.
 * 
 * syntax:
 * class <ClassName>{} 
 * Constructor method in a class: 
 * Constructor cannot be overloaded.
 * 
 * Access Modifiers: public private (By Default access Modifier is public)
 * protect is not present in Javascript.
 * OOPS
 * 1. Abstraction
 * 2. Incapsulation
 * 3. Inheritance : extend keyword is used to extend the parent class
 * 4. Polymorphism
 * 
 * static variable or class variable : these variable are accesed by the class name. 
 */


// class Student{
//     //Private instance variable
//     #marks;
//     constructor(name, rollNo, branch,marks){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.branch = branch
//         this.#marks=marks
//     }

//     study(subject){
//         this.subject= subject;
//     }

//     //Getter and Setters

//     get getMarks(){
//         return this.#marks
//     }

//     /**
//      * @param {any} marks
//      */
//     set setMarks(marks){
//         this.#marks= marks
//     }

// }

// let student1 = new Student('Hitesh',25,'Science',70);
// console.log(student1);
// console.log(student1.getMarks);
// student1.setMarks = 85;
// console.log(student1.getMarks);

export class Vehicle{
    static v1= 10
    constructor(noWheels,heigth,width){
        this.noWheels=noWheels;
        this.heigth = heigth;
        this.width= width;
    }

    static statDisplay(){
        console.log("This is a static method in Vehicle Class");
    }
    display(){
        console.log("This is a method in Vehicle Class");
    }
}


export class Car extends Vehicle{
    static v1 =20
    constructor(noWheels,heigth,width,brand,passengerNo){
        super(noWheels,heigth,width);
        this.brand = brand
        this.passengerNo = passengerNo;
    }
    display(){
        console.log("This method is from Car Class");
    }
    
    static statDisplay(){
        console.log("This is a static method in Car Class");
    }
}

class truck extends Vehicle{
        static v1 = 30
       constructor(noWheels,heigth,width,brand,carryingCapacity){
        super(noWheels,heigth,width);
        this.brand = brand
        this.carryingCapacity = carryingCapacity;
    }
}


let i10 = new Car(4,1000,1300,'hyundai',5);
// console.log(i10);
// console.log(Car.v1);
// console.log(Vehicle.v1);
// console.log(truck.v1);
Vehicle.statDisplay();
Car.statDisplay();
//i10.display();
export default function toBeExport(){
    console.log('This function is in the Classes.js file.');
}

let val1 =10
//module.exports={Vehicle,Car,toBeExport,val1} // CommonJs