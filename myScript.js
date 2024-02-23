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
        console.log("stop",operator, firstOperand, secondOperand, variable, deciCheck);
    }
}

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
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            console.log(firstOperand)
            return firstOperand;
        case "-":
            firstOperand = firstOperand - secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            console.log(firstOperand)
            return firstOperand;
        case "*":
            firstOperand = firstOperand * secondOperand;
            firstOperand = Math.round(firstOperand * 100) / 100;
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
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
            disvariable = firstOperand;
            display.textContent = parseFloat(disvariable);
            console.log(firstOperand)
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
    console.log("start",operator, firstOperand, secondOperand, variable, deciCheck, n);
    if(typeof n === "number" || n =='.'){
        if(firstOperand != null) display.textContent = "";
        console.log("if");
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
            deciCheck=0;
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
            deciCheck=0;
        }
        else if(operator == null){
            console.log("empty");
            firstOperand = variable;
            variable = 0;
            operator = n;
            opcolor(opn);
        }
        else{
            disvariable = "";
            display.textContent = disvariable;
            secondOperand = variable;
            console.log("second is "+secondOperand);
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
            console.log(operator, firstOperand,secondOperand);
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
    if(deciCheck==1)
    console.log("stop",operator, parseFloat(firstOperand),parseFloat(secondOperand), variable, deciCheck, n);
    console.log("stop",operator, firstOperand, secondOperand, variable, deciCheck, n);
}

document.addEventListener('keydown', (event) => {
    let kbintvalue = parseInt(event.key);
    let kbvalue = event.key;
    if(kbintvalue >=0 && kbintvalue <=9 || kbintvalue == '.'){
        console.log(typeof kbintvalue, kbintvalue);
        dis(kbintvalue);
    }
    else if(kbvalue == '/' || kbvalue == '-' || kbvalue == '*' || kbvalue == '+'){
        console.log(typeof kbvalue, kbvalue);
        dis(kbvalue);
    }
    else if(kbvalue == "Backspace"){
        console.log(typeof kbvalue, kbvalue);
        backspace();
    }
    else if(kbvalue == "Enter"){
        console.log(typeof kbvalue, kbvalue);
        kbvalue = "=";
        dis(kbvalue);
    }
    else console.log(typeof kbvalue, kbvalue);
    document.activeElement.blur()
});