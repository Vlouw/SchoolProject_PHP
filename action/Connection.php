<!--    
Projet - Web3
Henri-Paul Bolduc
Connection.php

Pour la validation des informations usagers et demande de connection a l'API
-->


<?php
	require_once("action/CommonAction.php");

	class Connection extends CommonAction {
	
		public function __construct() {
			parent::__construct();			
		}
	
		protected function executeAction() {
			if ( isset($_POST["username"]) && isset($_POST["password"]) ) {
				$this->logIn();
			} else if ( isset($_POST["pratique"]) ){
				$this->commencerPartie("games/auto-match", "TRAINING");
			} else if ( isset($_POST["jouer"]) ){
				$this->commencerPartie("games/auto-match", "PVP");
			} else if ( isset($_POST["guide"]) ){
				header("location:./guide.php");
			} else {
				$_SESSION['msg'] = '';
			}
		}

		public function logIn() {
			$data = [];
			$data["username"] = $_POST["username"];
			$data["password"] = $_POST["password"];
			
			$result = parent::callAPI("signin", $data);
			
			if ($result == "INVALID_USERNAME_PASSWORD") {
				$_SESSION['msg'] = 'Infos Invalides';
			
			} else {
				// Pour voir les informations retournées : var_dump($result);exit;
				$_SESSION['msg'] = '';
				$_SESSION["username"] = $_POST["username"];
				$_SESSION["password"] = $_POST["password"];
				$_SESSION['key'] = $result->key;				
				header("location:./accueil.php");
    			exit;
			}
		}

		public function commencerPartie($service, $type) {
			$data = [];
			$data["key"] = $_SESSION["key"];
			$data["type"] = $type;
			
			$result = parent::callAPI($service, $data);

			if ($result == "JOINED_PVP") {
				$_SESSION['msg'] = 'Vous avez joint une partie PVP';
				$join = TRUE;
			
			} else if ($result == "CREATED_PVP") {
				$_SESSION['msg'] = 'Vous avez créé une partie PVP';
				$join = TRUE;
			
			} else if ($result == "JOINED_TRAINING") {
				$_SESSION['msg'] = 'Vous avez joint une partie contre un IA';
				$join = TRUE;

			} else if ($result == "INVALID_KEY") {
				$_SESSION['msg'] = 'Clé Invalide';
				$join = FALSE;

			} else if ($result == "INVALID_GAME_TYPE") {
				$_SESSION['msg'] = 'Type Invalide';
				$join = FALSE;

			} else if ($result == "DECK_INCOMPLETE") {
				$_SESSION['msg'] = 'Deck incomplet';
				$join = FALSE;
			
			} else if ($result == "MAX_DEATH_THRESHOLD_REACHED") {
				$_SESSION['msg'] = 'Fin de votre tournoi';
				$join = FALSE;
			
			} else {
				$_SESSION['msg'] = '';
				$join = FALSE;
			}

			if ($join) {			
				header("location:./jeu.php");
    			exit;
			}
		}
	}