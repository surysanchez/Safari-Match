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



/*----- event listeners -----*/
// 1st step To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card
// I also shuffle the cards using the forEach loop
  allCards.forEach(function(card) {
   card.addEventListener('click', showCard)
   allCards.forEach(function(card) {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random
  })
  })

	/*----- functions -----*/

// 2nd step is to show the cards , in this callback funtion we need to add a class to 
// this is my init function 
   function showCard() {
    if (lockCards) return 
    // to avoid the cards to remain flipped when user double clicks we need to add this contidion
    if (this === firstOpenC) return 

     //  'this' represent our cards in the window
     this.classList.add('turn')// flip
     // if cardsTurned is false it means the user is clicking at the first card  
    if (!cardsTurned) {
    cardsTurned = true
    firstOpenC = this// card
    // console.log(cardsTurned, firstOpenC)

     }else { // if cardsTurned is true , the player is clicking on the second card
      cardsTurned = false
      secondOpenC = this
      checkCardMatch()

    //  console.log(firstOpenC, secondOpenC)
    //  console.log(firstOpenC.dataset.img)
    //   console.log(secondOpenC.dataset.img)
    
    // check if cards match
  }
}
  
  function checkCardMatch() {
    // if they are the same , we have match and we remove event listener , for them not be clicked again
    if(firstOpenC.dataset.img === secondOpenC.dataset.img) {
      // if it is a match
      deactivateCards()
    }else {
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

  function restartGame() {
    let cardsTurned = false;
    lockCards = false;
  }

    const resetButton = document.getElementById('restart').addEventListener('click', restartGame )
  
    








	





