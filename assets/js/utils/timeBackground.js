// assets/js/utils/timeBackground.js

export function initTimeBackground() {
    const hour = new Date().getHours();
    let period;
    
    if (hour >= 5 && hour < 12) {
        period = 'morning';      // 5am - 11:59am
    } else if (hour >= 12 && hour < 17) {
        period = 'afternoon';    // 12pm - 4:59pm
    } else if (hour >= 17 && hour < 21) {
        period = 'evening';      // 5pm - 8:59pm
    } else {
        period = 'night';        // 9pm - 4:59am
    }
    
    // Remove any existing time classes
    document.body.classList.remove('time-morning', 'time-afternoon', 'time-evening', 'time-night');
    
    // Add current time class
    document.body.classList.add(`time-${period}`);
    
    console.log(`🌅 Background set to: ${period} (${hour}:00)`);
    
    return period;
}

// Optional: Update every hour
export function startTimeBackgroundUpdater() {
    initTimeBackground();
    
    // Check every 30 minutes
    setInterval(initTimeBackground, 30 * 60 * 1000);
}