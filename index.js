/* const choices = [
  {
    name: "rock",
    icon: "✊",
    beats: "scissor",
  },
  {
    name: "scissor",
    icon: "✌",
    beats: "paper",
  },
  {
    name: "paper",
    icon: "✋",
    beats: "rock",
  },
];
console.log("yes")

const DOM = {
  rockButton: document.querySelector(".rockButton"),
  paperButton: document.querySelector(".paperButton"),
  scissorButton: document.querySelector(".scissorButton"),
  opponent: document.querySelector(".opponent"),
  choiceButton: document.querySelector(".choice"),
  winner: document.querySelector(".winner"),
};

DOM.rockButton.addEventListener("click", function (clear) {
  console.log("yes");
}); */

// Game variables
let playerScore = 0;
let computerScore = 0;

// Get HTML elements
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset");

// Function to get computer's choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

// Function to determine the winner
function getWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return "It's a tie!";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		playerScore++;
		playerScoreSpan.innerHTML = playerScore;
		return "You win!";
	} else {
		computerScore++;
		computerScoreSpan.innerHTML = computerScore;
		return "Computer wins!";
	}
}

// Function to display the result
function showResult(result) {
	resultDiv.innerHTML = result}
