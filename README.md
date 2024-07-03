# Magix

Henri-Paul Bolduc
0240054

- index.php
	- Page 1 du site pour la connection au serveur

- accueil.php
	- Page 2 du site pour le clavardage et demarrer une partie

- jeu.php
	- Page jeu du site

- guide.php
	- Page guide du site

- action
	- ajax-action-jeu.php
		- Permets les requête AJAX et redirige vers JeuAction.php

	- ajax-state.php
		- Permets les requête AJAX et redirige vers GetState.php

	- CommonAction.php
		- Abstract class qui sert pour la connection au serveur et appeler l'API

	- Connection.php
		- Class extend CommonAction
		- ExecuteAction valide ce qu'on veut faire connection au serveur, demarrer une partie, aller au guide
		- logIn pour la connection au serveur
		- commencerPartie pour jouer au jeu

	- GetState.php
		- Class qui retourne l'état du jeu à la demande AJAX

	- JeuAction.php
		- Class qui envoie un action au serveur selon une demande AJAX

	- ActionDAO.php
		- Class qui gère les input/output de la base de donnée

- css
	- global.css
		- Mise en page du site web

- dao
	- script.sql
		- Fichier pour la création de la database mySQL

	- constanteDAO.php
		- Retourne les infos pour la connection à mySQL

	- connectionDAO.php
		- Gestion de la connection ou deconnection de mySQL

	- CommentaireDAO.php
		- Classe pour la création d'un objet commentaire (non intégré)

	- UsagerDAO.php
		- Classe pour création d'un objet usager

	- ArticleDAO.php
		- Classe pour création d'un objet article

- img
	- Dossier qui contient tous les images du site

- img_carte
	- Dossier qui contient tous les images pour les cartes du jeu Magix

- js
	- Clavardage.js
		- Gestion de l'affichage du clavardage

	- jeu.js
		- Gestion de l'affichage du jeu Magix ainsi que les cliques usagers et les demandes AJAX vers l'API

- sound
	- Dossier qui contient les chansons

- src
	- Dossier pour les animations

	- animation-index.js
		- Gestion de l'affichage de megaman ds l'index

	- animation-accueil.js
		- Gestion de l'affichage des 4 bonhommes ds l'accueil

	- TiledImage.js
		- Code source de Web2 pour animer des images

	- sprites
		- Dossier qui contient les .js pour la gestion de l'animation et sa position ds l'écran








