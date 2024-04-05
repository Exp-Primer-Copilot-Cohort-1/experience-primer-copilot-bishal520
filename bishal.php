<?php

// Your PHP code goes here
// Login logic
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate the username and password
    if ($username === 'admin' && $password === 'password') {
        // Successful login
        echo 'Welcome, admin!';
    } else {
        // Invalid credentials
        echo 'Invalid username or password';
    }
}
function myFunction() {
    echo "Hello World!";
}
?>