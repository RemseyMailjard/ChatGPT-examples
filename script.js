function updateClocks() {
    // Get the current time in UTC
    let now = new Date();

    // Calculate the time in Phoenix, Arizona (UTC-7)
    let timeAZ = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                          now.getUTCHours() - 7, now.getUTCMinutes(), now.getUTCSeconds());

    // Calculate the time in the Netherlands (UTC+1 or UTC+2 for daylight saving)
    let offsetNL = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }).endsWith('AM') ? 1 : 2;
    let timeNL = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                          now.getUTCHours() + offsetNL, now.getUTCMinutes(), now.getUTCSeconds());

    // Update the clocks
    document.getElementById('clockAZ').innerHTML = `Current time in Phoenix, Arizona: ${timeAZ.toLocaleTimeString()}`;
    document.getElementById('clockNL').innerHTML = `Current time in the Netherlands: ${timeNL.toLocaleTimeString()}`;
}

// Update clocks every second
setInterval(updateClocks, 1000);
