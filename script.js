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
    // let userInput = window.prompt("Let's Play RPS.")
    
    let div = document.getElementById(container);
    div.style.display = div.style.display == "none" ? "block" : "none";
   let playerScore = 0;
   let computerScore = 0;
   let roundCount = 1;

    while (playerScore < 5 || computerScore < 5){
    let cpuInput = computerPlay();

   rock.addEventListener('click', () => playRound('rock', cpuInput));
   paper.addEventListener('click', () => playRound('paper', cpuInput));
   scissors.addEventListener('click', () => playRound('scissors', cpuInput));
    let roundWin = 0;

        console.log(cpuInput);
        // let result2 = playRound(userInput, cpuInput);

        result3.textContent = `Round ${roundCount} :  Computer chose ${cpuInput }`;
        if(){
        playerScore++;
            result3.textContent = 'Player wins';
            
    } else if(){
        computerScore++;
        result3.textContent = 'Computer wins';
    } else {
        result3.textContent = 'Tie';
    }
    roundCount++;
    }
    result3.textContent = 'Winner is ' + playerScore++;
}
        



const container = document.querySelector('#container');
const result = document.querySelector('.result');
const randomize = document.querySelector('.randomize');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttonAll = document.querySelectorAll('#button');

const result3 = document.createElement('div');
result3.classList.add('result3');
container.appendChild(result3);



randomize.addEventListener('click', game);