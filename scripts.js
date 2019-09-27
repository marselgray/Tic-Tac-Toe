// variables
var origBoard;
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

// Human player: blue
const huPlayer = 'O'
// AI player: red
const aiPlayer = 'X';

const cells = document.querySelectorAll('.cell');

startGame();

// begins game
function startGame() {
	console.log('start game');
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square){
	console.log('turn click');

	// console.log(square.target.id);

	// the human player is doing the turn
	turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
	console.log('turn');
	origBoard[squareId] = player;

	document.getElementById(squareId).innerText = player;
	
	let gameWon = checkWin(origBoard, player)
	
	if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
	console.log('check win');
	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);
	
	let gameWon = null;
	
		for (let [index, win] of winCombos.entries()) {
		
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	console.log('game over');

	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "blue" : "red";
	}
	
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false);
	}
}