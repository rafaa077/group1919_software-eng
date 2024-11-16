let player = document.getElementById('player');
let ball = document.getElementById('ball');
let scoreDisplay = document.getElementById('score');
let gameArea = document.getElementById('game');

let score = 0;
let gameWidth = gameArea.offsetWidth;
let gameHeight = gameArea.offsetHeight;

let playerWidth = player.offsetWidth;
let playerHeight = player.offsetHeight;
let ballSize = ball.offsetWidth;

let playerX = (gameWidth - playerWidth) / 2;
let ballX = Math.random() * (gameWidth - ballSize);
let ballY = 0;
let ballSpeed = 2;

player.style.left = `${playerX}px`;

document.addEventListener('mousemove', (event) => {
  playerX = event.clientX - gameArea.offsetLeft - playerWidth / 2;
  if (playerX < 0) playerX = 0;
  if (playerX > gameWidth - playerWidth) playerX = gameWidth - playerWidth;
  player.style.left = `${playerX}px`;
});

function updateBall() {
  ballY += ballSpeed;

  if (ballY > gameHeight - ballSize) {
    if (ballX + ballSize > playerX && ballX < playerX + playerWidth) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }
    ballX = Math.random() * (gameWidth - ballSize);
    ballY = 0;
  }

  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;
}

function gameLoop() {
  updateBall();
  requestAnimationFrame(gameLoop);
}

gameLoop();
