/*----- constants -----*/


/*----- state variables -----*/
let firstOpenC 
let secondOpenC 
let cardsTurned = false;
lockCards = false;


/*----- cached elements  -----*/

const allCards = document.querySelectorAll('.cards')
const resetButton = document.getElementById('restart')


/*----- event listeners -----*/

resetButton.addEventListener('click', restartGame )
// 1st step : To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card
// 2nd step : I also shuffle the cards using the forEach loop

allCards.forEach(function(card) {
  card.addEventListener('click', showCard)
  let random = Math.floor(Math.random() * 12)
     card.style.order = random

})

	/*----- functions -----*/

// 3rd step: is to check wich card user clicked (first or second ) to perform the matching logic .
// init function 
   function showCard() {

   // lock the board
    if (lockCards) return // to avoid the cards to remain  
                          //flipped when user double
                         //clicks we need to return true
   if (this === firstOpenC) return 
    //  'this' represent our cards in the window
     // added a class of '.turn ' 
     this.classList.add('turn')
     
     // if cardsTurned(card clicked) is false it means the user is clicking at the first card , then set I set it to true and assign its value to 'this'
    if (!cardsTurned) {
    cardsTurned = true
    firstOpenC = this// cards

     }else { // if cardsTurned is true , the player is clicking on the second card , then I set it to false and assign its value to this 
      cardsTurned = false
      secondOpenC = this
      checkCardMatch()
  }
}
  // 4th step: check if cards match
  function checkCardMatch() {
    // added 'data-img' attributte to the images in html , to acces the images I used dataset .
    if(firstOpenC.dataset.img === secondOpenC.dataset.img) {
      // if it is a match
      deactivateCards()
    } else {
     //not a match
     turnBackCards()
    }
  }

  function deactivateCards() {
    // if they are the same , we have a match and we remove event listener , for them not be clicked again
    firstOpenC.removeEventListener('click', showCard)
    secondOpenC.removeEventListener('click', showCard)
    setTimeout(() => {
      alert ("It's a match!")
    }, 500)
  }
  
  function turnBackCards() {
    lockCards = true
    // not a match , remove the 'turn' class to flip them back
    // added a 1 sec delay to being able to see the second card
    setTimeout(() =>  {
      firstOpenC.classList.remove('turn')
      secondOpenC.classList.remove('turn')
      lockCards = false //unlocked after cards have been flip again
     },1000)

  }
// // after each round set first card and second card to null
    function resetBoard(){
      showCard = false;
      lockCards = false;
      firstOpenC = null;
      secondOpenC = null;
    }

  // 6th step Restart the game
   function restartGame() {
     window.location.reload();
   }
   
  
    








	





