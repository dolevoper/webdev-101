const numbersContainer = document.getElementById("numbers-container");
const numberButtons = numbersContainer.getElementsByTagName("button");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", sayHello);
}

function sayHello() {
    alert("hello");
}
