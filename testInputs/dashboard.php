<?php

function OpenConnection()
{
    $dbhost = "studmysql01.fhict.local";
    $dbuser = "dbi402965";
    $dbpass = "kwist";
    $dbname = "dbi402965";

    $conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname);
    if (!$conn)
    {
        echo "Connection failed";
    }

    return $conn;
 }

function CloseCon($conn)
 {
 $conn -> close();
 }

 function SaveScore(){
    $scoreToSave = json_decode($POST['data']);
    $sql = "INSERT INTO leader_board (score) VALUES (scoreToSave)";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    $sql1 = "select score from leader_board order by score limit 10";
   $result1 = mysqli_querry(conn, result);
 }
 
?>
