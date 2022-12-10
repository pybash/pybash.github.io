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
        if(Math.round(duration.hours()) < 10) {
            hoursText.innerText = "0" + Math.round(duration.hours())
        } else {
            hoursText.innerText = Math.round(duration.hours())
        }
        if( Math.round(duration.minutes()) < 10) {
            minutesText.innerText = "0" + Math.round(duration.minutes())
        } else {
            minutesText.innerText = Math.round(duration.minutes())
        }
        if(Math.round(duration.seconds()) < 10) {
            secondsText.innerText = "0" + Math.round(duration.seconds())
        } else {
            secondsText.innerText = Math.round(duration.seconds())
        }
    }, 100)
})