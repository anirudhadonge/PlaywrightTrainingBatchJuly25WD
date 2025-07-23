/**
 * Error : problem that gets surface while execution in the program.
 * try catch and finally 
 * throw: is used for throwing customer error message.
 */
/**
 * execute a query 
 * 1. Connect to the db
 * 2. execute the query 
 * 3. Close the connection.
 */

// function divide(myNum){
//   try{
//     console.log(Mynum/10);
//   }catch(error){
//     console.log("____________________________________________________________")
//     console.log(error);
//     console.log("____________________________________________________________")
//   }finally{
//     console.log("This is finally bock getting execute");
//   }

// }

// Error object 
/**
 * 1. Message
 * 2. Stack
 * 3. Name
 */
function divide(myNum){
  try{
    console.log(Mynum/10);
  }catch(msg){
    console.log(typeof(msg));
    throw "Error is thrown "+msg.stack
  }finally{
    console.log("This is finally bock getting execute");
  }

}

function wrapperFun(num){
    try{
    divide(num);
    }catch(err){
        console.log(err);
    }
}

wrapperFun(5)
console.log("Division is completed");


/***
 * 
 * 
 * 
 */
