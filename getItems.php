<?php
    include "config.php";

    $sql="SELECT * FROM `item` ";
    $result=$connect->query($sql);
    if(mysqli_num_rows($result))
    {
        while($row=mysqli_fetch_assoc($result))
        {
          $column=null;
          $column["id"]=$row["id"];
          $column["name_prodect"]=$row["name_prodect"];
          $column["price"]=$row["price"];
          $column["latitude"]=$row["latitude"];
          $column["longitude"]=$row["longitude"];
          $rowArr[]=$column;
        }//while
        $connect=null;
        $res["state"]="success";
        $res["data"]=$rowArr;
        echo json_encode($res);   
    }//rowCount
    else
    {
        $connect=null;
        $res["state"]="There is no data";
        echo json_encode($res);    
    }
?>