/*----- constants -----*/
// To store the cards the user has clicked 
let cardsTurned = false;
 let openCards = []
 let matchCards = []
 let notMatchC = []




// const moves = 0;


/*----- state variables -----*/



/*----- cached elements  -----*/

// Defining variables and data


 const attempts = document.getElementById('moves-left');

 const restartGame = document.getElementById('auto-restart')
 const allCards = document.querySelectorAll('.cards')
 // all the cards id's
const img_1 = document.getElementById('img-1')
const img_2 = document.getElementById('img-2')
const img_3 = document.getElementById('img-3')
const img_4 = document.getElementById('img-4')
const img_5 = document.getElementById('img-5')
const img_6 = document.getElementById('img-6')
 

/*----- event listeners -----*/
// 1st step To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card
allCards.forEach(function(card){
  this.addEventListener('click', showCard)

  if (cardsTurned) {
    return 
  }
})



	/*----- functions -----*/
// Best method to shuffle the array is using the Fisher-Yates shuffle algorithm
// 2nd step is to show the cards , in this callback funtion we need to add a class to 
 function showCard() {
  //  console.log('this')'this' reprent our cards in the window
  this.classList.add('turn')// flip
 }
// showCard()

// changing the cards (not flipping them) refering than when I'm selecting the img I want to change the look not the card

// function cardsPairs() {
//   cardsValue.classList.add()
// }


// function tossCard() {
// }


  //it would be called when program loads to initialize the game  
  // i can be also a callback funtion for the restart button 
// function init(){

// }

    


// Make the front of the cards display black

// Check that when each card is clicked , its value is reveal 

//6. check  if  cards selected by the player  match , comparing 

//7 . If two cards match, keep them face up 

//8.If two cards do not match, flip them back over and remove the selected cards

// 9.when all cards are matched, end the game 

//10.Set a restart button to allow the players  to play again






	





