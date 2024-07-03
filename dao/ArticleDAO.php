<?php
    class ArticleDAO {
        private $id;
        private $titre;

        public function __construct($id, $titre)
        {
            $this->id = $id;
            $this->titre = $titre;
        }

        public function getID() { return $this->id; }
        public function getTitre() { return $this->titre; }
    }