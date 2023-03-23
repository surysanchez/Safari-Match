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
// 1st step : To reveal the cards , we loop through all the cards selected and fire an event listener so when the cards are clicked we show the cards
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
    if (lockCards) return //to avoid the cards to remain flipped when user double clicks , lock board.
   if (this === firstOpenC) return 
    //  'this' represent our cards in the window
     // added a class of '.turn ' 
     this.classList.add('turn')
     //checking which card the player is clicking (first or second)
    if (!cardsTurned) {
    cardsTurned = true
    firstOpenC = this// cards

     }else {  
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
      matchMessage()
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
      matchMessage
      // alert("It's a match!")
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
     }, 1000)

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
   
  
  function matchMessage() {
    let message = document.querySelector('.match-message')
    message.style.display ='block'
    message.textContent = 'Bravo! You found a match.'
    setTimeout(() => {
      message.textContent = '';
      matchMessage = null 
      message.classList.remove('match-message')
    }, 500)
    
  }
// function removeMessage(){
//   if (firstOpenC !== secondOpenC || firstOpenC === secondOpenC ) {
//     setTimeout(()=> {
//       firstOpenC.classList.remove('match-message')
//       secondOpenC.classList.remove('match-message')
//       (!matchMessage) = null 
//     }, 200)
//     } 
// }







	





