const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('minutes');
const secondsel = document.getElementById('seconds');
const newyears = "1 jan 2022";
function countdown() {
    const newyearsdate = new Date(newyears);
    const currentdate  = new Date();
    const totalseconds = (newyearsdate - currentdate) / 1000;
    const days = Math.floor(totalseconds / 3600 /24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
  
    daysel.innerHTML = days;
    hoursel.innerHTML = formattime(hours);
    minutesel.innerHTML = formattime(mins);
    secondsel.innerHTML =  formattime(seconds);
}

function formattime(time) {
    return time < 10 ? `0${time}` : time;
}
//intial call
countdown();
setinterval(countdown, 1000);