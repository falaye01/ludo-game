

let scorePlayer1 = document.getElementById("scorePlayer1")
let scorePlayer2 = document.getElementById("scorePlayer2")
// const refreshMe = document.getElementById("refresh")
const rollPlayer1Button = document.getElementById("rollPlayer1");
const rollPlayer2Button = document.getElementById("rollPlayer2");

let player1Point = 0;
let player2Point = 0;
let randomNumberPlayer1;
let randomNumberPlayer2;

let playersTurn = 'player1';


function playerOne() {

    if (playersTurn === 'player1'){
        randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1
    const randomDice1 = "dice" + randomNumberPlayer1 + ".png";
    const images = document.querySelectorAll("img")[0]
    images.setAttribute("src", randomDice1)
    whoWon().then(()=>{
        playersTurn = 'player2';
    })
    } else {

        alert('It is player 2 turn ')
    }
}

function playerTwo() {
    if(playersTurn === 'player2'){
        randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1
    const randomDice2 = "dice" + randomNumberPlayer2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDice2);
    whoWon().then(() =>{
   playersTurn = 'player1'
    })

    }else{
        alert('It is player 1 turn ')
    }

}

async function whoWon(){
    if(randomNumberPlayer1 > randomNumberPlayer2){
  scorePlayer1.innerText  = player1Point++
    }
    else if(randomNumberPlayer1 < randomNumberPlayer2){
    scorePlayer2.innerText = player2Point++
    }
}
rollPlayer1Button.addEventListener("click", playerOne)
rollPlayer2Button.addEventListener("click", playerTwo)


