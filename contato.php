<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fullstackeletro";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Aconexão de BD falhou: " . mysqli_connect_error());
}

if (isset($_POST['nome']) && isset($_POST['msg'])) {
    $nome = $_POST['nome'];
    $msg = $_POST['msg'];

    $sql = "insert into comentarios (nome , msg) values ('$nome', '$msg')";
    $result = $conn->query($sql);
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato - Full Stack Eletro</title>
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    <script src="js/script.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <?php
    include_once('menu.php');

    ?>

    <h2 class="text_index">Contato</h2>

    <hr>
    <br><br>


    <table class="contato">
        <tr>
            <td class="contato_info">
            <td><img src="./imagens_fullstack/email.png" width="40px">
                contato@fullstackeletro.com
            </td>
            <td class="contato_info">
            <td><img src="./imagens_fullstack/whatsapp.png" width="40px">
                (11) 99999-9999</td>
            </td>
        </tr>
    </table>

    <!-- 
    <form action="contato.php" method="post">
        <h4>Nome:</h4>
        <input type="text" name="nome" width="400px">
        <h4>Mensagem:</h4>
        <textarea type="text" name="msg" width="500px"></textarea><br />
        <input type="submit"></input>
    </form><br /><br /> -->
    <div class="container">
        <form action="contato.php" method="post">
            <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="text" name="nome" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu nome">
                <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu contato.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="text" name="msg" class="form-control" id="exampleInputPassword1" placeholder="Sua Mensagem">
            </div>
            <button type="submit" class="btn btn-danger">Enviar</button>
        </form>
        <br>
        <div class="container">
            <?php
            $sql = "select * from comentarios";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($rows = $result->fetch_assoc()) {
                    echo "Data: " . $rows['data'] . "<br>";
                    echo "Nome: " . $rows['nome'] . "<br>";
                    echo "Mensagem: " . $rows['msg'] . "<br/><hr/><br/>";
                }
            } else {
                echo "Nenhum comentário enviado";
            }
            ?>
        </div>

        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br>

        <hr>

        <div class="formas_pagamento">
            <p>Formas de Pagamento</p>
            <img src="imagens_fullstack/formapag.jpg" width="400px" height="80px" alt="Formas de Pagamento">
        </div>

        <footer>&copy; Thamirez Bastos</footer>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>