function computerPlay(){
    let cpuMove = Math.floor(Math.random() * 3) + 1;
    console.log(cpuMove);
    switch (cpuMove) {
    case 1:
        return 'Rock';
    case 2:
        return 'Scissors';
    case 3:
        return 'Paper';
    }
    
}

function playRound(playerSelection, computerSelection){
    const playerInput = playerSelection.toLowerCase();
    switch (playerInput){
    case 'rock':
        if(computerSelection == 'Rock'){
            return 'Tie';
        }
        else if (computerSelection == 'Paper'){
            return 'You Lose';
        }
        else {
            return 'You Win';
        }
        break;
    case 'paper':
        if(computerSelection == 'Rock'){
            return 'You Win!';
        }
        else if (computerSelection == 'Paper'){
            return 'Tie';
        }
        else {
            return 'You Lose';
        }
        break;
    case 'scissors':
        if(computerSelection == 'Rock'){
            return 'You Lose';
        }
        else if (computerSelection == 'Paper'){
            return 'You Win!';
        }
        else {
            return 'Tie';
        }
        break;
    default:
        return 'Invalid Input. Try using Rock, Paper or Scissors';
        break;
    }
}

function game(){
    let userInput = window.prompt("Let's Play RPS.")
    
        
        let cpuInput = computerPlay();
        console.log(cpuInput);
        let result2 = playRound(userInput, cpuInput);
        result.textContent = 'Computer chose ' + cpuInput + ' And the result is ' + result2;
    

}

const result = document.querySelector('.result');
const randomize = document.querySelector('.randomize');
randomize.addEventListener('click', game);