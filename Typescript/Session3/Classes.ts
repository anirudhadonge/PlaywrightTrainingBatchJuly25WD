/**
 * 1. You need to declare instance variable upfront before constructor.
 * 2. We have access modifiers in Typescript public, private, protect.
 * public: Property can access outside the class.
 * private: Properties are only accessible inside the class
 * protected:Properties are not accessible from outside the class but when you inherite parent into a child class that time 
 * protected properties will be accessible from the child class.
 */

export class TsStudent{
    name:string;
    rollNo:number;
    private branch:string;
    private marks:number;
    subject:string;
     constructor(name, rollNo, branch,marks){
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch
        this.marks=marks
    }

    study(subject){
        this.subject= subject;
    }

    printBranch(){
        console.log(this.branch)
    }
    //Getter and Setters

    get getMarks(){
        return this.marks
    }

    /**
     * @param {any} marks
     */
    set setMarks(marks){
        this.marks= marks
    }

}
// let tsStudent1 = new TsStudent('Hitesh',28,'science',70)
// tsStudent1.branch