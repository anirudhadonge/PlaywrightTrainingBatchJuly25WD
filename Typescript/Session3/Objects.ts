/**
 * Javascript Object: Concrete structure with data
 */
/**
 * Template use whenever required.
 */


interface student {
    name:string,
    rollNo:number
    branch?:string //Option property will '?'
}

let student1:student ={
    name:"Hitesh",
    rollNo:48,
    branch:"science"
}

let student2:student ={
    name:"Hitesh",
    rollNo:48,
}


console.log(student1);