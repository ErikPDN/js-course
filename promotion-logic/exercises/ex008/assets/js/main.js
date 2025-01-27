const clock = document.querySelector('.clock');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let timer = null;
let secods = 0;


// function formatTimer(secods) {
//     const hrs = Math.floor(secods / 3600).toString().padStart(2, '0');
//     const mins = Math.floor((secods % 3600) / 60).toString().padStart(2, '0');
//     const secs = Math.floor(secods % 60).toString().padStart(2, '0');
//     return `${hrs}:${mins}:${secs}`;
// }


function formatTimer(secods) {
    const date = new Date(secods * 1000);
    return date.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    });
}

function updateClock() {
    clock.textContent = formatTimer(secods);
}

startButton.addEventListener('click', () => {
    if(timer) return;
    clock.style.color = 'white';
    timer = setInterval(() => {
        secods++;
        updateClock();
    }, 1000);
});

pauseButton.addEventListener('click', () => {
    clock.style.color = 'red';
    clearInterval(timer);
    timer = null;
})

resetButton.addEventListener('click', () => {
    clock.style.color = 'white';
    clearInterval(timer);
    timer = null;
    secods = 0;
    updateClock();
})
