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

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        let playerSelection = button.className;
        let result = playRound(playerSelection, computerSelection);

        let player_choice = document.querySelector(".player-choice");
        player_choice.textContent = `You chose ${playerSelection}.`;
        let computer_choice = document.querySelector(".computer-choice");
        computer_choice.textContent = `The computer chose ${computerSelection}.`;
        let resultDiv = document.querySelector(".message");
        resultDiv.textContent = result;
    });
}
);
