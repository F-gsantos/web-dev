function soma(){
    var n1= parseFloat(document.getElementById('numero 1').value);
    var n2= parseFloat(document.getElementById('numero 2').value);
    var resultado= document.getElementById('resultado');

    var soma= n1 + n2;
    
    resultado.innerText = soma;
}

function sub(){
    var n1= parseFloat(document.getElementById('numero 1').value);
    var n2= parseFloat(document.getElementById('numero 2').value);
    var resultado= document.getElementById('resultado');

    var sub = n1 - n2;

    resultado.innerText= sub;
}

function mult(){
    var n1= parseFloat(document.getElementById('numero 1').value);
    var n2= parseFloat(document.getElementById('numero 2').value);
    var resultado= document.getElementById('resultado');

    var mult = n1 * n2;

    resultado.innerText= mult;
}

function div(){
    var n1= parseFloat(document.getElementById('numero 1').value);
    var n2= parseFloat(document.getElementById('numero 2').value);
    if (n2 === 0) {
        document.getElementById('resultado').innerText="Erro: divisão por zero";
    } else {
        document.getElementById('resultado').innerText= n1 / n2;
    }









}