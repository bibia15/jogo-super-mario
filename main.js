const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');
const starButton = document.querySelector('.star');
const gameOverScreen = document.querySelector('.game-over');
const scoreElement = document.getElementById('score'); // Elemento de pontuação

audioSart = new Audio('./')
const jump = () => {
  mario. classLit.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }
 ,500);
}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  pipe.computedStyle.animation = 'none';
  pipe.computedStyle.left = `${pipePosition}px`;

  mario.computedStyle.animation = 'none';
  mario.computedStyle.left = `${marioPosition}px`;

  mario.src= '/img/game-over.png';
  mario.computedStyleMap.width = '75px';
  mario.style.marginLeft = '50px';


  clearInterval(loop);
}
},10);

document. addEventListener('keydown', jump);
