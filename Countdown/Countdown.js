let timerInterval;
let countdownTime = 0;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

function updateTimerDisplay(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.innerText = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function startTimer() {
  if (!timerInterval) {
    countdownTime =
      parseInt(hoursInput.value) * 3600 +
      parseInt(minutesInput.value) * 60 +
      parseInt(secondsInput.value);
    timerInterval = setInterval(() => {
      countdownTime--;
      if (countdownTime < 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        countdownTime = 0;
      }
      updateTimerDisplay(countdownTime);
    }, 1000);
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  countdownTime = 0;
  hoursInput.value = "0";
  minutesInput.value = "0";
  secondsInput.value = "0";
  updateTimerDisplay(countdownTime);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateTimerDisplay(countdownTime);
