<?php

require "./Connection.php";

class Produto
{
    public $id_produto;
    public $categoria;
    public $descricao_produto;
    public $preco_inicial;
    public $preco_desc;
    public $imagem;
    public $marca;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM produtos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}