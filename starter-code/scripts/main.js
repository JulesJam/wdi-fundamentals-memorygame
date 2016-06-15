var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var gameBoard = document.getElementById ('game-board');


var createBoard = function(numberOfCards){
	for (i=0; i <= numberOfCards; i+=1){
	var createCardDiv =	document.createElement('div');
	createCardDiv.className = "board";
	gameBoard.appendChild(createCardDiv);
	}



console.log (i);
console.log (numberOfCards);
};


createBoard(20);
/*if(cardTwo === cardFour){

	alert('You found a match');
}
else {
	alert('Sorry Try Again')
}*/
