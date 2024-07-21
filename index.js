
//#region Variables
const lapTimeControl = document.getElementById("LapTime");
const stopWatchLabel = document.getElementById("StopWatch");
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;
let lapList = [];
let timer = null;

//#endregion

//#region Functions
function StartButtonClicked() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(UpdateTimer, 10);
        isRunning = true;
    }
}

function ResetButtonClicked() {
    document.getElementById('Line').style.display = "none";
    lapTimeControl.innerHTML = "";
    lapList = [];
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    stopWatchLabel.textContent = '00:00:00:00';
    clearInterval(timer);
}

function StopButtonClicked() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
}

function LapButtonClicked() {
    const isDisplayed = document.getElementById('Line').style.display == "block";
    if (!isDisplayed) {
        document.getElementById('Line').style.display = "block";
    }
    lapList.push(`<label> LAP ${lapList.length + 1} ${stopWatchLabel.textContent}</label>`);
    lapTimeControl.innerHTML = lapList.join('<br>');
}

function UpdateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    const minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    const seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    const miliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);
    const timeStr = `${hours}:${minutes}:${seconds}:${miliseconds}`
    stopWatchLabel.textContent = timeStr;
}
//#endregion

