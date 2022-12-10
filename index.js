document.addEventListener('DOMContentLoaded', () => {
    let now = moment()
    let decision = moment("02052023", "MMDDYYYY")
    var duration = moment.duration(decision.diff(now));

    let daysText = document.getElementById("daysText")
    let hoursText = document.getElementById("hoursText")
    let minutesText = document.getElementById("minutesText")
    let secondsText = document.getElementById("secondsText")


    daysText.innerText = Math.round(duration.asDays() + 1)
    hoursText.innerText = Math.round(duration.hours())
    minutesText.innerText = Math.round(duration.minutes())
    secondsText.innerText = Math.round(duration.seconds())
    setInterval(() => {
        now = moment()
        duration = moment.duration(decision.diff(now));
        daysText.innerText = Math.round(duration.asDays() + 1)
        hoursText.innerText = Math.round(duration.hours())
        minutesText.innerText = Math.round(duration.minutes())
        secondsText.innerText = Math.round(duration.seconds())
    }, 100)
})