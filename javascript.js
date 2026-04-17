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
  const userChoice = prompt("Chose: 1=Rock, 2=Paper, 3=Scissors");

  if (userChoice == 1) {
    return "Rock";
  } else if (userChoice == 2) {
    return "Paper";
  } else if (userChoice == 3) {
    return "Scissors";
  }
}

/* console.log("Computer Choice: " + getComputerChoice()); */
function PlayRound(humanSelection, computerSelection) {
  if (humanSelection == "Rock") {
    if (computerSelection == "Rock") {
      console.log("Egalite");
      computerScore += 1;
      humanScore += 1;
    } else if (computerSelection == "Paper") {
      console.log("l'ordi a gagne");
      computerScore += 1;
    } else if (computerSelection == "Scissors") {
      console.log("l'utilisateur a gagne");
      humanScore += 1;
    }
  } else if (humanSelection == "Paper") {
    if (computerSelection == "Paper") {
      console.log("Egalite");
      computerScore += 1;
      humanScore += 1;
    } else if (computerSelection == "Scissors") {
      console.log("l'ordi a gagne");
      computerScore += 1;
    } else if (computerSelection == "Rock") {
      console.log("l'utilisateur a gagne");
      humanScore += 1;
    }
  } else if (humanSelection == "Scissors") {
    if (computerSelection == "Scissors") {
      console.log("Egalite");
      computerScore += 1;
      humanScore += 1;
    } else if (computerSelection == "Rock") {
      console.log("l'ordi a gagne");
      computerScore += 1;
    } else if (computerSelection == "Paper") {
      console.log("l'utilisateur a gagne");
      humanScore += 1;
    }
  }
}

function PlayGame() {
  /* Round 1 */
  let computerSelection1 = getComputerChoice();
  let humanSelection1 = getHumanChoice();
  PlayRound(humanSelection1, computerSelection1);
  /* Round 2 */
  let computerSelection2 = getComputerChoice();
  let humanSelection2 = getHumanChoice();
  PlayRound(humanSelection2, computerSelection2);
  /* Round 3 */
  let computerSelection3 = getComputerChoice();
  let humanSelection3 = getHumanChoice();
  PlayRound(humanSelection3, computerSelection3);
  /* Round 4 */
  let computerSelection4 = getComputerChoice();
  let humanSelection4 = getHumanChoice();
  PlayRound(humanSelection4, computerSelection4);
  /* Round 5 */
  let computerSelection5 = getComputerChoice();
  let humanSelection5 = getHumanChoice();
  PlayRound(humanSelection5, computerSelection5);
}

function AfficherScore(hS, cS) {
  console.log("le score de l'utilisateur est: " + hS);
  console.log("le score de l'ordinateur est: " + cS);
}

function afficherResultatFinal(hS, cS) {
  if (hS > cS) {
    console.log("Tu as gagne! Youpi!");
  } else if (hS < cS) {
    console.log("Tu as perdu! Dommage!");
  } else if (hS == cS) {
    console.log("Egalite Parfaite!");
  }
}

let humanScore = 0;
let computerScore = 0;

AfficherScore(humanScore, computerScore);
PlayGame();
AfficherScore(humanScore, computerScore);
afficherResultatFinal(humanScore, computerScore);
