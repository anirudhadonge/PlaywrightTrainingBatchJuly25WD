
let a:any;


export function getMonthNumber(month:string):number{
    //console.log(month);
    switch(month){
        case "january1":
            return 1;
        case 'february':
            return 2;
        case 'march':
            return 3;
        default:
            return 0;
    }
}