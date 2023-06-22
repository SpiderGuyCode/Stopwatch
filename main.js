let minutes = 0,
  seconds = 0,
  milli = 0;

let timer = document.getElementById("timer"),
  start = document.getElementById("button-start"),
  stop = document.getElementById("button-stop"),
  reset = document.getElementById("button-reset");
let interval;

function count() {
  milli_seconds++;
  if (milli_seconds >= 100) {
    milli_seconds = 0;
    seconds += 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  timer.textContent =
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    ":" +
    (milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);
}

start.onclick = function () {
  clearInterval(interval);
  interval = setInterval(count, 1);
};
