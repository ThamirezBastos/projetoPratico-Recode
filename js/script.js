
function exibirCateg(categoria) {
        let elementos = document.getElementsByClassName("produtos");
    console.log(elementos[0].id);
    console.log(categoria);
    for (var i = 0; i < elementos.length; i++) {
        console.log(elementos[i].id);
        if (categoria == elementos[i].id)
            elementos[i].style = "display:inline-block";
        else
            elementos[i].style = "display:none";
    }
}

let exibirTodos = () => {
    let elementos = document.getElementsByClassName("produtos");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:inline-block";
    }
}

let destaque = (imagem) => {
    console.log(imagem);
    if (imagem.width == 240)
        imagem.width = 140;
    else if (imagem.width == 140) {
        imagem.width = 240;
    }

}
let resizeimg = (imagem) => {
    if (imagem.width == 240)
        imagem.width = 140;
    else if (imagem.width == 140) {
        imagem.width = 240;
    }
}


