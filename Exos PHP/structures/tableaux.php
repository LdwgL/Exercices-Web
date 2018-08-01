
<?php
$tab = array(15,22);
$tabCrochets = [67,45];
var_dump($tab);
var_dump($tabCrochets);
$jours = array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche");
unset($jours[6]);

var_dump($jours);
var_dump($jours[0]);
var_dump($jours[1]);
var_dump($jours[2]);
var_dump($jours[3]);
var_dump($jours[4]);
var_dump($jours[5]);
var_dump($jours[6]);
$tabs = array(34,45);
var_dump($tabs);


// $mois = array_values($mois);
$mois = array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout");
unset($mois[4]);
unset($mois[5]);
var_dump($mois);

?>