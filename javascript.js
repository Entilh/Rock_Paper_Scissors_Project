console.log("Rock Paper Scissors");

function getComputerChoice() {
  let randomNumber = Math.random();
  /* console.log(randomNumber); */
  if (randomNumber <= 1 / 3) {
    return "Rock";
  } else if ((1 / 3 < randomNumber) & (randomNumber <= 2 / 3)) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  if (userChoice == 1) {
    return "Rock";
  } else if (userChoice == 2) {
    return "Paper";
  } else if (userChoice == 3) {
    return "Scissors";
  }
}

/* console.log("Computer Choice: " + getComputerChoice()); */

const userChoice = prompt("Chose: 1=Rock, 2=Paper, 3=Scissors");

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log("l'utilisateur a choisit: " + humanChoice);
