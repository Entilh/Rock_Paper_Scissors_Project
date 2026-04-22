console.log("Rock Paper Scissors");

const input = document.querySelector(".nbrRounds");
const bouton = document.querySelector(".validNbrRounds");
const containerNbrRounds = document.querySelector("#getNbrRounds");

const gameButtons = document.querySelector(".gameButtons");
const buttonRock = document.querySelector(".Rock");
const buttonPaper = document.querySelector(".Paper");
const buttonScissors = document.querySelector(".Scissors");

const NumCurrentRound = document.querySelector("#NumCurrentRound");
const CurrentPlayerScore = document.querySelector("#CurrentPlayerScore");
const CurrentComputerScore = document.querySelector("#CurrentComputerScore");
const PlayerChoice = document.querySelector("#PlayerChoice");
const ComputerChoice = document.querySelector("#ComputerChoice");

const PlayGround = document.querySelector("#PlayGround");
const BeforeScore = document.querySelector(".beforeScore");

const FinalResult = document.querySelector(".FinalResult");

let currentRound = 0;
let nbrRoundsAsked = 0;

const beginTheGameText = document.createElement("div");
beginTheGameText.classList.add("beginTheGameText");
beginTheGameText.textContent = "Veuillez appuyer sur le bouton pour commencer";
const beginTheGameButton = document.createElement("button");
beginTheGameButton.classList.add("beginTheGameButton");
beginTheGameButton.textContent = "Commencer";

bouton.addEventListener("click", () => {
  nbrRoundsAsked = Number(input.value);
  const containerResultNbrRounds = document.createElement("div");
  containerResultNbrRounds.classList.add("resultNbrRounds");
  containerResultNbrRounds.textContent = `Le nombre de rounds choisi est ${nbrRoundsAsked}`;
  containerNbrRounds.appendChild(containerResultNbrRounds);

  const beginTheGame = document.createElement("div");
  beginTheGame.classList.add("beginTheGame");
  BeforeScore.appendChild(beginTheGame);
  beginTheGame.appendChild(beginTheGameText);
  beginTheGame.appendChild(beginTheGameButton);
  NumCurrentRound.textContent = "0";
  CurrentPlayerScore.textContent = "0";
  CurrentComputerScore.textContent = "0";
});

beginTheGameButton.addEventListener("click", () => {
  currentRound = 0;
});

buttonRock.addEventListener("click", () => {
  let playerChoice = "Rock";
  PlayerChoice.textContent = playerChoice;
  let computerChoice = getComputerChoice();
  PlayRound(playerChoice, computerChoice);
  currentRound++;
  if (currentRound == nbrRoundsAsked) {
    printFinalResult();
  }
});

buttonPaper.addEventListener("click", () => {
  let playerChoice = "Paper";
  PlayerChoice.textContent = playerChoice;
  let computerChoice = getComputerChoice();
  PlayRound(playerChoice, computerChoice);
  currentRound++;
  if (currentRound == nbrRoundsAsked) {
    printFinalResult();
  }
});

buttonScissors.addEventListener("click", () => {
  let playerChoice = "Scissors";
  PlayerChoice.textContent = playerChoice;
  let computerChoice = getComputerChoice();
  PlayRound(playerChoice, computerChoice);
  currentRound++;
  if (currentRound == nbrRoundsAsked) {
    printFinalResult();
  }
});

function printFinalResult() {
  const finalResultText = document.createElement("div");
  finalResultText.classList.add("FinalResultResult");
  finalResultText.textContent = getResult();
  FinalResult.appendChild(finalResultText);
}

function getResult() {
  let finalPlayerResult = Number(CurrentPlayerScore.textContent);
  let finalComputerResult = Number(CurrentComputerScore.textContent);
  if (finalPlayerResult > finalComputerResult) {
    return `Vous avez gagne ${finalPlayerResult} a ${finalComputerResult}`;
  } else if (finalPlayerResult < finalComputerResult) {
    return `Vous avez perdu ${finalComputerResult} a ${finalPlayerResult}`;
  } else if (finalPlayerResult == finalComputerResult) {
    return `Egalite a ${finalComputerResult}`;
  }
}

function incNumCurrentRound() {
  let formerRoundNumber = Number(NumCurrentRound.textContent);
  NumCurrentRound.textContent = formerRoundNumber + 1;
}

function incCurrentPlayerScore() {
  CurrentPlayerScore.textContent = Number(CurrentPlayerScore.textContent) + 1;
}

function incCurrentComputerScore() {
  CurrentComputerScore.textContent =
    Number(CurrentComputerScore.textContent) + 1;
}

function getComputerChoice() {
  let randomNumber = Math.random();
  let ComputerChoiceCalculated = "";
  if (randomNumber <= 1 / 3) {
    ComputerChoiceCalculated = "Rock";
  } else if ((1 / 3 < randomNumber) & (randomNumber <= 2 / 3)) {
    ComputerChoiceCalculated = "Paper";
  } else {
    ComputerChoiceCalculated = "Scissors";
  }
  ComputerChoice.textContent = ComputerChoiceCalculated;
  return ComputerChoiceCalculated;
}

/* console.log("Computer Choice: " + getComputerChoice()); */
function PlayRound(humanSelection, computerSelection) {
  if (humanSelection == "Rock") {
    if (computerSelection == "Rock") {
      incCurrentComputerScore();
      incCurrentPlayerScore();
    } else if (computerSelection == "Paper") {
      incCurrentComputerScore();
    } else if (computerSelection == "Scissors") {
      incCurrentPlayerScore();
    }
  } else if (humanSelection == "Paper") {
    if (computerSelection == "Paper") {
      incCurrentComputerScore();
      incCurrentPlayerScore();
    } else if (computerSelection == "Scissors") {
      incCurrentComputerScore();
    } else if (computerSelection == "Rock") {
      incCurrentPlayerScore();
    }
  } else if (humanSelection == "Scissors") {
    if (computerSelection == "Scissors") {
      incCurrentComputerScore();
      incCurrentPlayerScore();
    } else if (computerSelection == "Rock") {
      incCurrentComputerScore();
    } else if (computerSelection == "Paper") {
      incCurrentPlayerScore();
    }
  }
}
