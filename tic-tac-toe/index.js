const cells = document.querySelectorAll('.cell')
const board = Array.from(Array(9).keys());
function restart() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', cellClick, false);
    }
}

function cellClick(cell) {
    console.log(cell.target.id);
    play(cell.target.id, 'O')
}

function play(cellId, pattern) {
    var cell = document.getElementById(cellId)
    if (cell.textContent == "") {
        console.log('play')
        cell.textContent = pattern;
    }
}

function checkWin() {

}

// start game
restart();
