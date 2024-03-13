document.addEventListener('DOMContentLoaded', function() {
    var now = new Date(); // Get the current time
    var hour = now.getHours(); // Extract the hours

    var mainHeader = document.getElementById('mainHeader'); // Get the message div

    if (hour === 15) { // Check if it's 1 PM (13:00 in 24-hour format)
        // Do something at 1 PM
        mainHeader.innerHTML = "It's 1 PM! Time for something special.";
    } else {
        // Do something any other time
        mainHeader = "It's not 1 PM. Just a regular time.";
    }
});