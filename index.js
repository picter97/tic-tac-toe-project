//create variables
let text = document.getElementById('text')
let restartBtn = document.getElementById('restartBtn')
//turns an arraylike and turns it into an array 
let inbox = Array.from(document.getElementsByClassName('inbox'))
//  console.log(inbox)
const text_o = "O"
const text_x = "X"
let currentPlayer = text_x

let  spaces = Array(9)
//console.log(spaces)

//for eahc square adds an event listener on click 
const startGame = () => {
  inbox.forEach(box => box.addEventListener('click',inboxClicked))
}


//function when clicked adds X or O
function inboxClicked(e){
  e.target.innerText = spaces
  spaces = currentPlayer
  if(currentPlayer === text_x){
    currentPlayer = text_o;
  } else{
    currentPlayer = text_x;
  }
}

//reset button 

restartBtn.addEventListener('click', restart)
function restart() {
  
  

  inbox.forEach( box => {
    box.innerText= ''
  })
  currentPlayer = text_x
}


startGame()

//furture thing to do winner/looser/tie 
// const wining options 

// display different colors when when game is done 
// version 1.0