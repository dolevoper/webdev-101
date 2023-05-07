const display = document.getElementById("screen");
const numbersContainer = document.getElementById("numbers-container");
const numberButtons = numbersContainer.getElementsByTagName("button");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", onNumberButtonClick);
}

let currentNumber = 0;
let total = 0;

display.innerText = currentNumber.toString();

function onNumberButtonClick(e) {
    const num = Number(e.target.getAttribute("data-value"));
    
    currentNumber = (currentNumber * 10) + num;
    display.innerText = currentNumber.toString();
}
