<?php    
	require_once("JeuAction.php");

    $action = new JeuAction();	
    $data = $action->execute();

	echo json_encode($data);