<?php
    require("mysqlConnect.php");
    $user = $_POST['phone'];
    $psd = $_POST['psd'];

    $sql = "SELECT * FROM `solifereg` WHERE phonenum = '$user'";
  

    $result = $conn -> query($sql);
    $row = $result -> fetch_all(MYSQLI_ASSOC);
    if($row){
        echo 'The phone number already existed';
    }else{
        $sql = "INSERT INTO `solifereg`(`phonenum`,`password`) VALUES ('$user','$psd')";
        $conn -> query($sql);
        echo 'registered successfully';
    }
    $conn -> close();




?>