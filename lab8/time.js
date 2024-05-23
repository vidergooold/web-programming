function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function showTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0'); // Метод преобразует число в строку и добавляет нули слева, чтобы всегда было две цифры
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(showTime, 1000);
