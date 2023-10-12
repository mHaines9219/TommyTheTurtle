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
img.src = "images/beach.png";
const landingPage = document.createElement("div");
landingPage.id = "landing";
landingPage.innerHTML = `<h1>Welcome to Tommy The Turtle Game!</h1>
<p>Tommy just hatched into a cruel, heartless world, and he needs your help!<br><br><br>
 Use the WASD keys to guide Tommy to the safety of open water.<br> <br><br>
 You'll have 3 tries to get past the Cranky Crabs, Bully Birds, and Silly Seals. <br><br><br>
 If you succeed Tommy will go on to live a happy and long life.<br><br><br>
  His fate is in your hands, don't blow it!</p>`;
const winnerPage = document.getElementById("winner-page");
winnerPage.style.display = "none";
const loserPage = document.getElementById("loser-page");
loserPage.style.display = "none";
const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.textContent = "Help Tommy Escape The Beach!";
const replayButton = document.querySelector("#replay-button");
let newLife;
const backgroundAudio = document.getElementById("background-audio");
const sealChompAudio = document.getElementById("seal-chomp");
const birdGulpAudio = document.getElementById("bird-gulp");
const crabChompAudio = document.getElementById("crab-chomp");
const crabImg = new Image();
crabImg.src = "images/crabimg.png";
const birdImg = new Image();
birdImg.src = "images/seagullimg.png";
const sealImgLeft = new Image();
sealImgLeft.src = "images/sillySealLeft.png";
const sealImgRight = new Image();
sealImgRight.src = "images/sillySealRight.png";
const tommyTurtleImg = new Image();
tommyTurtleImg.src = "images/tommyTurtle.png";
const sharkySharkImg = new Image();
sharkySharkImg.src = "images/sharkyShark.png";
const sharkChompAudio = document.getElementById("shark-chomp");

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
    this.alive = alive;
  }

  render() {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

const tommyTurtle = new Crawler(
  400,
  720,
  30,
  30,
  "green",
  tommyTurtleImg,
  false
);
const crankyCrabs = [
  new Crawler(425, 635, 35, 35, "red", crabImg),
  new Crawler(25, 635, 35, 35, "red", crabImg),
  new Crawler(225, 635, 35, 35, "red", crabImg),
  new Crawler(625, 635, 35, 35, "red", crabImg),
];

const bullyBirds = [
  new Crawler(425, 490, 60, 60, "blue", birdImg),
  new Crawler(25, 490, 60, 60, "blue", birdImg),
  new Crawler(225, 490, 60, 60, "blue", birdImg),
  new Crawler(625, 490, 60, 60, "blue", birdImg),
];

const sillySeals = [
  new Crawler(701, 300, 90, 55, "olive", sealImgRight),

  // new Crawler(601, 300, 55, 55, "olive"),
  new Crawler(501, 300, 90, 55, "olive", sealImgRight),
  // new Crawler(551, 300, 55, 55, "olive"),
  new Crawler(301, 300, 90, 55, "olive", sealImgRight),
  // new Crawler(1, 300, 55, 55, "olive"),
  new Crawler(101, 300, 90, 55, "olive", sealImgRight),
  // new Crawler(201, 300, 55, 55, "olive"),
  //---
  new Crawler(701, 250, 90, 55, "pink", sealImgLeft),

  // new Crawler(601, 250, 80, 55, "pink"),
  new Crawler(501, 250, 90, 55, "pink", sealImgLeft),
  // new Crawler(551, 250, 80, 55, "pink"),
  new Crawler(301, 250, 90, 55, "pink", sealImgLeft),
  new Crawler(1, 250, 90, 55, "pink", sealImgLeft),
];

const sharkyShark = [
  new Crawler(450, 75, 150, 80, "blue", sharkySharkImg),
  new Crawler(50, 75, 150, 80, "blue", sharkySharkImg),
];

const gameInterval = setInterval(gameLoop, 100);
function movementHandler(e) {
  if (tommyTurtle.alive) {
    const speed = 40;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    switch (e.key) {
      case "w":
        tommyTurtle.y -= speed;

        break;
      case "s":
        if (tommyTurtle.y + tommyTurtle.height + speed <= canvasHeight) {
          tommyTurtle.y += speed;
        }
        break;
      case "a":
        if (tommyTurtle.x - speed >= 0) {
          tommyTurtle.x -= speed;
        }
        break;
      case "d":
        if (tommyTurtle.x + tommyTurtle.width + speed <= canvasWidth) {
          tommyTurtle.x += speed;
        }
        break;
      default:
    }
  }
}

document.addEventListener("keydown", function (e) {
  movementHandler(e);
});
startButton.addEventListener("click", function () {
  playBackgroundAudio();
  landingPage.remove();
  tommyTurtle.alive = true;
  for (let i = 0; i < 3; i++) {
    newLife = document.createElement("div");

    newLife.classList.add("life");
    newLife.innerHTML = '<img src="images/tommyTurtle.png">';
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
  for (let i = 0; i < sharkyShark.length; i++) {
    sharkyShark[i].render();
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
  speed = 20;
  for (let i = 0; i < bullyBirds.length; i++) {
    bullyBirds[i].x += speed;
    if (bullyBirds[i].x + bullyBirds[i].width > canvas.width + 40) {
      bullyBirds[i].x = -40;
    }
  }
  speed = 10;
  for (let i = 0; i < sillySeals.length; i++) {
    if (i <= 3) {
      sillySeals[i].x += speed;
      if (sillySeals[i].x + sillySeals[i].width > canvas.width + 80) {
        sillySeals[i].x = -80;
      }
    }
    if (i > 3) {
      sillySeals[i].x -= speed * 1.5;
    }
    if (sillySeals[i].x + sillySeals[i].width < -10) {
      sillySeals[i].x = canvas.width;
    }
  }
  speed = 50;
  for (let i = 0; i < sharkyShark.length; i++) {
    if (i <= 3) {
      sharkyShark[i].x += speed;
      if (sharkyShark[i].x + sharkyShark[i].width > canvas.width + 80) {
        sharkyShark[i].x = -80;
      }
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
    tommyTurtle.x = 400;
    tommyTurtle.y = 720;
    const removedLife = domLives.pop(); // Remove the last life element from the array
    livesContainer.removeChild(removedLife); // Remove the last life element from the container
    return true;
    return true;
  }
}

function detectEscape() {
  if (tommyTurtle.y < -10) {
    isGameOver = true;
  }
}
function playBackgroundAudio() {
  backgroundAudio.play();
  volume = 0.4;
  backgroundAudio.volume = volume;
}
function sealChompAudioVolumeControl() {
  sealChompAudio.play();
  volume = 0.1;
  sealChompAudio.volume = volume;
}
function crabChompAudioVolumeControl() {
  crabChompAudio.play();
  volume = 0.1;
  crabChompAudio.volume = volume;
}
function sharkChompAudioVolumeControl() {
  sharkChompAudio.play();
  volume = 0.1;
  sharkChompAudio.volume = volume;
}

function birdGulpAudioVolumeControl() {
  birdGulpAudio.play();
  volume = 0.1;
  birdGulpAudio.volume = volume;
}
// Define the event listener function separately
function replayButtonClickHandler() {
  tommyTurtle.alive = true;
  isGameOver = false;
  replayButton.style.display = "none";
  winnerPage.style.display = "none";
  loserPage.style.display = "none";
  tommyTurtle.x = 400;
  tommyTurtle.y = 720;
  lives = 3;
  while (livesContainer.firstChild) {
    livesContainer.removeChild(livesContainer.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    newLife = document.createElement("div");

    newLife.classList.add("life");
    newLife.innerHTML = '<img src="images/tommyTurtle.png" >';

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
  if (isGameOver === false) {
    enemyMovement();
    renderObjects();
    for (let i = 0; i < crankyCrabs.length; i++) {
      if (detectHit(tommyTurtle, crankyCrabs[i])) {
        crabChompAudioVolumeControl();
        // tommyTurtle.alive = false;
      }
    }
    for (let i = 0; i < bullyBirds.length; i++) {
      if (detectHit(tommyTurtle, bullyBirds[i])) {
        birdGulpAudioVolumeControl();
        // tommyTurtle.alive = false;
        // tommyTurtle.alive = false;
        // isGameOver = true;
      }
    }
    for (let i = 0; i < sillySeals.length; i++) {
      if (detectHit(tommyTurtle, sillySeals[i])) {
        sealChompAudioVolumeControl();

        // tommyTurtle.alive = false;
        // tommyTurtle.alive = false;
        // isGameOver = true;
      }
    }
    for (let i = 0; i < sharkyShark.length; i++) {
      if (detectHit(tommyTurtle, sharkyShark[i])) {
        sharkChompAudioVolumeControl();

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
  } else if (lives > 0 && detectEscape) {
    // Tommy won the game with lives remaining
    winnerPage.style.display = "block";

    replayButton.style.display = "block";
  } else if (isGameOver === true) {
    // Tommy lost all lives
    replayButton.style.display = "block";
    loserPage.style.display = "block";
  }
}
img.onload = function () {
  // Once the image is loaded, draw it on the canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
