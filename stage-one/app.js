const currentTime = document.getElementById("time");
const currentDay = document.getElementById("day");

// use the date object
const currentCompleteTime = new Date();

// for UTC time
const time = currentCompleteTime.toUTCString();
currentTime.textContent = time;

// for day
const day = currentCompleteTime.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
currentDay.textContent = days[day];