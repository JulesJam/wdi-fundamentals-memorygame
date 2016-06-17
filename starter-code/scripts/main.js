cardMaster = ['queen','king'];
cards = [];
cardsInPlay = [];
var score = 0;
var numberOfClicks = 0;
var numberOfCards = 6;
var numberOfLives = ((numberOfCards*2)-1);
var numberOfRows = (Math.ceil(((numberOfCards/3)-2))+2);
var gameBoard = document.getElementById ('game-board');
var lastCardClikedID = null;



//resets the game if player clicks the play again button
function on_load(score){
 	
	var playAgain = document.getElementById('button');
	playAgain.addEventListener('click',reStart);
	updateScore(score);
	updateLives(numberOfLives);


	}


//updates the displayed score if a succesful match is found
function updateScore (score){

	var scoreDisplay = document.getElementById('score');
	
	scoreDisplay.innerHTML = 'Score '+ score;


	}

//reduces the number of lives so that game doesn't go on for ever!
function updateLives(numberOfClicks){

	var livesDisplay = document.getElementById('lives');
	
	livesDisplay.innerHTML = 'Lives '+numberOfLives ;


}

//changesges cards randomly after each game so the player does not know where cards were from last game

function generateRandomSequence (numberOfCards, numberOfClicks){
	 if (numberOfClicks >0){
	 	alert('Shuffling');}
	cards = [];
	for(i=0; i <numberOfCards; i+=1){
		var randomPick = Math.floor((Math.random() * 2) +0);
		cards.push (cardMaster[randomPick]);
		

	}
	}


//changes board width depending on number of cards

function setboardWidth(numberOfCards, numberOfRows){
	
//adjusts width of board subject to number of cards chosen in code - ***need to make this an input function in future***
		if(numberOfCards<5){
			columns=2;}
		else{columns = 3;}
	
	var boardWidth =document.getElementById('game-board');
	var requiredWidth = (columns* 144);
	var requiredWidthStr = ''+requiredWidth+'px';
	boardWidth.style.width=requiredWidthStr;	
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var reqdMargin = (width - requiredWidth)/2;
	var reqdMarginStr ='5px '+reqdMargin+'px';
	boardWidth.style.margin=reqdMarginStr;

	}


//changes the board height depending on number of rows

function setboardHeight(numberOfRows){

	//changes the game-board height depending on number of rows of cards 
	var boardHeight =document.getElementById('game-board');
	var requiredHeight = (numberOfRows * 195);
	var requiredHeightStr = ''+requiredHeight+'px';
	boardHeight.style.height=requiredHeightStr;
	
	}

//builds the board including adding ID' to each card so that the card cliked is know to prevent user just clicking same card twice

var createBoard = function(numberOfCards, numberOfClicks,numberOfRows){
	setboardWidth(numberOfCards);
	//maximum cards in a row is 3
	
	setboardHeight(numberOfRows);



	generateRandomSequence(numberOfCards);
	for (i=0; i <numberOfCards; i+=1){
	var createCardDiv =	document.createElement('div');
	createCardDiv.className = "card";
	createCardDiv.id = i;
	createCardDiv.setAttribute('data-card',cards[i]);
	createCardDiv.addEventListener('click', isTwoCards);
	createCardDiv.innerHTML = '<img src="images/Back.png" alt="Back" />';
	gameBoard.appendChild(createCardDiv);
	}
	
	on_load(score);
	
	};

//this replaces card faces with card backs image	

var clearCard = function(){

	 var cardClass =document.getElementsByClassName('card');
	for (i=0; i < cards.length; i+=1){
	 cardClass[i].innerHTML = '<img src="images/Back.png" alt="Back" />';
	}
	
	};

//this clears all cards and reset score an lives to 0
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


//test to see if two clicked cards are the same card - a cheat - or if different checks if they are a match 

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
		numberOfLives=numberOfLives-1;
		updateLives();
		
		}
		
		
	}

		

	


	
//checks to see if two cards have been played after a click

 
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  
 //have to fix reset on number of lives still
 
   		

  var cardType = this.getAttribute('data-card');
  var cardId = this.getAttribute('id');


  if (lastCardClikedID==cardId){
  	alert('Naughty you clicked the same card twice');
  	lastCardClikedID=cardId;
  }	

  else {
 
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

  lastCardClikedID=cardId;
 numberOfClicks+=1;


 if(numberOfClicks>(numberOfCards*2)-1){
 	alert('Game Over');
 	numberOfClicks=0;
 	reStart();
 }
		
 }

}


//start everything

createBoard(numberOfCards);


