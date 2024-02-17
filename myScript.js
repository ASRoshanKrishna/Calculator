let firstOperand = null;
let operator = null;
let secondOperand = 0;
let variable = 0;

function operate(operator, firstOperand, secondOperand){
    console.log(operator, firstOperand,secondOperand);
    switch(operator){
        case "+":
            firstOperand = firstOperand + secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = firstOperand;
            console.log(firstOperand)
            return firstOperand;
            break;
        case "-":
            firstOperand = firstOperand - secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = firstOperand;
            console.log(firstOperand)
            return firstOperand;
            break;
        case "*":
            firstOperand = firstOperand * secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = firstOperand;
            console.log(firstOperand)
            return firstOperand;
            break;
        case "/":
            firstOperand = firstOperand / secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = firstOperand;
            console.log(firstOperand)
            return firstOperand;
            break;
    }
}

const display = document.querySelector(".display0");

function dis(n){
    if(typeof n === "number" || n=='.'){
        if(firstOperand != null) display.textContent = "";
        console.log("if");
        variable = variable*10 + n;
        display.textContent = variable;
        console.log(variable);
    }
    else{
        if(firstOperand == null){
            firstOperand = variable;
            console.log("first is "+firstOperand);
            variable = 0;
            operator = n;
            display.textContent = "";
        }
        else if(operator == null) operator = n;
        else{
            display.textContent = "";
            secondOperand = variable;
            console.log("second is "+secondOperand);
            variable = 0;
            f = operate(operator, firstOperand,secondOperand);
            firstOperand = f;
            operator = n;
            secondOperand = null;   
        }
        if(n === "="){
            console.log(operator, firstOperand,secondOperand);
            if(operator == "="){
                operator = "+";
            } 
            let f = operate(operator, firstOperand, secondOperand);
            firstOperand = f;
            operator = null;
        }
    }
    console.log(operator, firstOperand,secondOperand);
}

