
const roundWinner = document.querySelector('#roundWinner');
const choicesBtns = document.querySelectorAll(".choice");
const playerScoreDiv = document.querySelector(".player.score");
const computerScoreDiv = document.querySelector(".computer.score");


let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const creatListResult = function(a){
    const node = document.createElement("li");
    const textNode = document.createTextNode(a);
    node.appendChild(textNode);
    document.getElementById("resultsList").appendChild(node);
}


function getComputerChoice() {
    let choices = ['Rock' , 'Paper', 'Scissors' ];
    let result = (choices[Math.floor(Math.random() * choices.length)]).toLowerCase();
    return result;
}

function singleRound(player, computer){
    roundCounter++;
    let playerWin = roundCounter+': You win this round! :) '+'You picked '+player+', Computer picked '+computer ;
    let computerWin = roundCounter+' Computer wins this round :( '+'You picked '+player+', Computer picked '+computer ;
    let draw = roundCounter+' Tie! '+'You picked '+player+', Computer picked '+computer+' also!';
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
    }
    //Player picks paper------------------------------
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
        if(roundCounter === 5){
            roundCounter = 5 - 5;
            console.log('test');
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

