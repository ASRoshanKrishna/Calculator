let firstOperand = null;
let operator = null;
let secondOperand = null;
let variable = 0;
let d = 0;
let e = 0;
let basicop = null;
let idname;
let opn;

function opcolor(opn){
    for(let i=1;i<=4;i++){
        if(i!=opn){
            idname = '#op'+i;
            console.log(idname);
            basicop = document.querySelector(idname);
            basicop.style.backgroundColor = "rgb(33, 43, 65)";
        }
    }
    idname = '#op'+opn;
    basicop = document.querySelector(idname);
    basicop.style.backgroundColor = "white";
}

function operate(operator, firstOperand, secondOperand){
    console.log(operator, firstOperand,secondOperand);
    idname = '#op'+opn;
    basicop = document.querySelector(idname);
    basicop.style.backgroundColor = "rgb(33, 43, 65)"
    switch(operator){
        case "+":
            firstOperand = firstOperand + secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "-":
            firstOperand = firstOperand - secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "*":
            firstOperand = firstOperand * secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
        case "/":
            if(secondOperand == 0){
                let joke = "You silly!";
                display.textContent = joke;
                console.log(joke);
                firstOperand = null;
                return firstOperand;
            }
            firstOperand = firstOperand / secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            display.textContent = parseFloat(firstOperand);
            console.log(firstOperand)
            return firstOperand;
    }
}

const display = document.querySelector(".display0");

function perc(){
    if(variable) firstOperand = parseFloat(variable) / 100;
    else firstOperand = parseFloat(firstOperand) / 100;
    display.textContent = firstOperand;
    if(firstOperand%1==0) d =0;
    else d = 1;
    variable = null;
    operator = null;
}

function dis(n){
    console.log("start",operator, firstOperand, secondOperand, variable, d, n);
    if(typeof n === "number" || n=='.'){
        
        if(firstOperand != null) display.textContent = "";
        console.log("if");
        if(typeof n === "number" && d == 0)
        variable = variable*10 + n;
        else{
            if(n=="." && d==0 || n!="."){
                variable = variable.toString();
                variable = variable + n;
            }
            d = 1;
        }
        display.textContent = variable;
        console.log(variable);
    }
    else{
        if(n == '/') opn = 1;
        else if(n == '*') opn = 2;
        else if(n == '-') opn = 3;
        else if(n == '+') opn = 4;
        console.log(opn);
        if(firstOperand && !operator){
            if(variable!=null)
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
            d=0;
        }
        else if(firstOperand && operator && variable == 0 && typeof n != "number" && n != "="){
            operator = n;
            opcolor(opn);
        }
        else if(firstOperand == null){
            firstOperand = variable;
            console.log("first is "+firstOperand);
            variable = 0;
            operator = n;
            opcolor(opn);
            d=0;
        }
        else if(operator == null){
            console.log("empty");
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
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
            opcolor(opn);
            secondOperand = null;   
        }
        if(n === "="){
            idname = '#op'+opn;
            basicop = document.querySelector(idname);
            basicop.style.backgroundColor = "rgb(33, 43, 65)"
            console.log(operator, firstOperand,secondOperand);
            if(operator == "="){
                operator = "+";
                secondOperand = 0;
                let f = operate(operator, parseFloat(firstOperand),parseFloat(secondOperand));
            } 
            variable = f;
            if(variable%1 == 0) d = 0;
            else d = 1;
            firstOperand = variable;
            variable = null;
            operator = null;
            e = 1;
        }
    }
    if(d==1)
    console.log("stop",operator, parseFloat(firstOperand),parseFloat(secondOperand), variable, d, n);
    console.log("stop",operator, firstOperand, secondOperand, variable, d, n);
}