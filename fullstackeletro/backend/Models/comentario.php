  
<?php

require "./Connection.php";

class Comentario
{
    public $id;
    public $nome;
    public $msg;
    public $dia;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM comentarios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
