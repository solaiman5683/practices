let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let progress = document.getElementById('progress');

function showTime() {
    let date = new Date()
    let hours = date.getHours() +':'
    let minutes = date.getMinutes() +':'
    let seconds = date.getSeconds()

    hr.textContent = hours
    min.textContent = minutes
    sec.textContent = seconds

    progress.style.width = (seconds/60) * 100 + '%'
}

setInterval(showTime, 1000)