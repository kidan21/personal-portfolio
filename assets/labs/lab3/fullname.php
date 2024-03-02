<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Name</title>
</head>
<body>

<?php
    $first_name = $_POST['fname'];
    $last_name = $_POST['lname'];
    $full_name = $first_name . " " . $last_name;
?>

<h1>Full Name: <?php echo $full_name; ?></h1>


<form action="fullname.php" method="post">
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" name="lname"><br><br>
    <button type="submit" value="Submit"> Submit</button>
</form>
</body>
</html>