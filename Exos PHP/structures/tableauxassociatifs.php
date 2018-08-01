<?php
$activites = array("Lundi"=>"Php","Mardi"=>"Javascript", "Mercredi"=>"Typescript","Jeudi"=>"Angular","Vendredi"=>"SQL","Samedi"=>"Python","Dimanche"=>"Tout");
//deux dimensions
$pierre = array("1"=>"Php","2"=>"Javascript","3"=>"Python");
$paul = array("1"=>"Javascript","2"=>"Css","3"=>"Php");
$jacques = array("1"=>"C++","2"=>"Angular","3"=>"Ruby");
$preferences = array();
$my = "Moi";
var_dump($activites . $pierre . $paul . $jacques . $preferences);


foreach ($pierre as $key => $val) {
    echo "<p>" . $key . " : " . $val . "</p>";
    }


foreach ($paul as $key => $val) {
    echo "<p>" . $key . " : " . $val . "</p>";
    }

foreach ($jacques as $key => $val) {
echo "<p>" . $key . " : " . $val . "</p>";
}
?> 