<?php
	require_once("CommonAction.php");

	class JeuAction extends CommonAction {
	
		public function __construct() {
			parent::__construct();			
		}
	
		protected function executeAction() {
            $data = [];
			$data['key'] = $_SESSION['key'];
            $data["type"] = $_POST["type"];
            
            if (isset($_POST["uid"]))
                $data["uid"] = $_POST["uid"];

            if (isset($_POST["targetuid"]))
                $data["targetuid"] = $_POST["targetuid"];

            $result = parent::callAPI('games/action', $data);

			return $result;
	}
}