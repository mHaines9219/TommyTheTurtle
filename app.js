//DOM SELECTORS
let isGameOver = false;
let lives = 3;
let domLives = [];
const canvas = document.querySelector("#canvas");
const canvasContainer = document.querySelector("#canvas-container");
const livesContainer = document.querySelector("#lives-container");
const ctx = canvas.getContext("2d");
const timer = document.querySelector("#timer");
const img = new Image();
img.src = "beach.png";
const crabImg = new Image();
crabImg.src = "crabimg.png";
const landingPage = document.createElement("div");
landingPage.id = "landing";
landingPage.innerHTML = "<h1>Welcome to Tommy The Turtle Game!</h1>";
const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.textContent = "Help Tommy Escape The Beach!";
const replayButton = document.querySelector("#replay-button");
let newLife;

// Append the landing page and start button to the body
document.body.appendChild(landingPage);
landingPage.appendChild(startButton);

canvas.setAttribute("height", getComputedStyle(canvas).height);
canvas.setAttribute("width", getComputedStyle(canvas).width);

class Crawler {
  constructor(x, y, width, height, color, image, alive) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.image = image;
    this.alive = null;
  }
  render() {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const tommyTurtle = new Crawler(425, 800, 40, 40, "green", "", false);
const crankyCrabs = [
  new Crawler(425, 700, 40, 40, "red", crabImg),
  new Crawler(25, 700, 40, 40, "red", crabImg),
  new Crawler(225, 700, 40, 40, "red", crabImg),
  new Crawler(625, 700, 40, 40, "red", crabImg),
];

const bullyBirds = [
  new Crawler(425, 500, 40, 40, "blue"),
  new Crawler(25, 500, 40, 40, "blue"),
  new Crawler(225, 500, 40, 40, "blue"),
  new Crawler(625, 500, 40, 40, "blue"),
];

const sillySeals = [
  new Crawler(701, 300, 70, 40, "olive"),

  // new Crawler(601, 300, 40, 40, "olive"),
  new Crawler(501, 300, 70, 40, "olive"),
  // new Crawler(401, 300, 40, 40, "olive"),
  new Crawler(301, 300, 70, 40, "olive"),
  // new Crawler(1, 300, 40, 40, "olive"),
  new Crawler(101, 300, 70, 40, "olive"),
  // new Crawler(201, 300, 40, 40, "olive"),
  //---
  new Crawler(701, 250, 70, 40, "pink"),

  // new Crawler(601, 250, 80, 40, "pink"),
  new Crawler(501, 250, 70, 40, "pink"),
  // new Crawler(401, 250, 80, 40, "pink"),
  new Crawler(301, 250, 70, 40, "pink"),
  new Crawler(1, 250, 70, 40, "pink"),
];

const gameInterval = setInterval(gameLoop, 100);

function movementHandler(e) {
  if (tommyTurtle.alive) {
    const speed = 50;
    switch (e.key) {
      case "w":
        tommyTurtle.y -= speed;
        break;
      case "s":
        tommyTurtle.y += speed;
        break;
      case "a":
        tommyTurtle.x -= speed;
        break;
      case "d":
        tommyTurtle.x += speed;
        break;
      default:
    }
  } else {
  }
}

document.addEventListener("keydown", function (e) {
  movementHandler(e);
});
startButton.addEventListener("click", function () {
  landingPage.remove();
  tommyTurtle.alive = true;
  for (let i = 0; i < 3; i++) {
    newLife = document.createElement("div");

    newLife.classList.add("life");
    newLife.textContent = "X";
    domLives.push(newLife);
    livesContainer.appendChild(newLife);
  }
});

function renderObjects() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background image
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  tommyTurtle.render();
  for (let i = 0; i < crankyCrabs.length; i++) {
    crankyCrabs[i].render();
  }
  for (let i = 0; i < bullyBirds.length; i++) {
    bullyBirds[i].render();
  }
  for (let i = 0; i < sillySeals.length; i++) {
    sillySeals[i].render();
  }
  // for (let i = 0; i < roughRocks.length; i++) {
  // roughRocks[i].render();
}
// }

