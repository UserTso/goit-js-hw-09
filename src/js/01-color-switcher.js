
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStartChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

let changeColorId = null;

function onStartChangeColor(event) { 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    changeColorId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopChangeColor(event) {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(changeColorId);
}
// console.log()
// stopBtn.addEventListener('click', () => { });
// console.log()


// 

