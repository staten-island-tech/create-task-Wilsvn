
const choices = [
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

let playerScore = 0;
let computerScore = 0;


const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");
=======
let playerScore = 0;
let computerScore = 0;

const playerScorePlace = document.getElementById("player-score");
const computerScorePlace = document.getElementById("computer-score");
const result = document.getElementById("result");
>>>>>>> ff2108970c4e63e81d9495950399b085c3a3d9d4
const resetButton = document.getElementById("reset");
const choice = document.querySelector(".choice");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", function getPlayerChoice() {
  let playerChoice = "rock";
  console.log(playerChoice);
});

paperButton.addEventListener("click", function getPlayerChoice() {
  let playerChoice = "paper";
  console.log(playerChoice);
});

scissorButton.addEventListener("click", function getPlayerChoice() {
  let playerChoice = "scissors";
  console.log(playerChoice);
});

choice.addEventListener("click", function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];
  console.log("lcick");
});

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    ((playerChoice === "rock") & (computerChoice === "scissors"),
    (playerChoice === "paper") & (computerChoice === "rock"),
    (playerChoice === "scissors") & (computerChoice === "paper"))
  ) {
    playerScore + 1;
    playerScorePlace.innerHTML = (playerScore, choices.icon);
    return "Wilson Wins";
  } else {
    computerScore + 1;
    computerScorePlace.innerHTML = (computerScore, choices.icon);
    return "Opponent Wins";
  }
}

