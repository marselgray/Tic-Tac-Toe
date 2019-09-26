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

// Human player
const huPlayer = '0'
// AI player
const aiPlayer = 'X';

const cells = document.querySelectorAll('.cell');

startGame();

// begins game
function startGame(){
	document.querySelector('.endgame').style.display = 'none';
	origBoard = Array.from(Array(9).keys());
	for (let i = 0; i < cells.length; i++){
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square){
	// console.log(square.target.id);

	// the human player is doing the turn
	turn(square.target.id, huPlayer);
}