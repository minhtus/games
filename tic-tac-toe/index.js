const cells = document.querySelectorAll('.cell');
const n = 3;
// Init a 2D array that manage the board
const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
);
let player = 'O';
function restart() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].addEventListener('click', cellClick, false);
    }
    board.forEach(arr => arr.fill(0));
    console.log(board)
}

function cellClick(cell) {
    play(cell.target.id, player);
}

function play(cellId, pattern) {
    const cell = document.getElementById(cellId);
    if (cell.textContent === '') {
        console.log(`play ${player} on ${cellId}`);
        cell.textContent = pattern;
        if (player === 'O') {
            // value of 1 is O
            writeBoard(cellId, 1);
        } else {
            // value of -1 is X
            writeBoard(cellId, -1);
        }
    }
    checkWin();
    switchTurn();
}

function writeBoard(cellId, value) {
    const row = cellId.charAt(1);
    const col = cellId.charAt(2);
    console.log(`${row}:${col}`)
    board[row][col] = value;
}

function switchTurn() {
    if (player === 'O') {
        player = 'X';
    } else {
        player = 'O';
    }
}


function checkWin(lastMoveRow, lastMoveCol) {

}

// start game
restart();
