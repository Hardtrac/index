<?php
// Your login validation logic here
$username = $_POST['username']; // Get the username from the form
$password = $_POST['password']; // Get the password from the form

// Sample validation - You should replace this with your actual validation logic
if ($username === 'your_username' && $password === 'your_password') {
    // Redirect to the Google Excel sheet
    header('Location: https://docs.google.com/spreadsheets/d/1iazMmordxyAdktHm8RzSSp1CDsMLG8rR4q6avD9342E/edit#gid=2037114772');
    exit;
} else {
    // Redirect back to the login page if credentials are incorrect
    header('Location: index.html');
    exit;
}
?>
