import React from 'react';


function Loja() {
  return (
    <>
      <div className="container mt-3">
        <h2>Nossas Lojas</h2>
        <div className="card-group row mt-3">
          <div className="card col-4">
            <img src="./img/rio.jpg" className="card-img-top mt-3" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Rio de Janeiro</h5>
              <p className="card-text"> <p>Escadaria da Lapa, 958</p>
                <p>Centro</p>
                <p>(21) 4444-4444</p>
              </p>
            </div>
          </div>

          <div className="card col-4">
            <img src="./img/sp.png" className="card-img-top mt-3" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">São Paulo</h5>
              <p className="card-text"> <p>Avenida Paulista, 958</p>
                <p>3° Andar</p>
                <p>Jardins</p>
                <p>(11) 4444-4444</p>
              </p>
            </div>
          </div>
          <div className="card col-4">
            <img src="./img/santa.jpg" className="card-img-top mt-3" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Santa Catarina</h5>
              <p className="card-text"><p>Rua Major Ávila, 370</p>
                <p>VIla Mariana</p>
                <p>(47) 5555-5555</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>







  );
}

export default Loja;