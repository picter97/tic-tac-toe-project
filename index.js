//create variables
let text = document.getElementById('text')
let restartBtn = document.getElementById('restartBtn')
//turns an arraylike and turns it into an array 
let inbox = Array.from(document.getElementsByClassName('inbox'))

const text_o = "O"
const text_x = "X"
let currentPlayer = text_x
//change the array to null= empty spaces
let  spaces = Array(9).fill(null)
console.log(spaces)

//for eahc square adds an event listener on click 
const startGame = () => {
  inbox.forEach(box => box.addEventListener('click',inboxClicked))
}


//function when clicked adds X or O
function inboxClicked(e){
  const id = e.target.id
  if(!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    currentPlayer = currentPlayer == text_x ? text_o : text_x
  }
}




//reset button 

restartBtn.addEventListener('click', restart)
function restart() {
  //whitout this can display x-o in same box as we did before restart
  spaces.fill(null)

  inbox.forEach( box => {
    box.innerText= ''
  })
  currentPlayer = text_x
}




//create logic for win / lose 

function playerHasWon() {
  for (const condition of winningCombos) {
      let [a, b, c] = condition

      if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
          return [a,b,c]
      }
  }
  return false
}


const wincomb = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]


startGame()