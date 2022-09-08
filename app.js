function aparecer(){
    let div = document.getElementById("classe")
    let video = document.getElementById("musica")

    video.play() 
    video.loop = true;
}
const jump = () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipe = document.querySelector('.pipe');
    const pipePosition = pipe.offsetLeft;
    const mario = document.querySelector('.mario');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 220 && pipePosition > 70 && marioPosition < 110) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }

}, 10);

document.addEventListener('keydown', jump);
