const boardSize = 3;
const board = document.getElementById("board");
const moves = [];

let currentPlayer = "X";

for (let rowNum = 0; rowNum < boardSize; rowNum++) {
    const row = document.createElement("div");

    board.appendChild(row);
    moves.push([]);
    
    for (let colNum = 0; colNum < boardSize; colNum++) {
        const button = document.createElement("button");
        
        button.addEventListener("click", function () {
            if (button.textContent) {
                return;
            }

            console.log("click", rowNum, colNum);
            button.textContent = currentPlayer;
            moves[rowNum][colNum] = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            console.log(moves);
        });

        row.appendChild(button);
    }
}
