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

console.log("Computer Choice: " + getComputerChoice());
