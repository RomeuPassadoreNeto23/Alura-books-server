const { insereFavoritos, deletarFavoritosPorId, getTodosFavoritos } = require("../servicos/favoritos")


function getFavoritos(req, res) {

    try {
        const livros = getTodosFavoritos()
        res.send(livros)

    } catch (error) {
        res.status(500)
        res.send(error.message)

    }

}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            insereFavoritos(id)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.send("id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)

    }
}

function deleteFavoritos(req, res) {
    try {

        const id = req.params.id

        if (id && Number(id)) {
            deletarFavoritosPorId(id)
            res.status(201)
            res.send("livro deletado com sucesso")

        } else {
            res.status(422)
            res.send("id inválido")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)

    }

}

module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}