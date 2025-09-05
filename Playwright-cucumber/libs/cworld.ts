import { World,setWorldConstructor,IWorldOptions } from "@cucumber/cucumber";


export class csworld extends World{

    testData: Record<string, any>;
    constructor(option:IWorldOptions){
        super(option)
        this.testData={}
    }

    setData(key:string,value:any){
        this.testData[key] = value;
    }

    getData(key:string):any{
        return this.testData[key];
    }
}

setWorldConstructor(csworld);