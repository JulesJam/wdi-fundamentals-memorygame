cardMaster = ['queen','king'];
cards = [];
cardsInPlay = [];
var score = 0;
var numberOfClicks = 0;
var numberOfCards = 6;


var gameBoard = document.getElementById ('game-board');

function on_load(score){
 	
	var playAgain = document.getElementById('button');
	playAgain.addEventListener('click',reStart);
	updateScore(score);


	}

function updateScore (score){

	var scoreDisplay = document.getElementById('score');
	
	scoreDisplay.innerHTML = 'Score '+ score;


}

function generateRandomSequence (numberOfCards, numberOfClicks){
	 if (numberOfClicks >0){
	 	alert('Shuffling');}
	cards = [];
	for(i=0; i <numberOfCards; i+=1){
		var randomPick = Math.floor((Math.random() * 2) +0);
		cards.push (cardMaster[randomPick]);
		

	}


}




function setboardWidth(numberOfCards){
	

	var boardWidth =document.getElementById('game-board');
	var requiredWidth = (((numberOfCards/2) * 144));
	var requiredWidthStr = ''+requiredWidth+'px';
	boardWidth.style.width=requiredWidthStr;
	console.log(requiredWidthStr);	
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var reqdMargin = (width - requiredWidth)/2;
	var reqdMarginStr ='5px '+reqdMargin+'px';
	boardWidth.style.margin=reqdMarginStr;

}

function setboardHeight(numberOfCards){
	var boardHeight =document.getElementById('game-board');
	var requiredHeight = (((numberOfCards/2) * 195));
	var requiredHeightStr = ''+requiredHeight+'px';
	boardHeight.style.height=requiredHeightStr;
	console.log(requiredHeightStr);
}

var createBoard = function(numberOfCards, numberOfClicks){
	setboardWidth(numberOfCards);
	if (numberOfCards>6){
	setboardHeight(numberOfCards);
	}


	generateRandomSequence(numberOfCards);
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


var reStart = function(score){

	alert('new game')
	 var cardClass =document.getElementsByClassName('card');
	for (i=0; i < cards.length; i+=1){
	 cardClass[i].innerHTML = '<img src="images/Back.png" alt="Back" />';
	}

	var score=0;
	updateScore(score);
	
	};

function endOfGame(numberOfClicks, numberOfCards){
		var endOfPlay = ((numberOfCards*2)-2);
		
   		if(numberOfClicks > 6){
   
    	alert('Game Over');}

}


function isMatch () {

	if(cardsInPlay[0] === cardsInPlay[1])
		{
		alert('You found a match');
		score=score+1;
		updateScore(score);
		setTimeout(clearCard(),10000);
		
		}
	else {
		alert('Sorry Try Again');
		setTimeout(clearCard(),10000);
		}
		
		
	}

		

	


	


 
function isTwoCards(clickCount, numberOfClicks, numberOfCards) {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  
 
 console.log (numberOfClicks);

 numberOfClicks=numberOfClicks+5;


 if(numberOfClicks>6){
 	alert('end');
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
    isMatch(cardsInPlay, numberOfClicks, numberOfCards);


    // clear cards in play array for next try
    cardsInPlay = [];
    


  }

 

}




createBoard(numberOfCards);


