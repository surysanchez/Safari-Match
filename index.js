/*----- constants -----*/
const cardsArray = []
let matched 
let notMatched

const lives = 10;

attempts.textContent = lives;


/*----- state variables -----*/



/*----- cached elements  -----*/

// Defining variables and data

const styleCards = document.querySelectorAll(".cards");

const attempts = document.getElementById('moves-left');
 


// create an array of objects with key property 'img' and the value are card's url 
const cardsValue = [
    {img: "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg" ,// front_0
    img: "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg",//pair_0
    img:"https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436__480.jpg" , // front_1
    img: "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436__480.jpg" , //pair_1
    img: "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" ,// front_2
    img: "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg" , //pair_2
    img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg" ,//front_3
    img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg", // pair_3
    img:"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__480.jpg" ,//front_4
    img:"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649__480.jpg", //pair_4
    img:"https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__480.jpg", //front_5
    img:"https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__480.jpg" //pair_5

    }

]

/*----- event listeners -----*/

cardsValue.classList.add('cards').addEventListener('click', tossCard)




	/*----- functions -----*/
// Best method to shuffle the array is using the Fisher-Yates shuffle algorithm
function shuffleCards(cardsValue) {
  for (let i = cardsValue.length -1 ;i > 0; i--)
  var random = Math.floor(Math.random() * (i + 1 ));
  [cardsValue[i], cardsValue[random] = [cardsValue[random], cardsValue[i]]] ;
 
  
}
shuffleCards(cardsValue)


function showCard() {
  
}


// changing the cards (not flipping them) refering than when I'm selecting the img I want to change the look not the card




// function tossCard() {
// }


  //it would be called when program loads to initialize the game  
  // i can be also a callback funtion for the restart button 
function init(){

}

    



 



// // const optionOfCards = [
// //     [card_0 , card_1 , card_2, card_3, card_4, card_5, card_7, card_8, card_9, card_10, card_11, card_12]
// // ]





// function allTheCards(){

// }





// Make the front of the cards display black

// Check that when each card is clicked , its value is reveal 

//6. check  if  cards selected by the player  match , comparing 

//7 . If two cards match, keep them face up 

//8.If two cards do not match, flip them back over and remove the selected cards

// 9.when all cards are matched, end the game 

//10.Set a restart button to allow the players  to play again






	





