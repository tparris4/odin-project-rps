function computerPlay(){
    let cpuMove = Math.floor(Math.random() * 3) + 1;
    console.log(cpuMove);
    switch (cpuMove) {
    case 1:
        return result.textContent = 'Rock';
    case 2:
        return 'Scissors';
    case 3:
        return 'Paper';
    }
    
}
const result = document.querySelector('.result');
const randomize = document.querySelector('.randomize');
randomize.addEventListener('click', computerPlay);