
import React from 'react';

const InfoContato = () => {
    return (
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

    )
}

export default InfoContato;