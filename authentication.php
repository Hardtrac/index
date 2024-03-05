<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check credentials
    $brandName = $_POST['brand-name'];
    $password = $_POST['password'];
    
    // Perform authentication
    if ($brandName === 'vinod' && $password === '1234') {
        // Manipulate Excel sheet here
        
        // Provide link to modified file
        $fileLink = 'https://docs.google.com/spreadsheets/d/1iazMmordxyAdktHm8RzSSp1CDsMLG8rR4q6avD9342E/edit#gid=2037114772';
        echo '<script>window.location.href = "'.$fileLink.'";</script>';
        exit;
    } else {
        // Authentication failed
        echo '<script>alert("Invalid brand name or password. Please try again.");</script>';
    }
}
?>
