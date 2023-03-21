/*----- constants -----*/
// To store the cards the user has clicked 
let firstOpenC 
let secondOpenC 
 let cardsTurned = false;
//  let cardsMatched = []

// const moves = 0;


/*----- state variables -----*/



/*----- cached elements  -----*/

// Defining variables and data


//  const attempts = document.getElementById('moves-left').textContent = score;

//  const restartGame = document.getElementById('auto-restart')
 const allCards = document.querySelectorAll('.cards')

 

/*----- event listeners -----*/
// 1st step To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card


 allCards.forEach(function(card) {
  let random = Math.floor(Math.random() * 12)
      card.style.order = random
   card.addEventListener('click', showCard)

 })

	/*----- functions -----*/

// 2nd step is to show the cards , in this callback funtion we need to add a class to 
  function showCard() {
    //  console.log('this')
    //  'this' reprent our cards in the window
    this.classList.add('turn')// flip

    // conditions to checked winning combinations 
   if (!cardsTurned) {
  // if cardsTurned is false it means the user is clicking at the first card   
    //  cardsTurned = true
     firstOpenC = this;// card
    //console.log(cardsTurned, firstOpenC)
   }else { // if cardsTurned is true , the player is clicking on the second card
    // cardsTurned = false
    secondOpenC = this
    //console.log(firstOpenC, secondOpenC)

   }
 
 }

 
  // (function shuffleCards() {
  //  allCards.forEach(function(card) {
  //    let random = Math.floor(Math.random() * 12)
  //    card.style.order = random
  //  })
  // })()

  //it would be called when program loads to initialize the game  
  // i can be also a callback funtion for the restart button 
  // function init() {
  //   shuffleCards()

  // }

    


// Make the front of the cards display black

// Check that when each card is clicked , its value is reveal 

//6. check  if  cards selected by the player  match , comparing 

//7 . If two cards match, keep them face up 

//8.If two cards do not match, flip them back over and remove the selected cards

// 9.when all cards are matched, end the game 

//10.Set a restart button to allow the players  to play again






	





