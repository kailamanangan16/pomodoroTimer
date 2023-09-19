
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let seconds = 25 * 60; // starting default time
let interval = null;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

timeDisplay.innerHTML = "25:00";

let startTime = 25;
let pomoCount = 0;

function countdown() {
    seconds--;
    console.log(seconds);
    let s = seconds % 60; //seconds
    let m = Math.floor(seconds/60); //minutes

    if (s < 10){
        s = '0' + s;
    }
    if (m < 10){
        m = '0' + m;
    }

    if (seconds == 0 && startTime == 25 && pomoCount < 4){
        seconds = 5 * 60; //five min break
        startTime = 5; //new start time
        pomoCount++;
    } else if (seconds == 0 && startTime == 5 && pomoCount < 4){
        seconds = 25 * 60; //25 min work time
        startTime = 5; //new start time
    } else if (seconds == 0 && startTime == 25 && pomoCount < 4){
        seconds = 10 * 60;
        pomoCount = 0;
        startTime = 5; //for less code sake -> goes back to pomodoro sequence
    }
    timeDisplay.innerText = `${m}:${s}`;
}

function start(){
    if (interval) {
        return
    }
    interval = setInterval(countdown, 1000);
}

function stop(){
    clearInterval(interval);
        interval = null;
}

function reset() {
    stop();
    seconds = 25*60;
    timeDisplay.innerHTML = '25:00';
}