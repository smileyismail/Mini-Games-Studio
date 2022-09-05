//grabbing elements
let board = document.getElementById("board");
let scoreEl = document.getElementById("score");
let moveButtons = document.querySelectorAll(".moveBtn");

//movement
let movement = { x: 0, y: 0 };

//audio
let eatSound = new Audio("assets/audio/eatSound.mp3");

//variables
let lastRenderTime = 0;
let score = 0;
let rows = 25;
let columns = 25;

// food
let food = { x: 11, y: 13 };
food.x = Math.floor(Math.random() * (25 - 1 + 1) + 1);
food.y = Math.floor(Math.random() * (25 - 1 + 1) + 1);

//Snake
let speed = 10;
let body = [{ x: 10, y: 10 }];

//functions

function main(currentTime) {
  window.requestAnimationFrame(main);
  let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / speed) {
    return;
  }
  lastRenderTime = currentTime;
  update();
  draw();
}

//gameOver

function gameOver(snake) {
  // console.log(snake);
  // eat your self
  for (i = 1; i < body.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      return true;
    }
  }

  //hit wall
  if (
    snake[0].x >= columns + 1 ||
    snake[0].x < 0 ||
    snake[0].y >= rows + 1 ||
    snake[0].y < 0
  ) {
    return true;
  }
  // return false;
}

function update() {
  //game Over
  if (gameOver(body)) {
    movement = { x: 0, y: 0 };
    alert("game over, Press any ok to play again");
    // main();
    body = [{ x: 15, y: 15 }];
    score = 0;
  }

  // eaten food
  if (body[0].x === food.x && body[0].y === food.y) {
    eatSound.play();
    score++;
    scoreEl.innerHTML = score;
    console.log(score);
    body.push({ x: body[0].x + movement.x, y: body[0].y + movement.y });
    food.x = Math.floor(Math.random() * (25 - 1 + 1) + 1);
    food.y = Math.floor(Math.random() * (25 - 1 + 1) + 1);
  }

  //snake movement
  for (i = body.length - 2; i >= 0; i--) {
    body[i + 1] = { ...body[i] };
  }

  body[0].x += movement.x;
  body[0].y += movement.y;
}

function draw() {
  // draw snake
  board.innerHTML = "";
  body.forEach((e, index) => {
    let bodyPart = document.createElement("div");
    bodyPart.style.gridRowStart = e.y;
    bodyPart.style.gridColumnStart = e.x;
    if (index === 0) {
      bodyPart.classList.add("snakeHead");
    } else {
      bodyPart.classList.add("snakeBody");
    }
    board.appendChild(bodyPart);
  });

  // draw food
  let foodPart = document.createElement("div");
  foodPart.style.gridRowStart = food.y;
  foodPart.style.gridColumnStart = food.x;
  foodPart.classList.add("food");
  board.appendChild(foodPart);
}

//initial main call
window.requestAnimationFrame(main);

//arrow events

document.body.addEventListener("keydown", (e) => {
  // movement = { x: 0, y: 0 };

  if (e.key == "ArrowUp" && movement.y != 1) {
    movement.x = 0;
    movement.y = -1;
  } else if (e.key == "ArrowDown" && movement.y != -1) {
    movement.x = 0;
    movement.y = 1;
  } else if (e.key == "ArrowLeft" && movement.x != 1) {
    movement.x = -1;
    movement.y = 0;
  } else if (e.key == "ArrowRight" && movement.x != -1) {
    movement.x = 1;
    movement.y = 0;
  }
});

moveButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("up") && movement.y != 1) {
      movement.x = 0;
      movement.y = -1;
    }

    if (e.target.classList.contains("down") && movement.y != -1) {
      movement.x = 0;
      movement.y = 1;
    }

    if (e.target.classList.contains("left") && movement.x != 1) {
      movement.x = -1;
      movement.y = 0;
    }

    if (e.target.classList.contains("right") && movement.x != -1) {
      movement.x = 1;
      movement.y = 0;
    }
  });
});

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// //init variables

// let blockSize = 25;
// let rows = 20;
// let columns = 20;

// // //background
// // let bgImage = new Image()
// // bgImage.src = "";

// //food positions
// let food = new Image();
// food.src = "assets/apple.png";
// let foodX;
// let foodY;
// // console.log(foodX, foodY);

// //snake Positions
// let snakeX = blockSize * 10;
// let snakeY = blockSize * 10;
// // console.log(snakeX, snakeY);

// //snake Movement
// let moveX = 0;
// let moveY = 0;

// //snakeBody
// let snakeBody = [];

// //gameOver
// let gameOver = false;

// //main functions

// // function draw() {}

// // function update() {}
// //
// // let game = setInterval(update, 100);

// function main() {
//   // window.requestAnimationFrame(main);
//   canvas.height = rows * blockSize;
//   canvas.width = columns * blockSize;

//   placeRandomFood();
//   document.body.addEventListener("keyup", moveSnake);
//   update();
//   setInterval(update, 1000 / 10);
//   //   draw();
// }

// //functions
// function placeRandomFood() {
//   foodX = Math.floor(Math.random() * columns) * blockSize;
//   foodY = Math.floor(Math.random() * rows) * blockSize;
// }

// function moveSnake(e) {
//   //   console.log(e.key);
//   if (e.key == "ArrowUp" && moveY != 1) {
//     moveX = 0;
//     moveY = -1;
//   } else if (e.key == "ArrowDown" && moveY != -1) {
//     moveX = 0;
//     moveY = 1;
//   } else if (e.key == "ArrowLeft" && moveX != 1) {
//     moveX = -1;
//     moveY = 0;
//   } else if (e.key == "ArrowRight" && moveX != -1) {
//     moveX = 1;
//     moveY = 0;
//   }
// }

// function update() {
//   if (gameOver) {
//     return;
//   }
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = "grey";
//   ctx.fillRect(foodX, foodY, blockSize, blockSize);

//   if (snakeX == foodX && snakeY == foodY) {
//     // console.log("touched");
//     snakeBody.push([foodX, foodY]);
//     placeRandomFood();
//     // console.log(snakeBody);
//   }

//   for (i = snakeBody.length - 1; i > 0; i--) {
//     snakeBody[i] = snakeBody[i - 1];
//   }
//   if (snakeBody.length) {
//     snakeBody[0] = [snakeX, snakeY];
//   }
//   // ctx.fillStyle = "green";
//   snakeX += moveX * blockSize;
//   snakeY += moveY * blockSize;
//   ctx.fillRect(snakeX, snakeY, blockSize, blockSize);
//   for (i = 0; i < snakeBody.length; i++) {
//     ctx.fillStyle = (i = 0) ? "green" : "red";
//     ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
//   }

//   //gameOver Conditions
//   if (
//     snakeX < 0 ||
//     snakeX > columns * blockSize ||
//     snakeY < 0 ||
//     snakeY > rows * blockSize
//   ) {
//     gameOver = true;
//     alert("gameOver");
//   }

//   for (i = 0; i < snakeBody.length; i++) {
//     if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
//       gameOver = true;
//       alert("game over");
//     }
//   }
// }

// //main function call
// // window.requestAnimationFrame(main);

// main();
