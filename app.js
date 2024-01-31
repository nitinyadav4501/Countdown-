function countdown() {
    setInterval(() => {
        let date = new Date('may 26,2024').getTime()
        let currDate = new Date().getTime()
        let diff = date - currDate;
        let day = Math.floor(diff / (1000 * 60 * 60 * 24))
        let hour = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minute = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
        let second = Math.floor(diff % (1000 * 60) / (1000))

        document.getElementById("day").innerHTML = day
        document.getElementById("hour").innerHTML = hour
        document.getElementById("minute").innerHTML = minute
        document.getElementById("second").innerHTML = second
    }, 1000)
}
countdown();