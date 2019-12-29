<?php
        include "config.php";
        if(!isset($_POST["id"])) {
            $res["state"]="send id please";
            echo json_encode($res);    
        }

        $id = $_POST["id"];
        $sql="SELECT * FROM `item` WHERE id=$id";
        $result=$connect->query($sql);
        if(mysqli_num_rows($result))
        {
            while($row=mysqli_fetch_assoc($result))
            {
                $connect=null;
                $res["state"]="success";
                $res["data"]=$row;
                echo json_encode($res);
            }//while
        }//rowCount
        else
        {
            $connect=null;
            $res["state"]="There is no data";
            echo json_encode($res);    
        }

?>