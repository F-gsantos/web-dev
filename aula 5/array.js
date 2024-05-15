const pessoas = ["Fulano","Beltrano", "Ciclano"]

//adiciona elemento no fial da array
pessoas.push("caio")

//Remove o ultimo elemento da array
pessoas.pop()

//adiciona um elemento no inicio da array
pessoas.unshift()

//remove o primeiro elemneto da array
pessoas.shift()

//atualizar elementos na array
pessoas[1]="caio"

console.log(pessoas[2])


//--------------------------------------------------------------------------------------------------\\
//ForEach(modifica a array original)
pessoas.forEach(
    function rodarArray(pessoa){
        console.log(pessoa + 'vai são Paulo')
    }
)

//--------------------------------------------------------------------------------------------------\\
//a de cima reduzida
pessoas.forEach( pessoa => console.log(pessoa + 'vai sao paulo'()))

//--------------------------------------------------------------------------------------------------\\
//MAP (faz uma copia e te devolve um novo array modificado, assim sem mexer no array original)

pessoas.map(pessoa => console.log(pessoa + 'vai sao paulo'()))

function modificarPessoas(array){
    return array.map(pessoa => pessoa.toLowerCase())
}

console.log(modificarPessoas(pessoas))
//--------------------------------------------------------------------------------------------------\\
//Objetos em array
const filmes = [{
    nome: "pulp Fiction",
    diretor: "Tarantino",
    ano: 1994
},{
    nome: "carros",
    diretor: "Cluetis",
    ano: 2006
},{
    nome: "Toy Story",
    diretor: " Miguel Falabela",
    ano: 1995
}]
//--------------------------------------------------------------------------------------------------\\
//filter
const filmes = [{
    nome: "pulp Fiction",
    diretor: "Tarantino",
    ano: 1994
},{
    nome: "carros",
    diretor: "Cluetis",
    ano: 2006
},{
    nome: "Toy Story",
    diretor: " Miguel Falabela",
    ano: 1995
}]

console.log(filmes[0].nome)

const filmesModificado=
filmes.filter(filmes => filmes.ano > 2000)

console.log(filmesModificado)