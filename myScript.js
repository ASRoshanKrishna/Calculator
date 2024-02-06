let firstOperand;
let operator;
let secondOperand;
let variable = 0;

function operate(operator, firstOperand, secondOperand){
    switch(operator){
        case "+":
             console.log(firstOperand + secondOperand);
             break;
        case "-":
            console.log(firstOperand - secondOperand);
            break;
        case "*":
            console.log(firstOperand * secondOperand);
            break;
        case "/":
            console.log(firstOperand / secondOperand);
            break;
    }
}

const display = document.querySelector(".display0");

function dis(n){
    if(typeof n === "number"){
        display.textContent += n;
        variable = variable*10 + n;
        console.log(variable);
    }
    else{
        if(!firstOperand){
            display.textContent = "";
            firstOperand = variable;
            console.log("first is "+firstOperand);
            variable = 0;
            operator = n;
        }
        else{
            display.textContent = "";
            secondOperand = variable;
            console.log("second is "+secondOperand);
            variable = 0;
            operate(operator, firstOperand,secondOperand);
        }
    }
}

