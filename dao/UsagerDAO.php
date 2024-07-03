<?php
    class UsagerDAO {
        private $id;
        private $username;

        public function __construct($id, $username)
        {
            $this->id = $id;
            $this->username = $username;
        }

        public function getID() {
            return $this->id;
        }

        public function getUsername() {
            return $this->username;
        }
    }