<?php
    class CommentaireDAO {
        private $id;        
        private $texte;
        private $username;

        public function __construct($id, $texte, $username)
        {
            $this->id = $id;
            $this->texte = $texte
            $this->username = $username;
        }

        public function getID() { return $this->id; }
        public function getTexte() { return $this->texte; }
        public function getUsername() { return $this->username; }
    }