function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.trim().toLowerCase();
    if (playerChoice === computerSelection) {
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper";
        } else {
            return "You win! Paper beats rock";
        }
    } else if (playerChoice === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper";
        }
    }

}

function game() {
    let computerSelection;
    let playerChoice;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerChoice = prompt("Choose Rock, Paper, or Scissors!");
        console.log("The computer chose " + computerSelection);
        console.log(playRound(playerChoice, computerSelection));
    }

}

game();