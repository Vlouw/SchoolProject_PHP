<?php    
	require_once("GetState.php");

    $action = new GetState();	
    $data = $action->execute();

	echo json_encode($data);