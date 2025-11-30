function getComputerChoice(){
    const choices = ['piedra', 'papel', 'tijera'];
    const index = Math.floor(Math.random() * choices.length)
    return choices[index];
}


function getUserChoice(){
    return prompt("Elige piedra, papel o tijera");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        return 'Empate';
    }else if(humanChoice === 'piedra' && computerChoice === 'tijera'){
        humanScore++;
        return 'Ganaste';
    }else if(humanChoice === 'papel' && computerChoice === 'piedra'){
        humanScore++;
        return 'Ganaste';
    }else if(humanChoice === 'tijera' && computerChoice === 'papel'){
        humanScore++;
        return 'Ganaste';
    }else{
        computerScore++;
        return 'Perdiste';
    }
}



function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getUserChoice();
        const computerSelection = getComputerChoice();

        console.log("La computadora eligio: " + computerSelection);
        console.log("El usuario eligio: " + humanSelection);
        console.log(playRound(humanSelection, computerSelection));

        console.log("La puntuacion de la computadora es: " + computerScore + " y la puntuacion del usuario es: " + humanScore);
    }
}

playGame();