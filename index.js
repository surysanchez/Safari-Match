/*----- constants -----*/


/*----- state variables -----*/
let firstOpenC 
let secondOpenC 
let cardsTurned = false;
lockCards = false;


/*----- cached elements  -----*/

//  const attempts = document.getElementById('moves-left').textContent = score;

//  const restartGame = document.getElementById('auto-restart')
const allCards = document.querySelectorAll('.cards')
const resetButton = document.getElementById('restart').


/*----- event listeners -----*/
// 1st step To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card
// I also shuffle the cards using the forEach loop

allCards.forEach(function() {
  card.addEventListener('click', showCard)
  let random = Math.floor(Math.random() * 12)
     card.style.order = random

})

	/*----- functions -----*/
// shuffle the cards
  //  allCards.forEach(function(){
  //    let random = Math.floor(Math.random() * 12)
  //    card.style.order = random
  //  })

// 2nd step is to reveal the cards , in this callback funtion we need to add a class to 
// init function 
   function showCard() {

    if (lockCards) return // to avoid the cards to remain  
                          //flipped when user double
                         //clicks we need to add this contidion.

   //  'this' represent our cards in the window
    if (this === firstOpenC) return 
     this.classList.add('turn')
     
     // if cardsTurned(card clicked) is false it means the user is clicking at the first card  
    if (!cardsTurned) {
    cardsTurned = true
    firstOpenC = this// cards

     }else { // if cardsTurned is true , the player is clicking on the second card
      cardsTurned = false
      secondOpenC = this
      checkCardMatch()
  }
}
  // check if cards match
  function checkCardMatch() {
    // if they are the same , we have match and we remove event listener , for them not be clicked again
    if(firstOpenC.dataset.img === secondOpenC.dataset.img) {
      // if it is a match
      deactivateCards()
    } else {
     //not a match
     turnBackCards()
    }
  }

  function deactivateCards() {
    firstOpenC.removeEventListener('click', showCard)
    secondOpenC.removeEventListener('click', showCard)
    setTimeout(() => {
      alert ("It's a match!")
    }, 500)
  }
  
  function turnBackCards() {
    lockCards = true
    setTimeout(() =>  {
      firstOpenC.classList.remove('turn')
      secondOpenC.classList.remove('turn')
      lockCards = false
     },1000)
  }

  // function restartGame() {
  //   location.reload();
  //   // let cardsTurned = false;
  //   // lockCards = false;
  // }

  // resetButton.addEventListener('click', restartGame )
  
    








	





