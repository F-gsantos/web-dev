var valor= document.getElementById("valor")

function preco(){
    var livros= parseInt(document.getElementById('livros').value)

    
    if (livros>7){

        valor.innerHTML= livros*15

    }
    
    else{

        valor.innerHTML= livros*22
    }

}