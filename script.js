var ramzanStartDate = moment("2025-03-02T00:00:00");
var startDate = moment("2024-07-08T02:00:00");

function updateCountdown() {
    var now = moment();
    var duration = moment.duration(ramzanStartDate.diff(now));

    document.getElementById('days').textContent = Math.floor(duration.asDays());
    document.getElementById('hours').textContent = duration.hours();
    document.getElementById('minutes').textContent = duration.minutes();
    document.getElementById('seconds').textContent = duration.seconds();
}

setInterval(updateCountdown, 1000);

updateCountdown();