function enemyMovement() {
  let speed = 15;
  for (let i = 0; i < crankyCrabs.length; i++) {
    crankyCrabs[i].x -= speed;
    if (crankyCrabs[i].x + crankyCrabs[i].width < 0) {
      crankyCrabs[i].x = canvas.width;
    }
  }
  speed = 25;
  for (let i = 0; i < bullyBirds.length; i++) {
    bullyBirds[i].x += speed;
    if (bullyBirds[i].x + bullyBirds[i].width > canvas.width) {
      bullyBirds[i].x = 0;
    }
  }
  speed = 10;
  for (let i = 0; i < sillySeals.length; i++) {
    if (i <= 3) {
      sillySeals[i].x += speed;
      if (sillySeals[i].x + sillySeals[i].width > canvas.width) {
        sillySeals[i].x = 0;
      }
    }
    if (i > 3) {
      sillySeals[i].x -= speed * 1.5;
    }
    if (sillySeals[i].x + sillySeals[i].width < 0) {
      sillySeals[i].x = canvas.width;
    }
  }
}

function detectHit(objectOne, objectTwo) {
  //watched Chris Courses to solidify my collision detection understanding
  if (
    objectOne.x + objectOne.width >= objectTwo.x &&
    objectOne.x <= objectTwo.x + objectTwo.width &&
    objectOne.y + objectOne.height >= objectTwo.y &&
    objectOne.y <= objectTwo.y + objectTwo.height
  ) {
    lives--;
    tommyTurtle.x = 425;
    tommyTurtle.y = 800;
    const removedLife = domLives.pop(); // Remove the last life element from the array
    livesContainer.removeChild(removedLife); // Remove the last life element from the container
    return true;
    return true;
  }
}

function detectEscape() {
  if (tommyTurtle.y < -10) {
    tommyTurtle.alive = false;
    isGameOver = true;
  }
}

// Define the event listener function separately
function replayButtonClickHandler() {
  tommyTurtle.alive = true;
  isGameOver = false;
  replayButton.style.display = "none"; // Remove the replay button when clicked
  tommyTurtle.x = 425;
  tommyTurtle.y = 800;
  lives = 3;
  while (livesContainer.firstChild) {
    livesContainer.removeChild(livesContainer.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    newLife = document.createElement("div");

    newLife.classList.add("life");
    newLife.textContent = "X";
    domLives.push(newLife);
    livesContainer.appendChild(newLife);
  }
}

// Add the event listener
replayButton.addEventListener("click", replayButtonClickHandler);

// ...

// Later in your code, you can remove the event listener if needed
// replayButton.removeEventListener("click", replayButtonClickHandler);

function gameLoop() {
  if (tommyTurtle.alive) {
    enemyMovement();
    renderObjects();
    for (let i = 0; i < crankyCrabs.length; i++) {
      if (detectHit(tommyTurtle, crankyCrabs[i])) {
        // tommyTurtle.alive = false;
      }
    }
    for (let i = 0; i < bullyBirds.length; i++) {
      if (detectHit(tommyTurtle, bullyBirds[i])) {
        // tommyTurtle.alive = false;
        // tommyTurtle.alive = false;
        // isGameOver = true;
      }
    }
    for (let i = 0; i < sillySeals.length; i++) {
      if (detectHit(tommyTurtle, sillySeals[i])) {
        // tommyTurtle.alive = false;
        // tommyTurtle.alive = false;
        // isGameOver = true;
      }
    }
    if (lives === 0) {
      tommyTurtle.alive = false;
      isGameOver = true;
    }
    detectEscape();
  } else if (isGameOver === true) {
    replayButton.style.display = "block";
  }
}
img.onload = function () {
  // Once the image is loaded, draw it on the canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
