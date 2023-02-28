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

const DOM = {
  rockButton: document.querySelector(".rockButton"),
  paperButton: document.querySelector(".paperButton"),
  scissorButton: document.querySelector(".scissorButton"),
  opponent: document.querySelector(".opponent"),
  choiceButton: document.querySelector(".choice"),
  winner: document.querySelector(".winner"),
};

DOM.choiceButton.addEventListener(
  "click",
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  },
  console.log(getRandomInt(3))
);
