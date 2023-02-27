import { DOM } from "./DOM";
import { choices } from "./choices";

DOM();
choices();

DOM.choiceButton.addEventListener(
  "click",
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  },
  console.log(getRandomInt(3))
);
