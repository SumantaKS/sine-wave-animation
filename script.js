"use strict";
/** @type {HTMLCanvasElement} */ //to display canvas methods in vscode

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth = (canvas.width = 500);
const canvasHeight = (canvas.height = 1000);
let gameFrame = 0;

class Enemy {
  constructor() {
    this.enemyImg = new Image();
    this.enemyImg.src = "img/enemy1.png";
    this.enemyWidth = 293;
    this.enemyHeight = 155;
    this.width = this.enemyWidth / 2.5;
    this.height = this.enemyHeight / 2.5;
    this.x = Math.random() * (canvasWidth - this.width);
    this.y = Math.random() * (canvasHeight - this.height);
    this.enemyFrame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); //this ensures each enemy has different flap speed
  }
  resetFrame() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;
    if (gameFrame % this.flapSpeed === 0) {
      this.enemyFrame >= 5 ? (this.enemyFrame = 0) : this.enemyFrame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.enemyImg,
      this.enemyFrame * this.enemyWidth,
      0,
      this.enemyWidth,
      this.enemyHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

const enemyCount = 100;
const enemies = [];
for (let i = 0; i < enemyCount; i++) {
  enemies.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  enemies.forEach((enemy) => {
    enemy.resetFrame();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
