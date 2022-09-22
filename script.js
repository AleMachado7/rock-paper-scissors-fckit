let playerScore = 0
let computerScore = 0

//Get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

// Play a single round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        return `It's a tie. Your choice was ${playerSelection.toUpperCase()} and the computer choice was ${computerSelection.toUpperCase()} too.`
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore++
            document.getElementById("player-score").innerHTML = playerScore
            return `You won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`
    } else  if (playerSelection === "Fuck It") {
        playerScore++
        document.getElementById("player-score").innerHTML = playerScore
        return `Player just chose to F#%k the computer. You won!`
    }    
    computerScore++
    document.getElementById("computer-score").innerHTML = computerScore
    return `You lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`
}   
   

let roundResult = document.getElementById("round-result")
document.getElementById("rock-btn").addEventListener("click", () => roundResult.innerHTML = playRound("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => roundResult.innerHTML = playRound("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => roundResult.innerHTML = playRound("Scissors"));
document.getElementById("fck-btn").addEventListener("click", () => roundResult.innerHTML = playRound("Fuck It"));
