 // Function to handle the login form submission
 function handleLogin(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Getting the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation: check if username and password are not empty
    if(username && password) {
         // Display a success message
         alert('Login is successful.');
        // If not empty, redirect to 'index.html'
        window.location.href = 'index.html';
    } else {
        // If empty, alert the user
        alert('Please fill in all the required fields.');
    }
}

// Function to handle the registration form submission
function handleRegister(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Getting the email value
    var email = document.getElementById('email').value;

    // Simple validation: check if email is not empty
    if(email) {
        // Display a message that a link has been sent
        alert('A link to set a new password has been sent to your email. Please check your email.');

        // If not empty, redirect to 'index.html'
        window.location.href = 'index.html';
    } else {
        // If empty, alert the users
        alert('Please fill in all the required fields.');
    }
}

// Attach the functions to the forms' submit event
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('registerForm').addEventListener('submit', handleRegister);
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'course.html'
    window.location.href = 'course.html';
}
