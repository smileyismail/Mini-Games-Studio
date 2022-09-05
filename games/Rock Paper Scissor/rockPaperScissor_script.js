let elements = document.querySelectorAll(".element");
let userResult = document.getElementById("yourChoices");
let computerResult = document.getElementById("computerChoices");
let yourScore = document.getElementById("yourScore");
let computerScore = document.getElementById("computerScore");

// init variables
let userChoice;
let computerChoice;
let scoreUser = 0;
let scoreComputer = 0;

const possibleChoices = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
  {
    name: "fire",
    emoji: "🔥",
    beats: "all",
  },
];

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    userChoice = e.target.id;
    switch (userChoice) {
      case "rock":
        userResult.innerHTML = possibleChoices[0].emoji;
        userChoice = "rock";

        break;
      case "paper":
        userResult.innerHTML = possibleChoices[1].emoji;
        userChoice = "paper";
        break;
      case "scissor":
        userResult.innerHTML = possibleChoices[2].emoji;
        userChoice = "scissor";
        break;
      case "fire":
        userResult.innerHTML = possibleChoices[3].emoji;
        userChoice = "fire";
        break;
    }
    computerChoiceGenerator();
    getResult();
  });
});

function computerChoiceGenerator() {
  let randomChoice = Math.floor(Math.random() * possibleChoices.length);
  switch (randomChoice) {
    case 0:
      computerResult.innerHTML = possibleChoices[0].emoji;
      computerChoice = "rock";
      break;
    case 1:
      computerResult.innerHTML = possibleChoices[1].emoji;
      computerChoice = "paper";
      break;
    case 2:
      computerResult.innerHTML = possibleChoices[2].emoji;
      computerChoice = "scissor";
      break;
    case 3:
      computerResult.innerHTML = possibleChoices[3].emoji;
      computerChoice = "fire";
      break;
  }
}

function getResult() {
  if (computerChoice === userChoice) {
    userResult.classList.remove("winner");
    computerResult.classList.remove("winner");
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "fire" && userChoice === "rock") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "fire" && userChoice === "paper") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "fire" && userChoice === "scissor") {
    userResult.classList.remove("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
  }
  if (computerChoice === "fire" && userChoice === "fire") {
    userResult.classList.add("winner");
    computerResult.classList.add("winner");
    scoreComputer++;
    computerScore.innerHTML = `Score: ${scoreComputer}`;
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "rock" && userChoice === "fire") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "paper" && userChoice === "fire") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
  if (computerChoice === "scissor" && userChoice === "fire") {
    userResult.classList.add("winner");
    computerResult.classList.remove("winner");
    scoreUser++;
    yourScore.innerHTML = `Score: ${scoreUser}`;
  }
}

// selectionButtons.forEach((selectionButton) => {
//   selectionButton.addEventListener("click", (e) => {
//     const selectionName = selectionButton.dataset.selection;
//     const selection = SELECTIONS.find(
//       (selection) => selection.name === selectionName
//     );
//     makeSelection(selection);
//   });
// });

// function makeSelection(selection) {
//   const computerSelection = randomSelection();
//   const yourWinner = isWinner(selection, computerSelection);
//   const computerWinner = isWinner(computerSelection, selection);

//   addSelectionResult(computerSelection, computerWinner);
//   addSelectionResult(selection, yourWinner);

//   if (yourWinner) incrementScore(yourScoreSpan);
//   if (computerWinner) incrementScore(computerScoreSpan);
// }

// function incrementScore(scoreSpan) {
//   scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
// }

// function addSelectionResult(selection, winner) {
//   const div = document.createElement("div");
//   div.innerText = selection.emoji;
//   div.classList.add("result-selection");
//   if (winner) div.classList.add("winner");
//   finalColumn.after(div);
// }

// function isWinner(selection, opponentSelection) {
//   return selection.beats === opponentSelection.name;
// }

// function randomSelection() {
//   const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
//   return SELECTIONS[randomIndex];
// }
