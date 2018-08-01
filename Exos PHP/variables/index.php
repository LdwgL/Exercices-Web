<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <title>PHP Echo</title>
</head>
<body>
<div>
    <?php 
        //Paragraphe de test//
        $mt= "<center><h1><strong>\rCombien font 2 multiplié par 4?</strong>\n</h1></center>";
        $mn = 2 * 4;
        $mk = "<strong>" . $mg . "</strong>";
        $mg = "<strong><em>Pierre";
        $ms = " & Ludwig</em></strong>";
        $a = 2;
        $b = 4;
        echo"<font style=\"font-family: 'Ubuntu', sans-serif;\">$mt </font>";
        echo "<center>$mn<center>";

        //Paragraphe de test//

        $hello = "<center><h1>Hello";
        $world = "\nWorld\r \r</h1></center>";
        $v = "<center>Qu'est-ce que j'en ai marre de cette phrase.\r \r</center>";
        $h = "<center>Et si on changeait un peu ?\r \r</center>";
        $ss = "<i><center>Bonjour le peuple c'est peut-être mieux :)<br><br></center></i>";
        $ff = "<h1><center><strong>Et si on calculait un montant hors taxe avec la TVA?<br><br></strong></center></h1>";


        //Variables numériques//
        
        $j = "<center><h1><strong>Combien font 12 multiplié par 4?<br><br></strong></h1></center>";
        $w = "<center>". 12 * 4 ."</center>";
        $d = "<center>Bravo!<br><br></center>";
        $texte = "<center>Montant hors taxe =</center>";
        $texte2 = "TVA = ";
        $texte3 = "Total = ";
        $montantHt =100;
        $tva =1.19;
        $Ttc = $montantHt * $tva;
        echo  $hello . $world . $v . $h . $ss . $j . $w . "\n" . $d . $ff . $texte . $montantHt . "<br><br>" . $texte2 . $tva . "<br><br>". $texte3 . $Ttc . "\r" . $mg . "</em><em>" . $ms . "</em></p><p></p>";
        ?>
    </div>
</body>
</html>