// Extra challange:
//      1. Make the function hasWon work for every board size
//      2. Add score table

const boardSize = 3;
const board = document.getElementById("board");
const message = document.getElementById("message");
const reset = document.getElementById("reset");

let moves = [];
let currentPlayer = "X";
let canPlay = true;

buildBoard();

reset.addEventListener("click", function () {
    moves = [];
    currentPlayer = "X";
    canPlay = true;

    board.replaceChildren();
    message.textContent = "";
    buildBoard();
});

function buildBoard() {
    for (let rowNum = 0; rowNum < boardSize; rowNum++) {
        const row = document.createElement("div");

        board.appendChild(row);
        moves.push([]);

        for (let colNum = 0; colNum < boardSize; colNum++) {
            const button = document.createElement("button");

            button.addEventListener("click", function () {
                // ====================== //
                if (button.textContent || !canPlay) {
                    return;
                }

                button.textContent = currentPlayer;
                moves[rowNum][colNum] = currentPlayer;

                if (hasWon(rowNum, colNum)) {
                    message.textContent = currentPlayer + " has won!";
                    canPlay = false;
                } else if (noMoreMoves()) {
                    message.textContent = "It's a tie!";
                    canPlay = false;
                }
                // ====================== //

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            });

            row.appendChild(button);
        }
    }
}

function hasWon(rowNum, colNum) {
    // check row
    if (moves[rowNum][0] === moves[rowNum][1] && moves[rowNum][1] === moves[rowNum][2]) {
        return true;
    }

    // check column
    if (moves[0][colNum] === moves[1][colNum] && moves[1][colNum] === moves[2][colNum]) {
        return true;
    }

    // check diagonal 1
    if (rowNum === colNum && moves[0][0] === moves[1][1] && moves[1][1] === moves[2][2]) {
        return true;
    }

    // check diagonal 2
    if (rowNum + colNum === boardSize - 1 && moves[0][2] === moves[1][1] && moves[1][1] === moves[2][0]) {
        return true;
    }

    return false;
}

function noMoreMoves() {
    for (let rowNum = 0; rowNum < boardSize; rowNum++) {
        for (let colNum = 0; colNum < boardSize; colNum++) {
            if (!moves[rowNum][colNum]) {
                return false;
            }
        }
    }

    return true;
}
