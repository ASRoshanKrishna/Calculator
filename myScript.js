let firstOperand = null;
let operator = null;
let secondOperand;
let variable = 0;
let d = 0;

function operate(operator, firstOperand, secondOperand){
    console.log(operator, firstOperand,secondOperand);
    switch(operator){
        case "+":
            firstOperand = firstOperand + secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "-":
            firstOperand = firstOperand - secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "*":
            firstOperand = firstOperand * secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "/":
            if(secondOperand == 0){
                let joke = "Dont skip schooling!";
                display.textContent = joke;
                console.log(joke);
                break;
            }
            firstOperand = firstOperand / secondOperand;
            firstOperand = Math.round(firstOperand * 10) / 10;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
    }
}

const display = document.querySelector(".display0");

function dis(n){
    console.log("start",operator, firstOperand, secondOperand, variable, d, n);
    if(typeof n === "number" || n=='.'){
        if(firstOperand != null) display.textContent = "";
        console.log("if");
        if(typeof n === "number" && d == 0)
        variable = variable*10 + n;
        else{
            if(n=="." && d==0 || n!=".")
            variable = variable + n;
            d = 1;
        }
        display.textContent = variable;
        console.log(variable);
    }
    else{
        if(firstOperand == null){
            firstOperand = variable;
            console.log("first is "+firstOperand);
            variable = 0;
            operator = n;
            d=0;
            display.textContent = "";
        }
        else if(operator == null){
            console.log("empty");
            operator = n;
        }
        else{
            display.textContent = "";
            secondOperand = variable;
            console.log("second is "+secondOperand);
            variable = 0;
            f = operate(operator, parseFloat(firstOperand),parseFloat(secondOperand));
            firstOperand = f;
            if(firstOperand%1 == 0) d = 0;
            else d = 1;
            if(n!="=")
            operator = n;
            secondOperand = null;   
        }
        if(n === "="){
            console.log(operator, firstOperand,secondOperand);
            if(operator == "="){
                operator = "+";
                secondOperand = 0;
                let f = operate(operator, parseFloat(firstOperand),parseFloat(secondOperand));
            } 
            variable = f;
            if(variable%1 == 0) d = 0;
            else d = 1;
            firstOperand = null;
            operator = null;
        }
    }
    if(d==1)
    console.log("stop",operator, parseFloat(firstOperand),parseFloat(secondOperand), variable, d, n);
    console.log("stop",operator, firstOperand, secondOperand, variable, d, n);
}

