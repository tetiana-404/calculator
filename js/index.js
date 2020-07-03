const display = document.querySelector('.display');

document.querySelectorAll(".digits button")
    .forEach(button => button.addEventListener('click', digitPress));

document.querySelectorAll(".opers button")
    .forEach(button => button.addEventListener('click', operPress));

document.querySelector(".specialOpers .divX").addEventListener('click', divXCalculate);

document.querySelector(".specialOpers .power").addEventListener('click', powerCalculate);

document.querySelector(".specialOpers .sqrt").addEventListener('click', sqrtCalculate);

document.querySelector(".clear").addEventListener('click', clearDisplay);

document.querySelector(".plusMinus").addEventListener('click', plusMinusCalc);

document.querySelector(".dot").addEventListener('click', dotAdd);

document.querySelector(".equal").addEventListener('click', calculate);

let resultDisplayed = false; // flag to keep an eye on what output is displayed

function digitPress(ev) {
    //display.value += ev.target.innerText;
    let currentString = display.value;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
        display.value += ev.target.innerText;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        resultDisplayed = false;
        display.value += ev.target.innerText;
    } else {
        resultDisplayed = false;
        display.value = "";
        display.value += ev.target.innerText;
    }
}

function operPress(ev) {
    let currentString = display.value;
    let lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        display.value = currentString.replace(lastChar, ev.target.innerText);
    } else if (currentString.length == 0) {
        display.value= "Введіть спочатку число";
    } else {
        display.value += ev.target.innerText;
    }
        
}
    
function divXCalculate() {
    (display.value != 0) || (display.value != '') ? display.value = eval(1/display.value).toFixed(2) : display.value = 'На 0 ділити не можна';
}

function powerCalculate() {
    display.value = eval(Math.pow(display.value, 2)).toFixed(2);
}

function sqrtCalculate() {
    display.value >= 0 ? display.value = eval(Math.sqrt(display.value)).toFixed(2) : display.value = 'Неможливо виконати операцію';
}

function clearDisplay() {
    display.value = "";
}

function plusMinusCalc() {
    display.value != '' ? display.value = eval(-display.value) : display.value = '-';
}

function dotAdd() {
     let inputString = display.value;
     let numbers = inputString.split(/\+|\-|\*|\//g);
         
     var dotIndex = numbers.indexOf(".");
     if (dotIndex === -1) {
        display.value += '.';
     }
}

function calculate() {
    display.value = eval(display.value).toFixed(2);
    resultDisplayed = true;
}

