function getDay(){
    let offset = -1;
    let day = new Date();
    let currentDate = day.getTime();
    let compareDate = new Date("January 29, 2024 00:00:00").getTime();
    currentDate = currentDate / 86400000
    compareDate = compareDate / 86400000
    let weekday;
    if (day.getDay() == 6) {
        currentDate = currentDate + 2
    } else if (day.getDay() == 0) { 
        currentDate = currentDate + 1
    } else {
        weekday = true
    }
    let daydiff = currentDate - compareDate;
    daydiff = Math.floor(daydiff);
    let weekspassed = Math.floor(daydiff / 7);
    let weekends = weekspassed * 2;
    daydiff = daydiff - weekends;
    let schoolday = (daydiff % 4) + 1;
    schoolday = schoolday + offset;
    while (schoolday < 1) {
        schoolday += 4
    }
    if (weekday == true) {
        // document.getElementById("day").innerHTML = "Nous sommes jour " + schoolday;
    } else {
        // document.getElementById("day").innerHTML = "Nous serons jour " + schoolday + " lundi.";
    }
    document.getElementById("day").innerHTML = "Joyeuses vacances! Jour 2 au retour.";
}