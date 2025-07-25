/**
 * Modules: You create piece of code and you use it at some other place.
 * CommonJs : Older way of exporting and importing
 * ESModules : ECMA 2015 Keyword 'Export' 'Import'
 * 1. Default Exports : Each file can have only default.
 * 2. Name Exports: You can multiple named export in a file. And they need to be import with the same name.
 */

//const {Vehicle,toBeExport,val1} = require('./../Session11/Classes.js') // CommonJs
import toBeExport,{ Vehicle,Car} from "../Session11/Classes.js";
import fun2 from "./DefaultExport.js"

let v1 = new Vehicle(4,4000,1350);
// console.log(val1);
console.log(v1);
toBeExport();
fun2();