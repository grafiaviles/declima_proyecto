<?php
// Enter your database connection here
$hostname = "localhost";
$username = "root";
$password = "";
 
// Connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
	or die("Unable to connect to MySQL");

// Select a database to work with
$selected = mysql_select_db("tiva_testimonials", $dbhandle) 
	or die("Could not select database");

// Select timetables table
$result = mysql_query("SELECT * FROM testimonials");

//fetch tha data from the database 
$testimonials = array();
while ($row = mysql_fetch_array($result)) {
	$testimonial = new stdClass();
	$testimonial->name = $row{'name'};
	$testimonial->image = $row{'image'};
	$testimonial->job = $row{'job'};
	$testimonial->rating = $row{'rating'};
	$testimonial->content = utf8_encode($row{'content'});
	
	array_push($testimonials, $testimonial);
}

echo json_encode($testimonials);
?>