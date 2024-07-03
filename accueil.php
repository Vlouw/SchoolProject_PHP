<!-- 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
-->

<!--    
Projet - Web3
Henri-Paul Bolduc
accueil.php

Page 2 du site pour le clavardage et demarrer une partie
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
        <title>Magix Accueil</title>
        <link rel="stylesheet" href="css/global.css">
        <link rel="icon" href="img/favicon.png" type="image/png" />
        
        <script src="js/clavardage.js"></script>
        <script src="src/TiledImage.js"></script>
        <script src="src/animation-accueil.js"></script>
        <script src="src/sprites/waveman_accueil.js"></script>
        <script src="src/sprites/napalmman_accueil.js"></script>
        <script src="src/sprites/crystalman_accueil.js"></script>
        <script src="src/sprites/gravityman_accueil.js"></script>
    </head>
    <body>
        <div id="animation-block-accueil" class="animation-block">
            <iframe id="iframe-accueil" class="input-block" onload="applyStyles(this)"
                src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
            </iframe>
            <audio class="audio" controls loop autoplay>
                <source src="sound/MM_Bombman_Accueil.wav" type="audio/mpeg">
            </audio>
            <div id="input-block-accueil" class="input-block">
                <form action="" method="post" autocomplete="off">
                    <div>
                        <button id="pratique" class="center-button" name="pratique">Pratique</button>
                        <button id="jouer" class="center-button" name="jouer">Jouer</button>
                        <button id="guide" class="center-button" name="guide">Guide</button>
                        <button id="quitter" class="center-button" name="quitter">Quitter</button>
                        <p id="api-message-accueil" class="api-message"><?= $_SESSION['msg'] ?></p>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>