document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check if the user has a preferred theme
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
        bodyElement.classList.add('dark-mode');
    } else {
        bodyElement.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function() {
        bodyElement.classList.toggle('light-mode');
        bodyElement.classList.toggle('dark-mode');
    });
});