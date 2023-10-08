// //DOM SELECTORS
// const canvas = document.querySelector("#canvas");
// console.log(canvas);
// const canvasContainer = document.querySelector("#canvas-container");

// const ctx = canvas.getContext("2d");
// console.log(ctx);
// canvas.setAttribute("height", getComputedStyle(canvas).height);
// canvas.setAttribute("width", getComputedStyle(canvas).width);

// //DOM CLASSES

// class Crawler {
//   constructor(x, y, width, height, color) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   render() {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// const tommyTurtle = new Crawler(425, 800, 40, 40, "green");

// //FUNCTIONS
// function detectHit(objectOne, objectTwo) {
//   //top of the ogre
//   const top = objectOne.y + objectOne.height >= objectTwo.y;
//   //bottom of objectTwo
//   const bottom = objectOne.y <= objectTwo.y + objectTwo.height;
//   // Left of objectTwo
//   const left = objectOne.x + objectOne.width >= objectTwo.x;
//   // Right of objectTwo
//   const right = objectOne.x <= objectTwo.x + objectTwo.width;
//   console.log(`top: ${top}, bottom: ${bottom},left:${left},right ${right}`);
//   if (top && bottom && left && right) {
//     console.log("HIT!!");
//     return true;
//   }
//   return false;
// }
// const gameInterval = setInterval(gameLoop, 80);

// function movementHandler(e) {
//   const speed = 50;
//   switch (e.key) {
//     case "w":
//       console.log("move hero up");
//       tommyTurtle.y -= speed;
//       canvasContainer.scrollTop -= 25;

//       break;
//     case "s":
//       console.log("move tommyTurtle down");
//       tommyTurtle.y += speed;
//       break;
//     case "a":
//       console.log("move tommyTurtle left");
//       tommyTurtle.x -= speed;
//       break;
//     case "d":
//       console.log("move tommyTurtle right");
//       tommyTurtle.x += speed;
//       break;
//     default:
//       //any other val will run default
//       console.log(`${e.key} not recognized`);
//   }
//   renderObjects();
// }

// document.addEventListener("keydown", movementHandler);
// function renderObjects() {
//   //   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   tommyTurtle.render();
// }
// function gameLoop() {
//   renderObjects();
//   movementHandler();
// }

// gameLoop();
