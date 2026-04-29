// Build a simple calculator using two numbers and an operator (+, -, *, /).

const calc = (a, b, ope) => {
    if (ope === '+') {
        console.log(`Addition: ${a + b}`);
    } 
    else if (ope === '-') {
        console.log(`Subtraction: ${a - b}`);
    } 
    else if (ope === '*') {
        console.log(`Multiplication: ${a * b}`);
    } 
    else if (ope === '/') {
    
            console.log(`Division: ${a / b}`);
     }

    else {
        console.log("Please enter correct ope");
    }
};

calc(10 , 5 , "-")
calc(10 , 5 , "+")
