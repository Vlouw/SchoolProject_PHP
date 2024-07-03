<!-- 
Music and images ©Nintendo
-->

<!--    
Projet - Web3
Henri-Paul Bolduc
guide.php

Page guide du site
-->

<?php
    require_once("action/actionDAO.php");
    session_start();

    $actionDAO = new ActionDAO();
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magix LogIn</title>        
        <link rel="stylesheet" href="css/global.css">
        <link rel="icon" href="img/favicon.png" type="image/png" />
    </head>
    <body>
        <form action="#" method="POST" id="guide-block">
            <fieldset>                
                <legend>Bonjour, <?= $actionDAO->getUsager()->getUsername() ?> - Consulter vos articles</legend> 
                <div class="input-block-guide">                    
                    <label form="article-usager">Sélectionnez un de vos articles :</label>             
                    <select name="article-usager">
                        <!-- // Passez à travers la liste et retourner le id -->
                        <?php
                            foreach ($actionDAO->getArticlePerso() as $article) {
                                ?>
                                    <option value="<?= $article->getID()?>"><?= $article->getTitre() ?></option>
                                <?php
                            }
                        ?>
                    </select>
                    <input type="submit" class="center-button-guide" name="btn-selection" value="Afficher">                    
                </div>
                <div id="article-block-perso" class="article-block"> 
                    <div class="article-block-titre">
                        <textarea name="article-titre" id="article-titre" class="article-texte" placeholder="Titre: 20 caractères max"><?= $_SESSION["article-titre"] ?></textarea>
                        <input type="submit" class="center-button-guide" name="nouvel-article" value="Nouvel Article">
                        <input type="submit" class="center-button-guide" name="sauvegarder" value="Sauvegarder" onclick="sauvegarder()">
                        <input type="submit" class="center-button-guide" name="effacer" value="Effacer">                        
                    </div>

                    <div class="article-block-texte-commentaire">
                        <div class="article-block-texte">
                            <textarea name="article-texte" id="article-texte" class="article-texte" placeholder="Article"><?= $_SESSION["article-texte"] ?></textarea>
                            <div id="article-commentaire" class="article-texte"><?= $_SESSION["article-commentaire"] ?> Commentaire - Non fonctionnel</div>
                        </div>
                        <div class="article-block-commentaire">
                            <input type="submit" id="ajouter-commentaire" class="center-button-guide" name="ajouter-commentaire" value="Ajouter commentaire"> 
                            <textarea name="article-commentaire-new" id="article-commentaire-new" class="article-texte" placeholder="Manquer de temps, les commentaires ne fonctionnent pas"></textarea>
                        </div>
                    </div>                    
                </div>                
            </fieldset>
        </form>
    </body>
</html>