const times = document.querySelector('.watch .time p');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let seconds = 0;
let interval = null;
startbtn.addEventListener('click',start);
stopbtn.addEventListener('click',stop);
resetbtn.addEventListener('click',reset);

function timer() {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;
    if (secs < 10) {
        secs = '0' + secs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    times.innerText = `${hours}:${mins}:${secs}`;
}
function start() {
    if (interval) {
        return;
    }
    interval = setInterval(timer,1000);
}
function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    times.innerText = '00:00:00';
}