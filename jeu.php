<!-- 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
Carte from : devianart.com
-->

<!--    
Projet - Web3
Henri-Paul Bolduc
jeu.php

Page jeu du site
-->

<?php
    session_start();
?>

<script>
    let msg = '<?= $_SESSION["msg"] ?>'
</script>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magix Jeu</title>
        <link rel="stylesheet" href="css/global.css">
        <link rel="icon" href="img/favicon.png" type="image/png" />
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/clavardage.js"></script>
        <script src="js/jeu.js"></script>  
    </head>

    <body>
        <div id="animation-block-jeu" class="animation-block">
            <div id="jeu-msg">
                <p id="jeu-msg-texte"></p>
            </div>
            <div id="jeu-fin">
                <p id="jeu-fin-texte"></p>
            </div>
            <div id="bar-ennemi">
                <div id="bar-ennemi-gauche">
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                    <div class="carte"></div>
                </div>
                <div id="frame-ennemi">
                    <div class="vie">
                        <p id="vie-ennemi" class="vie-texte">X</p>
                    </div>
                    <div id="ennemi">
                        <img id="img-ennemi" src="img/ennemi.png" alt="">
                    </div>
                </div>
                <div id="bar-ennemi-droite">
                    <div class="mana">
                        <p id="mana-ennemi" class="mana-texte">X</p>
                    </div>
                    <div class="carte">
                        <p id="carte-restante-ennemi" class="carte-restante-texte">X</p>
                    </div>
                    <div id="info-ennemi" class="infos">
                        <p id="nom-ennemi">Adversaire</p>
                        <p id="type-ennemi">Classe</p>
                        <p id="talent-ennemi">Talent</p>
                    </div>
                </div>
            </div>
            <div id="jeu-centre">
                <iframe id="iframe-jeu" class="input-block" onload="applyStyles(this)"
                    src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
                </iframe>
                <div id="jeu-carte">
                    <div id="jeu-carte-ennemi">
                        <?php
                            for ($i = 0; $i < 7; $i++) {                            
                        ?>
                        <div id="carte-ennemi-<?= $i ?>" class="carte-jouable">
                            <div id="carte-ennemi-gauche-<?= $i ?>" class="carte-mana-vie">
                                <div id="carte-ennemi-mana-<?= $i ?>" class="carte-mana">
                                    <p id="carte-ennemi-mana-texte-<?= $i ?>" class="carte-mana-texte">X</p>
                                </div>
                                <div id="carte-ennemi-vie-<?= $i ?>" class="carte-vie">
                                    <p id="carte-ennemi-vie-texte-<?= $i ?>" class="carte-vie-texte">X</p>
                                </div>
                                <div id="carte-ennemi-att-<?= $i ?>" class="carte-att">
                                    <p id="carte-ennemi-att-texte-<?= $i ?>" class="carte-att-texte">X</p>
                                </div>
                            </div>
                            <div id="carte-ennemi-droite-<?= $i ?>" class="carte-image-texte-attack">
                                <div id="carte-ennemi-image-<?= $i ?>" class="carte-image"></div>
                                <div id="carte-ennemi-texte-<?= $i ?>" class="carte-texte"></div>
                            </div>
                        </div>
                        <?php                           
                        }
                        ?>
                    </div>
                    <div id="jeu-carte-joueur">
                        <?php
                            for ($i = 0; $i < 7; $i++) {                            
                        ?>
                        <div id="carte-joueur-<?= $i ?>" class="carte-jouable">
                            <div id="carte-joueur-gauche-<?= $i ?>" class="carte-mana-vie">
                                <div id="carte-joueur-mana-<?= $i ?>" class="carte-mana">
                                    <p id="carte-joueur-mana-texte-<?= $i ?>" class="carte-mana-texte">X</p>
                                </div>
                                <div id="carte-joueur-vie-<?= $i ?>" class="carte-vie">
                                    <p id="carte-joueur-vie-texte-<?= $i ?>" class="carte-vie-texte">X</p>
                                </div>
                                <div id="carte-joueur-att-<?= $i ?>" class="carte-att">
                                    <p id="carte-joueur-att-texte-<?= $i ?>" class="carte-att-texte">X</p>
                                </div>
                            </div>
                            <div id="carte-joueur-droite-<?= $i ?>" class="carte-image-texte-attack">
                                <div id="carte-joueur-image-<?= $i ?>" class="carte-image"></div>
                                <div id="carte-joueur-texte-<?= $i ?>" class="carte-texte"></div>
                            </div>
                        </div>
                        <?php                           
                        }
                        ?>
                    </div>
                </div>
            </div>            
            <div id="bar-joueur">           
                <div id="input-block-jeu">
                    <button id="clavardage" class="jeu-button">Clavardage</button>
                    <button id="pouvoir-hero" class="jeu-button">Pouvoir du hero</button>
                    <button id="fin-tour" class="jeu-button">Fin du tour</button>
                    <p id="temps-restant">X</button>
                </div>                
                <div id="vie-perso-div" class="vie">
                    <p id="vie-perso" class="vie-texte">X</p>
                </div>
                <div>
                    <div id="mana-carte-perso">
                        <div class="mana">
                            <p id="mana-perso" class="mana-texte">X</p>
                        </div>
                        <div class="carte">
                            <p id="carte-restante-perso" class="carte-restante-texte">X</p>
                        </div>
                    </div>
                    <div id="info-perso" class="infos">
                        <p id="nom-perso"> <?= $_SESSION["username"] ?> </p>
                        <p id="type-perso">Classe</p>
                        <p id="talent-perso">Talent</p>
                    </div>
                </div>
                <div id="jeu-carte-perso">
                    <?php
                        for ($i = 0; $i < 8; $i++) {                            
                    ?>
                    <div id="carte-main-<?= $i ?>" class="carte-jouable">
                        <div id="carte-main-gauche-<?= $i ?>" class="carte-mana-vie">
                            <div id="carte-main-mana-<?= $i ?>" class="carte-mana">
                                <p id="carte-main-mana-texte-<?= $i ?>" class="carte-mana-texte">X</p>
                            </div>
                            <div id="carte-main-vie-<?= $i ?>" class="carte-vie">
                                <p id="carte-main-vie-texte-<?= $i ?>" class="carte-vie-texte">X</p>
                            </div>
                            <div id="carte-main-att-<?= $i ?>" class="carte-att">
                                <p id="carte-main-att-texte-<?= $i ?>" class="carte-att-texte">X</p>
                            </div>
                        </div>
                        <div id="carte-main-droite-<?= $i ?>" class="carte-image-texte-attack">
                            <div id="carte-main-image-<?= $i ?>" class="carte-image"></div>
                            <div id="carte-main-texte-<?= $i ?>" class="carte-texte"></div>
                        </div>
                    </div>
                    <?php                           
                        }
                    ?>
                </div>
            </div>            
        </div>
    </body>
</html>