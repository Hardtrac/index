<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check credentials
    $brandName = $_POST['brand-name'];
    $password = $_POST['password'];
    
    // Perform authentication
    if ($brandName === 'vinod' && $password === '1234') {
        // Redirect to Vinod's file
        header('Location: https://docs.google.com/spreadsheets/d/1iazMmordxyAdktHm8RzSSp1CDsMLG8rR4q6avD9342E/edit#gid=2037114772');
        exit;
    } else {
        // Authentication failed
        echo '<script>alert("Invalid brand name or password. Please try again.");</script>';
        // Redirect back to the login page
        echo '<script>window.location.href = "index.html";</script>';
        exit;
    }
}
?>
