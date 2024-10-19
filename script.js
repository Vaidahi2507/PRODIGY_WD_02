let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;
let lapCount = 0;

const stopwatch = document.getElementById('stopwatch');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function startStop() {
  if (running) {
    clearInterval(timerInterval);
    startStopButton.textContent = 'Start';
    running = false;
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startStopButton.textContent = 'Stop';
    running = true;
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  lapCount = 0;
  updateDisplay();
  startStopButton.textContent = 'Start';
  running = false;
  lapsList.innerHTML = '';
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const time = new Date(elapsedTime);
  stopwatch.textContent = time.toISOString().substr(11, 8);
}

function lap() {
  if (running) {
    lapCount++;
    const lapTime = new Date(elapsedTime).toISOString().substr(11, 8);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.insertBefore(lapItem, lapsList.firstChild);
  }
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

console.log('Stopwatch application initialized!');
