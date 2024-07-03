/*    
Projet - Web3
Henri-Paul Bolduc
script.sql

Script SQL pour le guide
*/

/* Ajouter ALTER TABLE seulement si reset apres premiere creation*/
ALTER TABLE article DROP CONSTRAINT article_id_createur;
ALTER TABLE commentaire DROP CONSTRAINT commentaire_id_article;
/*---------------------------------------------------------------*/

DROP TABLE IF EXISTS usager;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS commentaire;

CREATE TABLE `usager` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(256) NOT NULL DEFAULT '1',    
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `article` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`titre` VARCHAR(20) NOT NULL,
	`texte` varchar(21844) NOT NULL,
	`show` TINYINT UNSIGNED DEFAULT '1',
	`id_createur` INT NOT NULL,
	PRIMARY KEY (`id`),
    CONSTRAINT article_id_createur FOREIGN KEY (`id_createur`) REFERENCES usager(id)
) ENGINE = InnoDB;

CREATE TABLE `commentaire` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`texte` varchar(21844) NOT NULL,
	`username` VARCHAR(255) NOT NULL,
	`id_article` INT NOT NULL,
	PRIMARY KEY (`id`),
    CONSTRAINT commentaire_id_article FOREIGN KEY (`id_article`) REFERENCES article(id)
) ENGINE = InnoDB;