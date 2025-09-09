<?php
  /*$x=['abc','def','ghi']; //indexed

  echo "<ul>";
  for($i=0;$i<count($x);$i++){
    echo "<li>".$x[$i]."</li>";
  }
  echo "</ul>";

  $arr=["id"=>1, "name"=>"yash", "age"=>22]; //associative array

  foreach($arr as $k=>$v){
    echo $k.":-".$v." ";
  }                          */

    //multidimensional array
    $arr=[
      ["id"=>1, "name"=>"yash", "age"=>22],
      ["id"=>2, "name"=>"ram", "age"=>23],
      ["id"=>3, "name"=>"shyam", "age"=>24]
    ];
    foreach($arr as $a){
      foreach($a as $k=>$v){
        echo $k.":-".$v." ";
      }
      echo "<br>";
    }
    
?>