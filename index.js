/*----- constants -----*/
// To store the cards the user has clicked 
let firstOpenC 
let secondOpenC 
let cardsTurned = false;
//  let cardsMatched = []

// const moves = 0;


/*----- state variables -----*/
//  const matchingComb = [ 
//      {pair1 :"https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg" ,copy1: "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg"},
    
//      {pair2 : "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436__480.jpg", copy2: "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436__480.jpg"},

//      {pair3: "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg", copy3: "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg"},
    
//      {pair4:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg",   copy4:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg" },

//      { pair5: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__480.jpg" , copy5: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__480.jpg"},
//      {pair6: "https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__480.jpg" , copy6: "https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__480.jpg"}
    
//  ]



/*----- cached elements  -----*/

// Defining variables and data


//  const attempts = document.getElementById('moves-left').textContent = score;

//  const restartGame = document.getElementById('auto-restart')
 const allCards = document.querySelectorAll('.cards')

 

/*----- event listeners -----*/
// 1st step To reveal the cards , we loop through all the cards slected and fire an event listener so when the cards are clicked we show the card
// I also shuffle the cards insode the forEach loop
  allCards.forEach(function(card) {
   card.addEventListener('click', showCard)
   allCards.forEach(function(card) {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random
  })
  })



	/*----- functions -----*/

// 2nd step is to show the cards , in this callback funtion we need to add a class to 


   function showCard() {
     //  'this' represent our cards in the window
     this.classList.add('turn')// flip

     // conditions to checked winning combinations 
    if (!cardsTurned) {
   // if cardsTurned is false it means the user is clicking at the first card   
    cardsTurned = true
    firstOpenC = this// card
    // console.log(cardsTurned, firstOpenC)
     }else { // if cardsTurned is true , the player is clicking on the second card
      cardsTurned = false
      secondOpenC = this

    //  console.log(firstOpenC, secondOpenC)
    //  console.log(firstOpenC.dataset.img)
    //   console.log(secondOpenC.dataset.img)
    
    // check if cards match
  }
}
  
  function checkMatches() {
    
    if(firstOpenC.dataset.img === secondOpenC.dataset.img){
      // if they are the same , we have match and we remove event listener , for them not be clicked again
      firstOpenC.removeEventListener('click', showCard)
      secondOpenC.removeEventListener('click', showCard)
      lockBoard()
      setTimeout(() => {
        alert ("It's a match!")
      }, 500)
     //  console.log('it is a match')
    }else {
     //not a match
     setTimeout(() =>  {
       firstOpenC.classList.remove('turn')
       secondOpenC.classList.remove('turn')
  
     },1000)
    }
  }
  
   lockBoard

   
  

 
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







	





