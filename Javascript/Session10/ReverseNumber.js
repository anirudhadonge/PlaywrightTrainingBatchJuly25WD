

let myNumber =123456

let reverseNumber=0;

while(myNumber>0){

    let mod = myNumber%10;
    myNumber = Math.floor(myNumber/10);
    reverseNumber = reverseNumber*10+mod;
}

console.log(reverseNumber);

