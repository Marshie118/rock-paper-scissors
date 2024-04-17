const choicesBtns = document.querySelectorAll(".choice");

choicesBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playGame(e.target.textContent.toLowerCase(), getComputerChoice());
    })

});


function getComputerChoice() {
        let choices = ['Rock' , 'Paper', 'Scissors' ];
        let result = (choices[Math.floor(Math.random() * choices.length)]).toLowerCase();
        return result;
    }
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function singleRound(player, computer){
    if(roundCounter === 6){
    }
    else if(player === computer){
        console.log('Round',roundCounter);
        console.log('You picked',player);
        console.log('Computer picks',computer);
        return draw;
        
    }
    //Player has chosen rock --------------------------
    else if(player === 'rock'){
        if(computer === 'paper'){
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return computerWin;
            
        }
        else {
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return playerWin
            
        }
    }
    //Player picks paper------------------------------
    else if(player === 'paper'){
        if(computer === 'rock'){
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return playerWin;
            
        }
        else{
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return computerWin
            
        }
    }
    //Player picks scissors------------------------------
    else if(player === 'scissors'){
        if(computer === 'rock'){
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return computerWin;
            
        }
        else{
            console.log('Round',roundCounter);
            console.log('You picked',player);
            console.log('Computer picks',computer);
            return playerWin;
            
        }
    }
    else {
        console.log('Round',roundCounter);
        console.log(player,na);
        return na;
    }
}

function playGame(a,b){
    roundCounter ++;
    let roundResult = singleRound(a,b);
    if(roundResult === draw && roundCounter < 6){
        console.log('It is a draw');
    }
    else if (roundResult === playerWin && roundCounter < 6){
        playerScore ++;
        console.log('you win this round');
    }
    else if(roundResult === computerWin && roundCounter < 6){
        computerScore ++;
        console.log('computer wins this round');
    }
    else if(roundResult === na){
        console.log('Please type rock, paper or scissors');
    }
    else if(playerScore > computerScore && roundCounter === 6){
        console.log('final results');
        console.log('Your Score', playerScore);
        console.log('Computer score', computerScore);
        console.log('YOU ARE THE WINNER!');
    }
    else if(playerScore < computerScore && roundCounter === 6){
        console.log('final results');
        console.log('Your Score', playerScore);
        console.log('Computer score', computerScore);
        console.log('Computer wins, :( refresh to play again');
    }
    else if(playerScore === computerScore && roundCounter === 6){
        console.log('final results');
        console.log('Your Score', playerScore);
        console.log('Computer score', computerScore);
        console.log('It is a tie, refresh to play again!');
    }
}

