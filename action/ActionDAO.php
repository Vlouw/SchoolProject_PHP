<!--    
Projet - Web3
Henri-Paul Bolduc
actionDAO.php

Action requise pour utiliser le DAO
-->

<?php
    include_once ("dao/connectionDAO.php");
    include_once ("dao/ArticleDAO.php");
    include_once ("dao/UsagerDAO.php");
    
    class ActionDAO {
        private $usager;   
        
        public function __construct() {
            $this->usager = ActionDAO::logIn();
            
            if (isset($_POST["btn-selection"]) && isset($_POST["article-usager"]) && !isset($_POST["sauvegarder"])) {                
                $_SESSION["article-ID"] = "";
                ActionDAO::setArticle();
            } else if (isset($_POST["sauvegarder"]) && $_POST["article-titre"] != "" && $_POST["article-texte"]  != "") {             
                ActionDAO::addArticleToDAO();
                $_SESSION["article-ID"] = "";
                $_SESSION["article-titre"] = "";
                $_SESSION["article-texte"] = "";
                $_SESSION["article-commentaire"] = "";
            } else if (isset($_POST["effacer"]) && $_SESSION["article-ID"] != "") {                
                ActionDAO::removeArticle();
                $_SESSION["article-ID"] = "";
                $_SESSION["article-titre"] = "";
                $_SESSION["article-texte"] = "";
                $_SESSION["article-commentaire"] = "";
            } else if (isset($_POST["ajouter-commentaire"])) {
                var_dump("ajouter-commentaire");
            } else {
                $_SESSION["article-ID"] = "";
                $_SESSION["article-titre"] = "";
                $_SESSION["article-texte"] = "";
                $_SESSION["article-commentaire"] = "";  
            }
        }
        
        // LogIn
        public function logIn() {
            $username = $_SESSION["username"];
            $password = $_SESSION["password"];
            
            $db = ConnectionDAO::getConnection();

            $stmt = $db->prepare("SELECT * FROM usager WHERE username = ?");
            $stmt->bindParam(1, $username);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();

            $id = [];
            $pass = [];
            while($row = $stmt->fetch()) {
                $id = $row["id"];
                $pass = $row["password"];
            }

            ConnectionDAO::closeConnection();
            
            // Si existe et bon password, créer l'usager, sinon l'ajouter à la database
            if ($pass == hash('sha512', $password))
                return new UsagerDAO($id, $username);
            else               
                return ActionDAO::createAccount();
        }
        // -----------------------------------------------------------------------

        // Créer un usager
        public function createAccount() {
            $username = $_SESSION["username"];
            $password = $_SESSION["password"];
            
            $db = ConnectionDAO::getConnection();

            $stmt = $db->prepare("SELECT username FROM usager WHERE username = ?");
            $stmt->bindParam(1, $username);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();

            $usernameExiste = [];
            while($row = $stmt->fetch()) {
                $usernameExiste = $row["username"];
            }

            // Si l'usager existe déjà mais mauvais password, donner le message d'erreur à l'usager
            // Sinon l'ajouter à la DB
            if ($usernameExiste != null) {
                ConnectionDAO::closeConnection();
                return new UsagerDAO(-1, "Usager existant avec mauvais mot de passe");
            } else {
                $pass = hash('sha512', $password);
                $requete = "INSERT INTO usager(username, password) VALUES ('$username', '$pass')";
                $db->exec($requete);

                ConnectionDAO::closeConnection();
                return ActionDAO::logIn();
            }
        }
        // -----------------------------------------------------------------------

        // Retourner tous les articles personnels
        public function getArticlePerso() {
            
            $id_createur = $this->usager->getID();

            $db = ConnectionDAO::getConnection();

            $stmt = $db->prepare("SELECT * FROM article WHERE id_createur = ?");
            $stmt->bindParam(1, $id_createur);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();
 
            $articles = [];
            while ($row = $stmt->fetch()) {
                if ($row["show"] == 1) {
                    $articles[] = new ArticleDAO(
                        $row["id"], $row["titre"]
                    );
                }
            }

            ConnectionDAO::closeConnection();
            return $articles;
        }
        // -----------------------------------------------------------------------

        // Retourner les informations d'un article
        public function setArticle() {            
            if ($_SESSION["article-ID"] == "" && isset($_POST["article-usager"])) {
                $id = $_POST["article-usager"];                
            } else if ($_SESSION["article-ID"] != "") {
                $id = $_SESSION["article-ID"];
            }

            $db = ConnectionDAO::getConnection();

            $stmt = $db->prepare("SELECT * FROM article WHERE id = ?");
            $stmt->bindParam(1, $id);
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();
 
            if ($row = $stmt->fetch()) {
                $_SESSION["article-ID"] = $row["id"];
                $_SESSION["article-titre"] = $row["titre"];
                $_SESSION["article-texte"] = $row["texte"];
                }
 
            ConnectionDAO::closeConnection();           
        }
        // -----------------------------------------------------------------------

        // Ajouter l'article à la DAO
        public function addArticleToDAO() {

            $id_createur = $this->usager->getID();
            $titre = $_POST["article-titre"];
            $texte = $_POST["article-texte"];
            
            $db = ConnectionDAO::getConnection();

            if ($_SESSION["article-ID"] != "") {
                $id = $_SESSION["article-ID"];
                $requete = "UPDATE article SET titre = '$titre', texte = '$texte' WHERE id = '$id'";                
            } else {
                $requete = "INSERT INTO article(titre, texte, id_createur) VALUES ('$titre', '$texte', '$id_createur')";   
            }

            $db->exec($requete);
            ConnectionDAO::closeConnection();
        }
        // -----------------------------------------------------------------------

        // Mettre 2 à l'artice pour ne plus l'afficher ds la page
        public function removeArticle() {
            $value = 2;
            
            $db = ConnectionDAO::getConnection();

            $id = $_SESSION["article-ID"];
            $requete = "UPDATE `article` SET `show` = '2' WHERE `id` = '$id'";                

            $db->exec($requete);
            ConnectionDAO::closeConnection();
        }
        // -----------------------------------------------------------------------
        
        public function getUsager() { return $this->usager; }
    }