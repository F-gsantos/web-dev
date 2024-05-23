const btnClicar = document.querySelector('#btnClicar');
const listaFilmes = document.querySelector('#listaFilmes');
const inputUsuario = document.querySelector('#inputUsuario');

const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Copolla",
        ano: 1972,
        sinopse: "Lorem Ipson Dolor SIt Ame" 
    },{
        nome:"Meninas Malvadas",
        diretor:"Lindsay Lohan",
        ano:2004,
        sinopse:"bla, bla, bla",
    },{
        nome:"Os trapalhoes na calda do cometa",
        diretor:"Didi Mocó",
        ano:1962,
        sinopse:"Didi"
    }]

btnClicar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();

    let novoFilme = document.createElement('li');
    novoFilme.innerText = inputUsuario.value;

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function (){
        novoFilme.style.color = "red"
        novoFilme.classList.toggle('fundo-preto')

    })

    novoFilme.innerHTML = `
    <h1> Título do Filme</h1>
    <p> Sinopse do Filme</p>
    <p>blabla</p>
    `

    let imagemFilme = document.createElement('img')
    imagemFilme.src=""
    imagemFilme.alt = ""

    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme);

    inputUsuario.value = ""



})

// CREATE

//READ

//UPDATE

//DELETE