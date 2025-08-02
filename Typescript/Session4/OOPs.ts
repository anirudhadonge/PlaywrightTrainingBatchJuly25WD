/**
 * Interface
 * Class
 *  - Abstract: Its has concret methods(impmented methods) and it will have some methods which dont have a body (they are abstract);
 *  - Class
 */


abstract class Shape{
    name:string
    constructor(name){
        this.name= name;
    }
    ar:number //area 
    abstract area():number
    printArea():void{
        console.log(this.ar);
    }
}


class Circle extends Shape{
    static statVariable:number;
    radius:number
    readonly rNumber:number;
    constructor(radius:number,name:string){
        super(name);
        this.radius = radius;
        this.rNumber = 15;
    }
    area():number{
        
        return (this.radius * this.radius);
    }
}
Circle.statVariable= 30;
let c1 = new Circle(5,"Cirle");
console.log(c1);

console.log(Circle.statVariable) // Class variable
let c2 = new Circle(3,'Circle');
console.log(c2);
console.log(Circle.statVariable) // Class variable