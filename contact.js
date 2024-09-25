document.getElementById('FeedbackForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Show the notification bar
    var notificationBar = document.getElementById('notificationBar');
    notificationBar.style.display = 'block';
    setTimeout(function() { 
        notificationBar.style.display = 'none';
    }, 3000); // Notification bar will show for 3 seconds

    // Reset the form fields
    document.getElementById('FeedbackForm').reset();
};
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'course.html'
    window.location.href = 'course.html';
}
