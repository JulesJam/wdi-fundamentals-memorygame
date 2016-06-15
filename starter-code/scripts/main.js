cards = ['queen','queen','king','king'];
cardsInPlay = [];
var score = 0;


var gameBoard = document.getElementById ('game-board');

function on_load(score){
 	
	var playAgain = document.getElementById('button');
	playAgain.addEventListener('click',clearCard);
	updateScore(score);


	}

function updateScore (score){

	var scoreDisplay = document.getElementById('score');
	
	scoreDisplay.innerHTML = 'Score '+ score;

}


var createBoard = function(numberOfCards){
	
	for (i=0; i <numberOfCards; i+=1){
	var createCardDiv =	document.createElement('div');
	createCardDiv.className = "card";
	createCardDiv.setAttribute('data-card',cards[i]);
	createCardDiv.addEventListener('click', isTwoCards);
	createCardDiv.innerHTML = '<img src="images/Back.png" alt="Back" />';
	gameBoard.appendChild(createCardDiv);
	}
	on_load(score);
	};

var clearCard = function(){
	
	 var cardClass =document.getElementsByClassName('card');
	for (i=0; i < cards.length; i+=1){
	 cardClass[i].innerHTML = '<img src="images/Back.png" alt="Back" />';
	}
};


function isMatch () {

	if(cardsInPlay[0] === cardsInPlay[1])
		{
		alert('You found a match');
		score=score+1;
		updateScore(score);
		
		}
	else {
		alert('Sorry Try Again');
		
		
		}

	}


	


 
function isTwoCards(clickCount) {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  
  if (cardsInPlay.length === 0) {

 	clearCard()


  }	

  var cardType = this.getAttribute('data-card');
 
 	 	if (cardType==='king'){
	this.innerHTML = '<img src="images/KDiamonds 12.png" alt="King of Diamonds" title ="king"/>';}
	else if (cardType==='queen')
	{
		this.innerHTML = '<img src="images/QDiamonds 12.png" alt="Queen of Diamonds" title = "queen" />';
	}


  cardsInPlay.push(cardType);
 
  // if you have two cards in play check for a match



  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);


    // clear cards in play array for next try
    cardsInPlay = [];


  }

 

}




createBoard(4);


