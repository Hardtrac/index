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
    <?php
// Assuming you have a MySQL database set up with a table called 'data' containing a 'brand' column

// Connect to the database
$servername = "index.html";
$username = "vinod";
$password = "1234";
$dbname = "vinod";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to select data for the vinod brand
$sql = "SELECT * FROM data WHERE brand = 'vinod'";
$result = $conn->query($sql);

// Display data
if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Brand: " . $row["brand"]. " - Other data: " . $row["other_data"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>

?>
