function escolhaComp(){
    const jokeipo= ["pedra", "papel", "tesoura"];
    let numeroAleatorio= Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]
}
console.log(escolhaComp())

function jogar(escolhaDoUsuario){

    let pcEscolha= escolhaComp()

    if (pcEscolha === escolhaDoUsuario){
        resultado= "empatou"
    }
    document.getElementById('resultado').innerText= resultado

}