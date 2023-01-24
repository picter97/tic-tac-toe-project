//create variables
let text = document.getElementById('text')
let restartBtn = document.getElementById('restartBtn')
let inbox = Array.from(document.getElementsByClassName('inbox'))

const text_o = "O"
const text_x = "X"
let currentPlayer = text_x
let  spaces = Array(9).fill(null)
console.log(spaces)

const startGame = () => {
  inbox.forEach(box => box.addEventListener('click',inboxClicked))
}

function inboxClicked(e){
  console.log(e.target)
}

startGame()
//




//create logic for text inside







//create logic for win / lose 


