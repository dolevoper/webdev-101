// 1. Handle user clicks cancel in difficulty menu

// 2. Build the menu:
//      Should be able to start a new game, set boundary (default boundary is 10), set maximum guesses (default is infinity), exit
//      Winning or hitting cancel during the game returns to main menu
//      Hitting cancel in the menu should quit the game
//      Validate that chosen option is a valid menu option

// 3. Track number of guesses and display after win

let playerChoice = prompt(
    "Welcome to Guess My Number!\nWhat would you like to do?\n" +
    "    1. Play\n" +
    "    2. Quit"
);

while (playerChoice === "1") {
    playGame();

    playerChoice = prompt(
        "Welcome to Guess My Number!\nWhat would you like to do?\n" +
        "    1. Play\n" +
        "    2. Quit"
    );
}

function playGame() {
    let difficullty = prompt(
        "Please select difficulty level:\n" +
        "    1. Easy (number will be between 1 and 10)\n" +
        "    2. Standard (number will be between 1 and 100)\n" +
        "    3. Hard (number will be between 1 and 1000)\n"
    );

    let upperBoundary = getUpperBoundary(difficullty);

    while (isNaN(upperBoundary)) {
        difficullty = prompt(
            "Please enter a valid choice.\n" +
            "Please select difficulty level:\n" +
            "    1. Easy (number will be between 1 and 10)\n" +
            "    2. Standard (number will be between 1 and 100)\n" +
            "    3. Hard (number will be between 1 and 1000)\n"
        );

        upperBoundary = getUpperBoundary(difficullty);
    }

    const secret = createSecret(upperBoundary);

    let guess = promptGuess(upperBoundary);

    while (guess !== null && guess !== secret) {
        let hint;

        if (guess > secret) {
            hint = "Too high, try again";
        } else {
            hint = "Too low, try again";
        }

        guess = promptGuess(upperBoundary, hint);
    }

    if (guess === secret) {
        alert("Congratulations, you win! My number was " + secret + ".");
    } else {
        alert("Too bad, my number was " + secret + ".");
    }
}

function getUpperBoundary(difficullty) {
    switch (difficullty.toLowerCase().trim()) {
        case "1":
        case "easy":
            return 10;
            break;
        case "2":
        case "standard":
            return 100;
            break;
        case "3":
        case "hard":
            return 1000;
            break;
    }
}

function createSecret(upperBoundary) {
    return Math.round((Math.random() * (upperBoundary - 1)) + 1);
}

function promptGuess(upperBoundary, hint) {
    let guess = prompt(
        hint === undefined ?
            "Please enter your guess:" :
            hint + "\nPlease enter your guess:"
    );

    if (guess === null) {
        return null;
    }

    let guessAsNumber = Number(guess);

    while (isNaN(guessAsNumber) || guessAsNumber < 1 || guessAsNumber > upperBoundary) {
        guess = prompt(
            "Please enter a valid number between 1 and " + upperBoundary + ".\n" +
            hint + "\nPlease enter your guess:"
        );

        if (guess === null) {
            return null;
        }

        guessAsNumber = Number(guess);
    }

    return guessAsNumber;
}
