
const roundWinner = document.querySelector('#roundWinner');
const playerChoicesParent = document.querySelector("#playerChoices");
const choicesBtns = document.querySelectorAll(".choice");
const playerScoreDiv = document.querySelector(".player.score");
const computerScoreDiv = document.querySelector(".computer.score");
const roundResults = document.getElementById("resultsList");

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const creatListResult = function(a){
    const node = document.createElement("li");
    const textNode = document.createTextNode(a);
    node.appendChild(textNode);
    roundResults.appendChild(node);
}

const restartGameButton = ()=>{
   choicesBtns.forEach((btn) =>
   btn.remove());
   const newBtn = document.createElement("button");
   const btnText = document.createTextNode("Click me to play again!");
   newBtn.appendChild(btnText);
   playerChoicesParent.appendChild(newBtn);
   newBtn.addEventListener("click",(e)=>
    location.reload()
);
}


function getComputerChoice() {
    let choices = ['Rock' , 'Paper', 'Scissors' ];
    let result = (choices[Math.floor(Math.random() * choices.length)]).toLowerCase();
    return result;
}

function singleRound(player, computer){
    roundCounter++;
    let playerWin = "Round - "+roundCounter+': You win this round! :) '+'You picked '+player+', Computer picked '+computer ;
    let computerWin = "Round - "+roundCounter+' Computer wins this round :( '+'You picked '+player+', Computer picked '+computer ;
    let draw = "Round - "+roundCounter+' Tie! '+'You picked '+player+', Computer picked '+computer+' aswell!';
    if(player === computer) {
        creatListResult(draw);
    }
    //Player has chosen rock --------------------------
    else if(player === 'rock'){
        if(computer === 'paper'){
            computerScore++;
            creatListResult(computerWin);
        } else {
            playerScore++;
            creatListResult(playerWin);
        }
    } //Player picks paper------------------------------
    else if(player === 'paper'){
        if(computer === 'rock'){
            playerScore++;
            creatListResult(playerWin);
        }
        else{
            computerScore++;
            creatListResult(computerWin);       
        }
    }
    //Player picks scissors------------------------------
    else if(player === 'scissors'){
        if(computer === 'rock'){
            computerScore++;
            creatListResult(computerWin);
        }
        else{
            playerScore++;
            creatListResult(playerWin);
        }
    }
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

const playGame = function(){
    choicesBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {  
        singleRound(e.target.textContent.toLowerCase(), getComputerChoice());
        if(computerScore === 5 || playerScore === 5){
            restartGameButton();
            if(playerScore > computerScore){
                roundWinner.textContent = 'You Win!';
            }
            else if(playerScore < computerScore){
                roundWinner.textContent = 'Unlucky computer wins :(';
            }
            else if(playerScore === computerScore){
                roundWinner.textContent = 'It is a tie!';
        }}    
        })
    });   
};

playGame();
