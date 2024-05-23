const fs = require("fs")

function getTodosFavoritos() {

    return JSON.parse(fs.readFileSync("favoritos.json"))

}

function deletarFavoritosPorId(id) {

    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livorsFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync( "favoritos.json" ,JSON.stringify(livorsFiltrados))



}

 function insereFavoritos(id) {

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)

    const novalistaDeLivrosFavoritos = [...favoritos,livroInserido]

    fs.writeFileSync( "favoritos.json" ,JSON.stringify(novalistaDeLivro))

 }

module.exports ={
    getTodosFavoritos,
    deletarFavoritosPorId,
    insereFavoritos
}