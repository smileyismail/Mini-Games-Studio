let settings_btn = document.getElementById("settings_btn");
let header = document.getElementById("header");
let word = document.getElementById("word");
let text = document.getElementById("text");
let scorePoints = document.getElementById("score");
let timeCountDown = document.getElementById("time");
let gameOverContainer = document.getElementById("game_end_container");
let settingForm = document.getElementById("settings_form");
let selectDifficulty = document.getElementById("difficulty");

//Settings button
settings_btn.addEventListener("click", () => {
  console.log("object");
  header.classList.toggle("show");
});

// Random words
// let words = [
//   "monitor",
//   "program",
//   "application",
//   "keyboard",
//   "javascript",
//   "gaming",
//   "network",
// ];

let words;

//get words from api
async function getWords() {
  let response = await fetch("https://random-words-api.vercel.app/word");
  let data = await response.json();
  words = await data[0].word;
  words = words.toLowerCase();
  function addWordToDOM() {
    randomWord = words;
    word.innerHTML = randomWord;
  }
  addWordToDOM();
}
getWords();

// init RandomWord
let randomWord;

// init score
let score = 0;

// init time
let time = 10;

//set difficulty

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set selected difficulty value
selectDifficulty.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//start countdown
let timeInterval = setInterval(updateTime, 1000);

// generate random word from array
// function getRandomWord() {
//   return words[Math.floor(Math.random() * words.length)];
// }

// add generated word to DOM
// function addWordToDOM() {
//   randomWord = words;
//   word.innerHTML = randomWord;
// }

// addWordToDOM();

// Updating score

function updateScore() {
  score++;
  scorePoints.innerHTML = score;
}

function updateTime() {
  time--;
  timeCountDown.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);

    //end game
    gameOver();
  }
}

//game over dialogue show
function gameOver() {
  gameOverContainer.innerHTML = `
  <h1>Time Over</h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Play again</button>`;
  gameOverContainer.style.display = "flex";
}

//Input event listener

text.addEventListener("input", (e) => {
  let insertedText = e.target.value.toLowerCase();

  if (insertedText === randomWord) {
    randomWord = "getting";
    // addWordToDOM();
    getWords();
    updateScore();

    e.target.value = "";

    switch (difficulty) {
      case "easy":
        time += 10;
        break;
      case "medium":
        time += 8;
        break;
      case "hard":
        time += 5;
        break;
      default:
        time += 10;
    }

    // updateTime();
  }
});

//setting select

settingForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
