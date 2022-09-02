let guestScore = 0
let homeScore = 0

let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")

function homeAdd1() {
    homeScore += 1
    updateHomeScore()
}
function homeAdd2() {
    homeScore += 2
    updateHomeScore()
}
function homeAdd3() {
    homeScore += 3
    updateHomeScore()
}

function guestAdd1() {
    guestScore += 1
    updateGuestScore()
}
function guestAdd2() {
    guestScore += 2
    updateGuestScore()
}
function guestAdd3() {
    guestScore += 3
    updateGuestScore()
}

function updateHomeScore() {
    homeCounter.textContent = homeScore
}

function updateGuestScore() {
    guestCounter.textContent = guestScore
}
//and now the bug hunt :)