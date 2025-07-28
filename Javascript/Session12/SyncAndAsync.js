

function start(callBackFun){
    setTimeout(()=>{
        console.log("...Start")
        callBackFun();
    },3000);
}

function end(callBackFun){
    setTimeout(()=>{
        console.log("...End")
        //callBackFun();
    },1000);
}

function third(callBackFun){
    setTimeout(()=>{
        console.log("...Third")
        callBackFun()
    },2000);
}

function fourth(){
    setTimeout(()=>{
        console.log("...fourth")
    },2000);
}

//Call Back hell
start(()=>{
    end(()=>{
        third(()=>{
            fourth()
        })
    })
});
// End();


function fun1(fun2){
    console.log("fun1 getting executed");
    fun2();
}

function second(){
    console.log('Second Function getting called.');
}

//"fun1 getting executed"
//'Second Function getting called.'