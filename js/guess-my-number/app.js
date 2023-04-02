// 1. Track number of guesses and display after win
// 2. Add option to limit number of guesses
// 3. BONUS - save difficulty level between refreshes

const playerChoicePlayGame = 0;
const playerChoiceChangeDifficullty = 1;
const playerChoiceQuit = 2;

const easyUpperBoundary = 10;
const standardUpperBoundary = 100;
const hardUpperBoundary = 1000;

let playerChoice = getPlayerChoice();
let upperBoundary = easyUpperBoundary;

while (playerChoice !== undefined && playerChoice !== playerChoiceQuit) {
    switch (playerChoice) {
        case playerChoicePlayGame:
            playGame();
            break;
        case playerChoiceChangeDifficullty:
            const newUpperBoundary = getUpperBoundary();

            if (newUpperBoundary !== undefined) {
                upperBoundary = newUpperBoundary;
            }

            break;
    }

    playerChoice = getPlayerChoice();
}

function getPlayerChoice() {
    const menuMessage = "Welcome to Guess My Number!\nWhat would you like to do?\n" +
    "    1. Play\n" +
    "    2. Change Difficuly\n" +
    "    3. Quit";

    let playerChoice = prompt(menuMessage);

    if (playerChoice === null) {
        return;
    }

    let calculatedPlayerChoice = calculatePlayerChoice(playerChoice);

    while (calculatedPlayerChoice === undefined) {
        playerChoice = prompt("Please choose a valid menu option.\n" + menuMessage);

        if (playerChoice === null) {
            return;
        }
    
        calculatedPlayerChoice = calculatePlayerChoice(playerChoice);
    }

    return calculatedPlayerChoice;
}

function calculatePlayerChoice(playerChoice) {
    switch (playerChoice) {
        case "1": return playerChoicePlayGame;
        case "2": return playerChoiceChangeDifficullty;
        case "3": return playerChoiceQuit;
    }
}

function playGame() {
    const secret = createSecret(upperBoundary);

    let guess = promptGuess(upperBoundary, "");

    while (guess !== null && guess !== secret) {
        let hint;

        if (guess > secret) {
            hint = "Too high, try again\n";
        } else {
            hint = "Too low, try again\n";
        }

        guess = promptGuess(upperBoundary, hint);
    }

    if (guess === secret) {
        alert("Congratulations, you win! My number was " + secret + ".");
    } else {
        alert("Too bad, my number was " + secret + ".");
    }
}

function getUpperBoundary() {
    let difficullty = prompt(
        "Please select difficulty level:\n" +
        "    1. Easy (number will be between 1 and 10)\n" +
        "    2. Standard (number will be between 1 and 100)\n" +
        "    3. Hard (number will be between 1 and 1000)\n"
    );

    if (difficullty === null) {
        return;
    }

    let upperBoundary = calculateUpperBoundary(difficullty);

    while (isNaN(upperBoundary)) {
        difficullty = prompt(
            "Please enter a valid choice.\n" +
            "Please select difficulty level:\n" +
            "    1. Easy (number will be between 1 and 10)\n" +
            "    2. Standard (number will be between 1 and 100)\n" +
            "    3. Hard (number will be between 1 and 1000)\n"
        );

        if (difficullty === null) {
            return;
        }

        upperBoundary = calculateUpperBoundary(difficullty);
    }

    return upperBoundary;
}

function calculateUpperBoundary(difficullty) {
    switch (difficullty.toLowerCase().trim()) {
        case "1":
        case "easy":
            return easyUpperBoundary;
        case "2":
        case "standard":
            return standardUpperBoundary;
        case "3":
        case "hard":
            return hardUpperBoundary;
    }
}

function createSecret(upperBoundary) {
    return Math.round((Math.random() * (upperBoundary - 1)) + 1);
}

function promptGuess(upperBoundary, hint) {
    let guess = prompt(hint + "Please enter your guess:");

    if (guess === null) {
        return null;
    }

    let guessAsNumber = Number(guess);

    while (isNaN(guessAsNumber) || guessAsNumber < 1 || guessAsNumber > upperBoundary) {
        guess = prompt(
            "Please enter a valid number between 1 and " + upperBoundary + ".\n" +
            hint + "Please enter your guess:"
        );

        if (guess === null) {
            return null;
        }

        guessAsNumber = Number(guess);
    }

    return guessAsNumber;
}
