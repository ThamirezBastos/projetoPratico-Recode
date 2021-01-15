import express from "express";
import cors from "cors";
import mysql from "mysql";
const server = express();
server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
})

server.get("/produtos", (req, res) => {
    connection.query("Select * from produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});


server.get("/contato", (req, res) => {
    connection.query("SELECT * FROM comentarios", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

server.post('/contato', (req, res) => {
    const { nome,msg } = req.body
    connection.query(`INSERT INTO comentarios(nome,msg) VALUES ('${nome}','${msg}')`, (error, result) => {
        if(error) {
            res.json({
                message: "Erro ao inserir comentario!"
            })
        } else {
            res.status(201).json({
                message: "Mensagem Cadastrada com sucesso!"
            })
        }
    })
})

server.listen(3333)