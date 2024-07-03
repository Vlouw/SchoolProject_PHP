<?php
	require_once("CommonAction.php");

	class GetState extends CommonAction {
	
		public function __construct() {
			parent::__construct();			
		}
	
		protected function executeAction() {
			$data = [];
			$data['key'] = $_SESSION['key'];
			
			$result = parent::callAPI('games/state', $data);

			return $result;
		}
	}