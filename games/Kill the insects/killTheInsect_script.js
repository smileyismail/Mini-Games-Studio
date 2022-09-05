let screens = document.querySelectorAll(".screen");
let select_insect_btns = document.querySelectorAll(".select_insect_btn");
let start_btn = document.getElementById("start_btn");
let game_screen = document.getElementById("game_screen");
let timeEl = document.getElementById("time");
let scoreEl = document.getElementById("score");
let messageEl = document.getElementById("message");

// init variables

let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

select_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let img = btn.querySelector("img");
    let src = img.getAttribute("src");
    let alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  let insect = document.createElement("div");
  insect.classList.add("insect");
  let { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`;

  insect.addEventListener("click", catchInsect);

  game_screen.appendChild(insect);
}

function getRandomLocation() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let x = Math.random() * (width - 200) + 100;
  let y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 29) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
