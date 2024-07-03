<?php
    include_once ("dao/constanteDAO.php");
    
    // Code source du cours
    class ConnectionDAO {
        private static $db;

        public static function getConnection() {
            if(!isset(ConnectionDAO::$db)) {
                ConnectionDAO::$db = new PDO(
                    'mysql:host='. DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS
                );
        
                ConnectionDAO::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }

            return ConnectionDAO::$db;
        }

        public static function closeConnection() {
            if (isset(ConnectionDAO::$db)) {
                ConnectionDAO::$db = null;
            }
        }
    }