<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fullstackeletro";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Aconexão de BD falhou: " . mysqli_connect_error());
}
?>



<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Full Stack Eletro</title>
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    <script src="js/script.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <?php
    include_once('menu.php');

    ?>

    <h2 class="text_index">Produtos</h2>

    <hr>
    <div class="menu_produtos" style="height: 200vh">
        <h3>Categorias</h3>
        <ul>
            <li onclick="exibirTodos()">Todos (12)</li>
            <li onclick="exibirCateg('geladeira')">Geladeira (3)</li>
            <li onclick="exibirCateg('fogao')">Fogão (2)</li>
            <li onclick="exibirCateg('microondas')">Micro-ondas (3)</li>
            <li onclick="exibirCateg('lavaroupas')">Máquina de lavar (2)</li>
            <li onclick="exibirCateg('lavaloucas')">Lava-louças (2)</li>
        </ul>
    </div>
    <?php
    $sql = "select * from produtos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($rows = $result->fetch_assoc()) {
    ?>
            <div class="produtos" id="<?php echo $rows["categoria"]; ?>">
                <img src="<?php echo $rows["nomeimagem"]; ?>" width="140px" onmouseover="destaque(this)" onmouseout="destaque(this)">
                <br>
                <p><?php echo $rows["descricao_produto"]; ?></p>
                <div>
                    <hr>
                    <p class="preco_ant">R$ <?php echo $rows["preco_inicial"]; ?></p>
                    <p class="preco_final">R$ <?php echo $rows["preco_desconto"]; ?></p>
                </div>
            </div>
    <?php
        }
    } else {
        echo "Nenhum produto cadastrado";
    }
    ?>







    <br><br><br><br><br>

    <hr>


    <div class="formas_pagamento">
        <p>Formas de Pagamento</p>
        <img src="imagens_fullstack/formapag.jpg" alt="Formas de Pagamento">
    </div>

    <footer>&copy; Thamirez Bastos</footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>