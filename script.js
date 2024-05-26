// Add any required JavaScript functionality here
// For example, smooth scroll functionality for the dropdown

document.querySelector('.dropdown').addEventListener('change', function() {
    const section = document.querySelector(this.value);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
});
