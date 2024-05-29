const fs = require("fs")

function getTodosFavoritos() {

    return JSON.parse(fs.readFileSync("favoritos.json"))

}

function deleteFavoritosPorId(id) {

    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livorsFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync( "favoritos.json" ,JSON.stringify(livorsFiltrados))



}

 function inseretFavoritos(id) {

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)

    const novalistaDeLivrosFavoritos = [...favoritos,livroInserido]

    fs.writeFileSync( "favoritos.json" ,JSON.stringify(novalistaDeLivrosFavoritos ))

 }

module.exports ={
    getTodosFavoritos,
    deleteFavoritosPorId,
    inseretFavoritos
}