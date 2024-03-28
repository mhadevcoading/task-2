const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = Math.floor(elapsedTime % 1000);
  display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(intervalId);
  intervalId = null;
  display.innerHTML = '00:00:00';
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
