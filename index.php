<!-- 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
-->

<!--    
Projet - Web3
Henri-Paul Bolduc
index.php

Page 1 du site pour la connection au serveur
-->

<?php
    require_once("action/Connection.php");

    $action = new Connection();
    $action->execute();
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magix LogIn</title>        
        <link rel="stylesheet" href="css/global.css">
        <link rel="icon" href="img/favicon.png" type="image/png" />
        <script src="src/TiledImage.js"></script>
        <script src="src/animation-index.js"></script>
        <script src="src/sprites/megaman_index.js"></script>        
    </head>
    <body>
        <div id="animation-block-index" class="animation-block">
            <audio class="audio" loop autoplay controls>
                <source src="sound/MM_MainTheme_Index.mp3" type="audio/mpeg">
            </audio>
            <div id="input-block-index" class="input-block">
                <form action="" method="post" autocomplete="off">
                    <div>                                           
                        <div><input type="text" name="username" placeholder="Nom d'usager" required></div>
                        <div><input type="password" name="password" placeholder="Mot de passe" required></div>
                        <button id="connexion" class="center-button">Connexion</button>
                        <p id="api-message-index" class="api-message"><?= $_SESSION['msg'] ?></p> 
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>