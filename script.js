function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.trim().toLowerCase();
    if (playerChoice === computerSelection) {
        return "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beats rock";
        } else {
            playerScore++;
            return "You win! Rock beats scissors";
        }
    } else if (playerChoice === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper";
        } else {
            playerScore++;
            return "You win! Paper beats rock";
        }
    } else if (playerChoice === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats scissors";
        } else {
            playerScore++;
            return "You win! Scissors beats paper";
        }
    }
}


let buttons = document.querySelectorAll("button");
let gameInProgress = true;

function gameSet() {
    playerScore = 0, computerScore = 0;
    setScore("Let's play!", "", "");

    function setScore(result, playerSelection, computerSelection) {
        let player_choice = document.querySelector(".player-choice");
        let computer_choice = document.querySelector(".computer-choice");

        player_choice.textContent = `Your choice: ${playerSelection}.`;
        computer_choice.textContent = `Computer choice: ${computerSelection}.`;

        let resultDiv = document.querySelector(".message");
        resultDiv.textContent = result;

        let player_score = document.querySelector(".player-score");
        let computer_score = document.querySelector(".computer-score");
        player_score.textContent = `Your score: ${playerScore}`;
        computer_score.textContent = `Computer score: ${computerScore}`;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!gameInProgress) {
                return;
            }

            let computerSelection = getComputerChoice();
            let playerSelection = button.className;
            let result = playRound(playerSelection, computerSelection);

            setScore(result, playerSelection, computerSelection);
            checkOutcome();
        });
    });
}

gameSet();


function checkOutcome() {
    if (playerScore === 5 || computerScore === 5) {
        let player_choice = document.querySelector(".player-choice");
        let computer_choice = document.querySelector(".computer-choice");
        player_choice.textContent = "";
        computer_choice.textContent = "";

        let resultDiv = document.querySelector(".message");

        if (playerScore > computerScore) {
            resultDiv.textContent = "Player wins game!";
        } else {
            resultDiv.textContent = "Computer wins game!";
        }
        gameInProgress = false;
    }
}
