import { IWorldOptions,setWorldConstructor,World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";



export class CustomWorld extends World{
    //ts-ignore 
    // page!: Page;
    // browser!:Browser;
    // context!: BrowserContext;
    public testData: Record<string,any> = {}

    constructor(options:IWorldOptions){
        super(options)
    }

    // set setPage(page:Page){
    //     this.page=page;
    // }

    // get getPage(){
    //     return this.page
    // }

    setData(key:string, value:any):void{
      this.testData[key]= value;
    }

    getData(key:string):any{
        return this.testData[key];
    }

}
setWorldConstructor(CustomWorld);