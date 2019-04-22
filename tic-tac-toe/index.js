const cells = document.querySelectorAll('.cell');
const n = 3;
const winCondition = 3;
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
    player = 'O';
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
        const row = parseInt(cellId.charAt(1));
        const col = parseInt(cellId.charAt(2));
        if (player === 'O') {
            // value of 1 is O
            writeBoard(row, col, 1);
        } else {
            // value of -1 is X
            writeBoard(row, col, -1);
        }
        checkBoard(row, col);
        switchTurn();
    }

}

function writeBoard(row, col, value) {
    console.log(`${row}:${col}`);
    board[row][col] = value;
}

function switchTurn() {
    if (player === 'O') {
        player = 'X';
    } else {
        player = 'O';
    }
}


function checkBoard(row, col) {
    let winner = null;
    //check win
    if (player === 'O') {
        if (checkWin(1, row, col)) {
            winner = 'O';
        }
    } else {
        if (checkWin(-1, row, col)) {
            winner = 'X';
        }
    }

    console.log(`RESULT: ${winner} win`);
    // check tie
    if (winner === null) {
        const tie = board.every(arr => arr.every(n => n!== 0));
        console.log(`TIE: ${tie}`);
    }

}

function checkWin(value, row, col) {
    let ver = 0;
    let hor = 0;
    let diag1 = 0;
    let diag2 = 0;
    // check vertical
    //check horizontal
    for (let i = 0; i < n; i++) {
        ver += board[i][col];
        hor += board[row][i];
        //check diagonal
        if (row === col || (row + col) === n-1) {
            console.log('On diagonal')
            diag1 += board[i][i];
            diag2 += board[i][n-1-i];
        }
    }
    if (ver === value*winCondition || hor === value*winCondition || diag1 === value*winCondition || diag2 === value*winCondition) {
        return true;
    }

}

// start game
restart();
