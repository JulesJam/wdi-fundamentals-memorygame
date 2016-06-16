cardMaster = ['queen','king'];
cards = [];
cardsInPlay = [];
var score = 0;
var numberOfClicks = 0;
var numberOfCards = 6;
var numberOfLives = ((numberOfCards*2)-1);


var gameBoard = document.getElementById ('game-board');

function on_load(score){
 	
	var playAgain = document.getElementById('button');
	playAgain.addEventListener('click',reStart);
	updateScore(score);
	updateLives(numberOfLives);


	}

function updateScore (score){

	var scoreDisplay = document.getElementById('score');
	
	scoreDisplay.innerHTML = 'Score '+ score;


}

function updateLives(numberOfClicks){

	var livesDisplay = document.getElementById('lives');
	
	livesDisplay.innerHTML = 'Lives '+numberOfLives ;


}

//chnages cards randomly after each game

function generateRandomSequence (numberOfCards, numberOfClicks){
	 if (numberOfClicks >0){
	 	alert('Shuffling');}
	cards = [];
	for(i=0; i <numberOfCards; i+=1){
		var randomPick = Math.floor((Math.random() * 2) +0);
		cards.push (cardMaster[randomPick]);
		

	}


}


//chnages board width depending on number of cards

function setboardWidth(numberOfCards){
	
//adjusts width of bard subject to number of cards chosen
	var boardWidth =document.getElementById('game-board');
	var requiredWidth = (((numberOfCards/2) * 144));
	var requiredWidthStr = ''+requiredWidth+'px';
	boardWidth.style.width=requiredWidthStr;	
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var reqdMargin = (width - requiredWidth)/2;
	var reqdMarginStr ='5px '+reqdMargin+'px';
	boardWidth.style.margin=reqdMarginStr;

}

function setboardHeight(numberOfCards){

	//changes the game-board height depending on number of rows of cards 
	var boardHeight =document.getElementById('game-board');
	var requiredHeight = (((numberOfCards/2) * 195));
	var requiredHeightStr = ''+requiredHeight+'px';
	boardHeight.style.height=requiredHeightStr;
	console.log(requiredHeightStr);
}

var createBoard = function(numberOfCards, numberOfClicks){
	setboardWidth(numberOfCards);
	//maximum cards in a row is 3
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


var reStart = function(){

	alert('new game')
	 var cardClass =document.getElementsByClassName('card');
	for (i=0; i < cards.length; i+=1){
	 cardClass[i].innerHTML = '<img src="images/Back.png" alt="Back" />';
	}

	score=0;
	numberOfLives=((numberOfCards*2)-1);
	updateScore(score);
	updateLives(numberOfLives);
	
	};




function isMatch () {

	if(cardsInPlay[0] === cardsInPlay[1])
		{
		alert('You found a match');
		score=score+1;
		numberOfLives=numberOfLives-1;
		updateLives();
		updateScore(score);
		setTimeout(clearCard(),10000);
		
		}
	else {
		alert('Sorry Try Again');
		setTimeout(clearCard(),10000);
		updateLives();
		numberOfLives=numberOfLives-1;
		}
		
		
	}

		

	


	


 
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  
 //have to fix reset on number of lives still
 
   		

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
console.log (numberOfClicks);

 numberOfClicks+=1;


 if(numberOfClicks>(numberOfCards*2)-1){
 	alert('Game Over');
 	numberOfClicks=0;
 	reStart();
 }
		
 

}




createBoard(numberOfCards);


