import React from 'react';

const Produtos = () => {
  const [produto, setProduto] = React.useState([])

  React.useEffect(async () => {
    const url = " http://projetos/fullstackeletro/backend/product.php";
    const response = await fetch(url);
    setProduto(await response.json());
  }, [])

  let destaque = (event) => {
    if (event.target.style.width === "260px") {
      event.target.style.width = "120px";
    }
    else {
      event.target.style.width = "260px";
    }
  }

  let redimensiona = (event) => {
    if (event.target.style.width === "120px") {
      event.target.style.width = "260px";
    }
    else {
      event.target.style.width = "120px";
    }
  }

  // function handleClick() {
  //   let elementos = document.getElementById("produtos");
  //   console.log(elementos);
  // }

// let produt = document.getElementById('geladeira');
//   const exibir = () => {
//     for (let i = 0; i < produt.length; i++) {
//       if (produt == produt) {
//         produt[i].style.display = "inline-block";
//     } else {
//         produt[i].style.display = "none";
//     }

//   }
//     console.log(produt);
// }


// function exibirCateg(categoria) {	
//   let elementos = document.getElementsByClassName("produtos");	
//   console.log(elementos[0].id);	
//   console.log(categoria);	
//   for (var i = 0; i < elementos.length; i++) {	
//       console.log(elementos[i].id);	
//       if (categoria == elementos[i].id)	
//           elementos[i].style = "display:inline-block";	
//       else	
//           elementos[i].style = "display:none";	
//   }	
// }


// const exibir = () => {
//   let elementos = document.getElementsByClassName("produtos");

//   for (let i = 0; i < elementos.length; i++) {
//     // console.log(elementos[i].id);
//     // if (categoria == elementos[i].id)	{
//     //       // elementos[i].style = "display:inline-block";
//     // }

//     if (elementos[i].id == 'geladeira') {
//       document.getElementsByClassName('geladeira').style = "background: red"
//     } else {
//       elementos.style = "background: blue"
//     }

//   }
//   // let geladeira = document.getElementsByClassName('geladeira');
//   // console.log(geladeira[0].style.background = "blue")
//   // console.log(geladeira[1].style.background = "blue")
//   // console.log(geladeira[2].style.background = "blue")
  
//   // console.log(target.className)
 
  
// }
      

  return (

    <>
      <div className="container-fluid mt-5 row">
        <div className="col-sm-12 col-lg-2 mt-1">
          <div className="dropdown mt-1">
            <button className="col-sm-12 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
                            </button>
            <div className="dropdown-menu col-sm-12" aria-labelledby="dropdownMenu2">
              <ul className="list-group">
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Todos
                  <span className="badge badge-success badge-pill">12</span>
                </button>
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Geladeiras
                  <span className="badge badge-success badge-pill">3</span>
                </button>
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Fogões<span className="badge badge-success badge-pill">2</span>
                </button>
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Microondas<span className="badge badge-success badge-pill">3</span>
                </button>
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Lava-roupas<span className="badge badge-success badge-pill">2</span>
                </button>
                <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center disabled"
                  type="button">
                  Lava-louças<span className="badge badge-success badge-pill">2</span>
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9 mt-1">
          <div className="row" id="produtos">
            {produto.map(element => {
              return (
                <div key={element.id_produto} className={`${element.categoria} produtos card col-sm-8 col-md-5 col-lg-3 mt-1 mr-1 border-light shadow align-items-center`} id={element.categoria}>
                  <img className="card-img-top img-thumbnail" src={"/img/" + element.nomeimagem} onMouseOver={destaque}
                    onMouseOut={redimensiona} />
                  <p className="card-text"> {element.descricao_produto + " " + element.marca} </p>

                  <p className="scard-text text-danger"> R$<strike>{element.preco_inicial}</strike>  </p>

                  <p className="card-text"> R$ {element.preco_desconto}  </p>
                </div>
              )
            })}
          </div>
        </div>
        <hr />
      </div>
      <hr />

    </>
  );
}

export default Produtos;