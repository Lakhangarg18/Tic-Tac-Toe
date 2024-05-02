let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameWon = false;

function makeMove(cell) {
    if (!gameWon && gameBoard[cell] === '') {
        gameBoard[cell] = currentPlayer;
        document.getElementsByClassName('cell')[cell].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            gameWon = true;
        } else if (gameBoard.indexOf('') === -1) {
            alert('It\'s a draw!');
            gameWon = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    for (const combo of winningCombination) {
        if (gameBoard[combo[0]] === player && gameBoard[combo[1]] === player && gameBoard[combo[2]] === player) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameWon = false;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
