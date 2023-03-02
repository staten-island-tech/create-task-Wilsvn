let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    ((playerChoice === "rock") & (computerChoice === "scissors"),
    (playerChoice === "paper") & (computerChoice === "rock"),
    (playerChoice === "scissors") & (computerChoice === "paper"))
  ) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    return "You win!";
  } else {
    computerScore + 1;
    computerScoreSpan.innerHTML = computerScore;
    return "Computer wins!";
  }
}

function showResult(result) {
  result.innerHTML = result;
}
