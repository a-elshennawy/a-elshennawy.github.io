document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('September 2, 2024 23:59:59').getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days + "d ";
        document.getElementById("hours").innerText = hours + "h ";
        document.getElementById("minutes").innerText = minutes + "m ";
        document.getElementById("seconds").innerText = seconds + "s ";
    }, 1000);
});