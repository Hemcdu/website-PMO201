document.getElementById('purchaseForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    alert('Your details for course enrollment have been submitted successfully. Please click OK to proceed.');
    window.location.href = 'payment.html'; // Redirect to homepage
};
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'course.html'
    window.location.href = 'course.html';
}
