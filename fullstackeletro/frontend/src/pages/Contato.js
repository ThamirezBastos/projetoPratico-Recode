import React from 'react';

const Comentarios = () => {
    const [comentario, setComentarios] = React.useState([])

    React.useEffect(async () => {
        const url = " http://projetos/fullstackeletro/backend/coment.php";
        const response = await fetch(url);
        setComentarios(await response.json());
    }, [])

    return (

        <div className="container mt-5">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text"><img src="./img/email.png" width="30px" />  contato@fullstackeletro.com</p>

                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">

                            <a class="card-text" href="https://wa.me/5511999999999"><img src="./img/whatsapp.png" width="30px" />  (11) 99999-9999</a>

                        </div>
                    </div>
                </div>
            </div>

            <form action="#" method="post">
                <div className="form-group mt-5">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="text" name="nome" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu nome" />
                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu contato.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1"></label>
                    <input type="text" name="msg" className="form-control" id="exampleInputPassword1" placeholder="Sua Mensagem" />
                </div>
                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
            <div className="row">
                <div className="col-12 ">
                    {comentario.map(element => {
                        return (
                            <div key={element.id} className="card mt-5 pl-2 shadow">
                                <p> <b>Data: </b>{element.data}</p> <br />
                                <p><b>Nome:</b> {element.nome} </p>
                                <p><b>Comentário:</b> {element.msg} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>









    );
}

export default Comentarios;