const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');
const startButton = document.querySelector('.start');
const gameOverScreen = document.querySelector('.game-over');
const scoreElement = document.getElementById('score'); // Elemento de pontuação

audioStart = new Audio('./sound/audio_theme.m3');
const gameOverSound = new Audio('./sound/game_over.m3');

let gameStarted = false;
let score = 0; // Variável de pontuação

const startGame = () => {
  gameStarted = true;
  audioStart.play();

 pipe.style.animation = 'pipe-animation 1.5s infinite linear';

 startButton.style.display = 'none';
 mario.style.opacity = '1';
 pipe.style.opacity = '1';
 clouds.style.opacity = '1';
}
 const jump = () => {
if (gameStarted) {
    mario. classLit.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}
}

cont updateScore = () => {
  score += 1; // Incrementa a pontuação
  scoreElement.textContent = score; // Atualiza o elemento HTML com uma nova pontuação
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  pipe.computedStyle.animation = 'none';
  pipe.computedStyle.left = `${pipePosition}px`;

  mario.computedStyle.animation = 'none';
  mario.computedStyle.left = `${marioPosition}px`;

  mario.src= './img/game-over.png';
  mario.computedStyleMap.width = '75px';
  mario.style.marginLeft = '50px';
  audioStart.pause();

  gameOverSound.play();

  clearInterval(loop);
  gameOverScreen.style.display = 'flex';
 } else if (pipePosition < 0 && gameStarted){
   updateScore(); // Atualiza a pontuação quando o pipe sai da tela (Mario passou)
   pipe.style.left = ''; // Renicia a posição do pipe
 }
},10);

document. addEventListener('keydown', jump);

cont restargame = () => {
  window
}