// Get all size span elements
const sizes = document.querySelectorAll('.size');

// Loop through each size element
sizes.forEach(function(size) {
    size.addEventListener('click', function() {
        // Remove 'selected' class from all sizes
        sizes.forEach(function(s) {
            s.classList.remove('selected');
        });
        // Add 'selected' class to the clicked size
        size.classList.add('selected');
    });
});
function handleSearchSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Redirect to 'shop.html'
    window.location.href = 'shop.html';
}
