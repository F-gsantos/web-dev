function verificar(){
    var nome
    var senhausuario

    while (true){

        nome = document.getElementById("usuario").value;
        senhausuario=document.getElementById("senha").value;
    
    
        if (nome === '1234'&& senhausuario === '1234'){
            alert("Logado com sucesso")
            break;
        }
        alert("Senha ou usuario invalidos")

    }   

}

