let minute = 0;
let second = 0;
let millisecond = 0;

let appendmillisecond = document.querySelector(".millisecond");
let appendsecond = document.querySelector(".second");
let appendminute = document.querySelector(".minute");
let btnstart = document.querySelector(".btstart");
let btnstop = document.querySelector(".btstop");
let btnreset = document.querySelector(".btreset");

let intervalId;

btnstart.onclick = function () {
  clearInterval(intervalId);
  intervalId = setInterval(operatetimer, 10);
};

btnstop.onclick = function () {
  clearInterval(intervalId);
};

btnreset.onclick = function () {
  clearInterval(intervalId);
  millisecond = 0;
  second = 0;
  minute = 0;
  appendmillisecond.textContent = "00";
  appendsecond.textContent = "00";
  appendminute.textContent = "00";
};

function operatetimer() {
  millisecond++;
  appendmillisecond.textContent =
    millisecond > 9 ? millisecond : "0" + millisecond;
  if (millisecond > 99) {
    second++;
    appendsecond.textContent = second > 9 ? second : "0" + second;
    millisecond = 0;
    appendmillisecond.textContent = "00";
  }
  if (second > 59) {
    minute++;
    appendminute.textContent = minute > 9 ? minute : "0" + minute;
    second = 0;
    appendsecond.textContent = "00";
  }
}
