<?php

require "./Models/Comentario.php";

$comentarios = new Comentario;
$comentarios->nome = $_POST['nome'];
$comentarios->msg = $_POST['msg'];

$validate = $comentarios->registerComment(); 

if($validate == true) {
    echo json_encode(true);
}else{
    echo json_encode(false);
}