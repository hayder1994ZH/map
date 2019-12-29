<?php
include "config.php";

if(isset($_POST["nameProdect"]) && isset($_POST["price"]) && isset($_POST["latitude"]) && isset($_POST["longitude"]))
{
    $nameProdect=filter_var($_POST['nameProdect'],FILTER_SANITIZE_STRING);
    $price=filter_var($_POST['price'],FILTER_SANITIZE_STRING);
    $latitude=filter_var($_POST['latitude'],FILTER_SANITIZE_STRING);
    $longitude=filter_var($_POST['longitude'],FILTER_SANITIZE_STRING);

    $connect->autocommit(TRUE); 
    $sql="INSERT INTO `item`(`name_prodect`, `price`, `latitude`, `longitude`) VALUES ('$nameProdect','$price','$latitude','$longitude')";
    if($connect->query($sql))
        {
            $itemid = $connect->insert_id;
            $res["itemId"]=$itemid;
            echo json_encode($res);
        }
    } 
    else {
        $res["state"]="There is no data";
        echo json_encode($res);
    }

    ?>