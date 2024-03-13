document.addEventListener('DOMContentLoaded', function() {
    var now = new Date(); // Get the current time
    var month = now.getMonth(); // get current month
    var date = now.getDate(); // get current date
    var hour = now.getHours(); // Extract the hour
    var minutes = now.getMinutes(); // Extract the minutes

    var contentDiv = document.getElementById('content'); // Get the content div

    // Specify the exact time you want the image to show (e.g., 13:30)
    if(month === 2 && date === 14){
        if ((hour === 15 && minutes === 14)||(hour === 3 && minutes === 14)) {
            // Display an image at 3:14 
            contentDiv.innerHTML = '<img src="./assets/Pie.png" alt="Special Image">';
            contentDiv.innerHTML += '<div class="overlay">Happy Pi Day</div>';

        } else {
            // Display text at all other times
            contentDiv.innerHTML = '<img src="./assets/Pie.png" alt="Special Image">';
            
        }
    } else{
        if ((hour === 15 && minutes === 14)||(hour === 3 && minutes === 14)) {
            // Display an image at 3:14 
            contentDiv.innerHTML = '<img src="./assets/Pie.png" alt="Special Image">';
        } else {
            // Display text at all other times
            contentDiv.innerHTML = '<p>Come back at 3:14</p>';
        }

    }
    
});
