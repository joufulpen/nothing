<?php
    require("mysqlConnect.php");
    $user = $_POST['logUser'];
    $psd = $_POST['logPsd'];

    $sql = "SELECT * FROM `solifereg` WHERE phonenum = '$user'";
   

    $result = $conn -> query($sql);
    $row = $result -> fetch_all(MYSQLI_ASSOC);
    if($row[0]['password']===$psd){
        echo '登录成功';
    }
    else{
       
        echo '用户名或密码错误!';
    }
    $conn -> close();




?>