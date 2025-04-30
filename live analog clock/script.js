// script.js
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    // Calculate the rotation for each hand
    const secondDeg = ((seconds / 60) * 360) + 90; // +90 to offset the initial position
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // +90 to offset
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // +90 to offset

    // Apply the rotation
    secondHand.style.transform =   `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();