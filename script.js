document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add your login validation logic here
    // For demonstration, I'm redirecting directly to the dashboard page
    window.location.href = 'dashboard.html';
});
