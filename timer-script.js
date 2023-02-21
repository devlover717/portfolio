const newYears = '1 Jan 2024'; 

const daysEl = document.querySelector('#days'); 
const hoursEl = document.querySelector('#hours'); 
const minsEl = document.querySelector('#minutes'); 
const secondsEl = document.querySelector('#seconds'); 


function countdown() {
    const currentDate = new Date(); 
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds/ 3600) %24; 
    const minutes = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days; 
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes; 
    secondsEl.innerHTML = seconds;


    console.log(days, hours, minutes, seconds); 
}



//intial call
countdown();  

setInterval(countdown, 1000);