var multa= document.getElementById('multa')

function calcular(){
    var velocidade=parseInt(document.getElementById('velocidade').value)

    if (velocidade>60){

        multa.innerHTML= "Sua multa é de 110 reais"

    }
    
    else{

        multa.innerHTML= "Você não foi multado"
    }

}