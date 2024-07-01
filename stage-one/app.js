const updateTime = () => {
    const currentTime = document.getElementById("time");
const currentDay = document.getElementById("day");

// use the date object
const currentCompleteTime = new Date();

// for UTC time
let hour = currentCompleteTime.getUTCHours();
const minutes = currentCompleteTime.getUTCMinutes();
const seconds = currentCompleteTime.getUTCSeconds();

// change to WAT
const watHour = (hour + 1) % 24;

// format time
const formattedHour = String(watHour).padStart(2,"0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedSeconds = String(seconds).padStart(2, "0");

const time = `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
// console.log(time)
currentTime.textContent = "Time: " + time;


// for day
const day = currentCompleteTime.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = days[day];
// console.log(today)
currentDay.textContent = "Day: " + today ;


}

setInterval(updateTime, 1000)
updateTime();
