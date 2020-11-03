<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fullstackeletro";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Aconexão de BD falhou: " . mysqli_connect_error());
}

if(isset($_POST['nome']) && isset ($_POST['msg'])){
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
</head>

<body>
    <?php
    include_once('menu.html');

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


    <form action="contato.php" method="post">
        <h4>Nome:</h4>
        <input type="text" name="nome" width="400px">
        <h4>Mensagem:</h4>
        <textarea type="text" name="msg" width="500px"></textarea><br/>
        <input type="submit"></input>
    </form><br/><br/>

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


    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br>

    <hr>

    <div class="formas_pagamento">
        <p>Formas de Pagamento</p>
        <img src="imagens_fullstack/formapag.jpg" width="400px" height="80px" alt="Formas de Pagamento">
    </div>

    <footer>&copy; Thamirez Bastos</footer>

</body>

</html>