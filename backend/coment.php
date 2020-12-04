<?php

require "./Models/comentario.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$comentarios = Comentario::getAll();

echo json_encode($comentarios);