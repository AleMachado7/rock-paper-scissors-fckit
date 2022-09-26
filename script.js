let playerPoints = 0;
let computerPoints = 0;
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let buttons = document.querySelectorAll("input");
let roundResult = document.getElementById("round-result");
let finalResult = document.getElementById("final-result");



//Get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

// Play a single round
function playRound(playerSelection) {
    if (playerPoints >= 5 || computerPoints >= 5) {
        restartGame()
        return
    }
    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        return `It's a tie. Your choice was ${playerSelection.toUpperCase()} and the computer choice was ${computerSelection.toUpperCase()} too.`
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerPoints++
            playerScore.textContent = playerPoints
            return `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`
    } else  if (playerSelection === "Fuck It") {
        playerPoints++;
        playerScore.textContent = playerPoints;
        return `Player just chose to F#%k the computer. You won!`
    }    
    computerPoints++;
    computerScore.textContent = computerPoints;
    return `You lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`
}   

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        roundResult.textContent = playRound(button.value);
        if (playerPoints >= 5) {
            finalResult.textContent = "The player has won! Game Over!";
        } else if (computerPoints >= 5) {
            finalResult.textContent = "The computer has won! Game Over!";
        }
    })
})

function restartGame() {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundResult.textContent = null;
    finalResult.textContent = null;
}