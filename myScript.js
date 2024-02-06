let firstOperand = 6;
let operator = "+";
let secondOperand = 2;

function add(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}

function operate(operator, firstOperand, secondOperand){
    switch(operator){
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/":
            return divide(firstOperand, secondOperand);
    }
}

console.log(operate(operator, firstOperand, secondOperand));