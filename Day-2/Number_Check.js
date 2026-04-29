// Check whether a number is positive, negative, or zero.

const CheckNum = (num) =>{
    if(num >0 ){
        console.log("Positive");
        
    }
    else if(num == 0){
        console.log("Number is Zero");
        
    }
    else{
        console.log("Negative");
        
    }
}

CheckNum(-1)
CheckNum(0)
CheckNum(1)