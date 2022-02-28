function round (number){
    return parseFloat((Math.round(number*10000)/10000).toFixed(4));
}

function displayNumber(key){
    if ((key == "0") && firstNumber == "0"){
        null;
    }
    else if ((key == "0") && (operator != "") && (secondNumber == "0")){
        null;
    }
    else if (operator == ""){
        if (firstNumber == "0"){
            firstNumber = key;
        }
        else{
            firstNumber += key;
        }
        display.value = firstNumber;
    }
    else if (operator != ""){
        if (secondNumber == "0"){
            secondNumber = key;
        }
        else{
            secondNumber += key;
        }
        display.value = secondNumber;
    }
}

function evaluate(firstNumber, operator, secondNumber){
    switch(operator){
        case "*":
            answer = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case "/":
            answer = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        case "+":
            answer = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case "-":
            answer = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
    }
    display.value = round(answer);
}

let firstNumber = "";
let secondNumber = "";
let answer = "";
let operator = "";

let display = document.querySelector(".display");

let numberButtons = document.querySelectorAll(".key.number");
numberButtons.forEach((e) => {
    e.addEventListener('click', function(){
        displayNumber(e.getAttribute('data'));
    })
})

let acButton = document.querySelector(".key.ac");
acButton.addEventListener('click', function(){
    firstNumber = "";
    secondNumber = "";
    answer = "";
    operator = "";
    display.value = 0;
})

let equalsButton = document.querySelector(".key.equals");
equalsButton.addEventListener('click', function(){
    if ((firstNumber != "") && (secondNumber != "")){
        evaluate(firstNumber, operator, secondNumber);
        firstNumber = answer;
        secondNumber = "";
        answer = "";
        operator = "";
    }
})

let decimalButton = document.querySelector(".key.decimal");
decimalButton.addEventListener('click', function(){
    if (operator == ""){
        if (firstNumber == ""){
            firstNumber += "0.";
        }
        else if (!(firstNumber.toString().includes("."))){
            firstNumber += "."
        }
        display.value = firstNumber;
    }
    else if (operator != ""){
        if (secondNumber == ""){
            secondNumber += "0.";
        }
        else if (!(secondNumber.includes("."))){
            secondNumber += "."
        }
        display.value = secondNumber;
    }
})

let plusMinusButton = document.querySelector(".key.plus-minus");
plusMinusButton.addEventListener('click', function(){
    if ((operator == "") && (firstNumber != "")){
        firstNumber = parseFloat(firstNumber) * -1;
        display.value = firstNumber;
    }
    else if ((operator != "") && (secondNumber != "")){
        secondNumber = parseFloat(secondNumber) * -1;
        display.value = secondNumber;
    }
    else {
        null;
    }
})

let percentButton = document.querySelector(".key.percent");
percentButton.addEventListener('click', function(){
    if ((operator == "") && (firstNumber != "")){
        firstNumber = (parseFloat(firstNumber) * 0.1).toFixed(10);
        display.value = parseFloat(firstNumber);
    }
    else if ((operator != "") && (secondNumber != "")){
        secondNumber = (parseFloat(secondNumber) * 0.1).toFixed(10);
        display.value = parseFloat(secondNumber);
    }
    else {
        null;
    }
})

let operatorButtons = document.querySelectorAll(".key.operator");
operatorButtons.forEach((e) => {
    e.addEventListener('click', function(){
        if ((firstNumber != "") && (secondNumber != "")){
            evaluate(firstNumber, operator, secondNumber);
            firstNumber = answer;
            secondNumber = "";
            answer = "";
            operator = "";
        }
        else if ((firstNumber != "") && (secondNumber == "")){
            operator = e.getAttribute("data");
        }
    })
})
