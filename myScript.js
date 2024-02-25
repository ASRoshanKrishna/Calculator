let firstOperand = null;
let operator = null;
let secondOperand = null;
let variable = 0;
let disvariable = 0;
let deciCheck = 0;
let eq = 0;
let basicop = null;
let idname;
let opn;
let n1;

function backspace(){
    if(typeof n1 == "number"){
        disvariable = parseInt(disvariable/10);
        display.textContent = disvariable;
        variable = disvariable;
    }
}

function opcolor(opn){
    for(let i=1;i<=4;i++){
        if(i!=opn){
            idname = '#op'+i;
            basicop = document.querySelector(idname);
            basicop.style.backgroundColor = "rgb(33, 43, 65)";
        }
    }
    idname = '#op'+opn;
    basicop = document.querySelector(idname);
    basicop.style.backgroundColor = "white";
}

function operate(operator, firstOperand, secondOperand){
    idname = '#op'+opn;
    basicop = document.querySelector(idname);
    basicop.style.backgroundColor = "rgb(33, 43, 65)"
    switch(operator){
        case "+":
            firstOperand = firstOperand + secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            return firstOperand;
        case "-":
            firstOperand = firstOperand - secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            return firstOperand;
        case "*":
            firstOperand = firstOperand * secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            return firstOperand;
        case "/":
            if(secondOperand == 0){
                let joke = "You silly!";
                display.textContent = joke;
                firstOperand = null;
                return firstOperand;
            }
            firstOperand = firstOperand / secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            return firstOperand;
    }
}

const display = document.querySelector(".display0");

function perc(){
    if(variable) firstOperand = parseFloat(variable) / 100;
    else firstOperand = parseFloat(firstOperand) / 100;
    disvariable = firstOperand;
    display.textContent = disvariable;
    if(firstOperand%1==0) deciCheck =0;
    else deciCheck = 1;
    variable = null;
    operator = null;
}

function dis(n){
    n1=n;
    if(typeof n === "number" || n =='.'){
        if(firstOperand != null) display.textContent = "";
        if(typeof n === "number" && deciCheck == 0)
        variable = variable*10 + n;
        else{
            if(n=="." && deciCheck==0 || n!="."){
                if(variable == null) variable = "";
                variable = variable.toString();
                variable = variable + n;
            }
            deciCheck = 1;
        }
        disvariable = variable;
        display.textContent = disvariable;
    }
    else{
        if(n == '/') opn = 1;
        else if(n == '*') opn = 2;
        else if(n == '-') opn = 3;
        else if(n == '+') opn = 4;
        if(firstOperand && !operator){
            if(variable!=null)
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
            deciCheck=0;
        }
        else if(firstOperand && operator && variable == 0 && typeof n != "number" && n != "="){
            operator = n;
            opcolor(opn);
        }
        else if(firstOperand == null){
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
            deciCheck=0;
        }
        else if(operator == null){
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
        }
        else{
            disvariable = "";
            display.textContent = disvariable;
            secondOperand = variable;
            variable = 0;
            f = operate(operator, parseFloat(firstOperand),parseFloat(secondOperand));
            firstOperand = f;
            if(firstOperand%1 == 0) deciCheck = 0;
            else deciCheck = 1;
            if(n!="=")
            operator = n;
            opcolor(opn);
            secondOperand = null;   
        }
        if(n === "="){
            idname = '#op'+opn;
            basicop = document.querySelector(idname);
            basicop.style.backgroundColor = "rgb(33, 43, 65)";
            if(operator == "="){
                operator = "+";
                secondOperand = 0;
                let f = operate(operator, parseFloat(firstOperand),parseFloat(secondOperand));
            } 
            variable = f;
            if(variable%1 == 0) deciCheck = 0;
            else deciCheck = 1;
            firstOperand = variable;
            variable = null;
            operator = null;
            eq = 1;
        }
    }
}

document.addEventListener('keydown', (event) => {
    let kbintvalue = parseInt(event.key);
    let kbvalue = event.key;
    if(kbintvalue >=0 && kbintvalue <=9 || kbintvalue == '.'){
        dis(kbintvalue);
    }
    else if(kbvalue == '/' || kbvalue == '-' || kbvalue == '*' || kbvalue == '+'){
        dis(kbvalue);
    }
    else if(kbvalue == "Backspace"){
        backspace();
    }
    else if(kbvalue == "Enter"){
        kbvalue = "=";
        dis(kbvalue);
    }
    document.activeElement.blur()
});