<?php
	session_start();

	abstract class CommonAction {	
		public function __construct() {}
		
		public function execute() {
			if (isset($_POST['quitter'])) {				
				if (isset($_SESSION['key'])) {
					$data = [];
					$data['key'] = $_SESSION['key'];

					$result = $this->callAPI("signout", $data);
				}

				session_unset();
				session_destroy();
				header("location:./index.php");
    			exit;
			}			

			return $this->executeAction();
		}
		
		abstract protected function executeAction();
		
		public function callAPI($service, array $data) {
			$apiURL = "https://magix.apps-de-cours.com/api/" . $service;
			$options = array(
				'http' => array(
				'header' => "Content-type: application/x-www-form-urlencoded\r\n",
				'method' => 'POST',
				'content' => http_build_query($data)
				)
			);
			
			$context = stream_context_create($options);
			$result = file_get_contents($apiURL, false, $context);
			
			if (strpos($result, "<br") !== false) {
				var_dump($result);
				exit;
			}
			
			return json_decode($result);
			}
	}