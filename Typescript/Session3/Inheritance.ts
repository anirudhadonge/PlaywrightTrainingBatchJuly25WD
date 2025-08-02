/**
 * passing on the properties or traits of parents into the child is call inheritance.
 * In Javascript
 * We were inheriting class into a class using extends keyword.
 * In Typescript
 * 1. Implement an interface using 'Implements' Keyword
 * 2. Inherite a class using 'extends'
 */


interface LivingBeing {
    span:number
    place:string

    action():void
    eat():void
}


class Animal implements LivingBeing{
    span: number
    place: string
    action(): void {
       console.log("They live everywhere on earth")
    }
    
    eat(){
        console.log("Animal are either carnivorous and herbiverious")
    }
}

class Dog extends Animal{
    
    eat(){
        console.log("Dog eats meat and well as vegitables.")
    }
}

class Tiger extends Animal{
    eat(){
        console.log("Tiger eats meat");
    }
}