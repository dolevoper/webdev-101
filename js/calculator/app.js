// 1. Implement C and CE
// 2. Use data-operation to avoid repeating operations code (add/subtract/multiply/divide)
// 3. Handle division by zero

const display = document.getElementById("screen");
const numbersContainer = document.getElementById("numbers-container");
const numberButtons = numbersContainer.getElementsByTagName("button");
const buttonAdd = document.getElementById("operation-add");
const buttonSubtract = document.getElementById("operation-subtract");
const buttonMultiply = document.getElementById("operation-multiply");
const buttonDivide = document.getElementById("operation-divide");
const buttonEqual = document.getElementById("operation-equal");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", onNumberButtonClick);
}

let isFirstClick = true;
let currentNumber;
let total = 0;
let currentOperation = "";

updateCurrentNumber(0);

function onNumberButtonClick(e) {
    if (isFirstClick) {
        updateCurrentNumber(0);
        isFirstClick = false;
    }

    const num = Number(e.target.getAttribute("data-value"));
    updateCurrentNumber(currentNumber * 10 + num);
}

buttonAdd.addEventListener("click", add);

function add() {
    switch (currentOperation) {
        case "subtract":
            total = total - currentNumber;
            break;
        case "add":
            total = total + currentNumber;
            break;
        case "multiply":
            total = total * currentNumber;
            break;
        case "divide":
            total = total / currentNumber;
            break;
        default:
            total = currentNumber;
            break;
    }

    updateCurrentNumber(0);
    currentOperation = "add";
}

buttonSubtract.addEventListener("click", subtract);

function subtract() {
    switch (currentOperation) {
        case "subtract":
            total = total - currentNumber;
            break;
        case "add":
            total = total + currentNumber;
            break;
        case "multiply":
            total = total * currentNumber;
            break;
        case "divide":
            total = total / currentNumber;
            break;
        default:
            total = currentNumber;
            break;
    }

    updateCurrentNumber(0);
    currentOperation = "subtract";
}

buttonMultiply.addEventListener("click", multiply);

function multiply() {
    switch (currentOperation) {
        case "subtract":
            total = total - currentNumber;
            break;
        case "add":
            total = total + currentNumber;
            break;
        case "multiply":
            total = total * currentNumber;
            break;
        case "divide":
            total = total / currentNumber;
            break;
        default:
            total = currentNumber;
            break;
    }

    updateCurrentNumber(0);
    currentOperation = "multiply";
}

buttonDivide.addEventListener("click", divide);

function divide() {
    switch (currentOperation) {
        case "subtract":
            total = total - currentNumber;
            break;
        case "add":
            total = total + currentNumber;
            break;
        case "multiply":
            total = total * currentNumber;
            break;
        case "divide":
            total = total / currentNumber;
            break;
        default:
            total = currentNumber;
            break;
    }

    updateCurrentNumber(0);
    currentOperation = "divide";
}

buttonEqual.addEventListener("click", equal);

function equal() {
    switch (currentOperation) {
        case "subtract":
            updateCurrentNumber(total - currentNumber);
            break;
        case "add":
            updateCurrentNumber(total + currentNumber);
            break;
        case "multiply":
            updateCurrentNumber(total * currentNumber);
            break;
        case "divide":
            updateCurrentNumber(total / currentNumber);
            break;
    }

    total = 0;
    isFirstClick = true;
    currentOperation = "";
}

function updateCurrentNumber(newNumber) {
    currentNumber = newNumber;
    display.innerText = currentNumber.toString();
}
