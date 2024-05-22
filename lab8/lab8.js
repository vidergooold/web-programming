function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Дата и время для русской локали: ${today.toLocaleString('ru-RU')}<br>`;

    let locales = {
        "Япония": 'ja-JP',
        "Бразилия": 'pt-BR',
        "Германия": 'de-DE',
        "Индия": 'hi-IN',
        "Франция": 'fr-FR'
    };

    let localeDates = document.getElementById('locale-dates');
    for (let [country, locale] of Object.entries(locales)) {
        localeDates.innerHTML += `Дата и время для локали ${country}: ${today.toLocaleString(locale)}<br>`;
    }

    let additionalInfo = document.getElementById('additional-info');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    additionalInfo.innerHTML = `
        Текущий год: ${today.getFullYear()}<br>
        Текущий месяц: ${today.toLocaleString('ru-RU', { month: 'long' })}<br>
        Текущая дата: ${today.getDate()}<br>
        День недели: ${daysOfWeek[today.getDay()]}
    `;
}

function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1;
    let year = document.getElementById('input-year').value;
    let date = new Date(year, month, day);
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let dayOfWeek = daysOfWeek[date.getDay()];
    let resultDiv = document.getElementById('day-of-week-result');
    resultDiv.innerHTML = `День недели: ${dayOfWeek}`;
}
