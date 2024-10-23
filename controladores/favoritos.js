// Importa as funções de serviço relacionadas aos "favoritos" do arquivo de serviços
const { inseretFavoritos, deleteFavoritosPorId, getTodosFavoritos } = require("../servicos/favoritos")

// Função para lidar com a requisição de obtenção de todos os livros favoritos
function getFavoritos(req, res) {
    try {
        // Chama a função do serviço para obter todos os livros favoritos
        const livros = getTodosFavoritos()
        // Retorna a lista de livros favoritos como resposta
        res.send(livros)
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Função para lidar com a requisição de adicionar um livro aos favoritos
function postFavoritos(req, res) {
    try {
        // Extrai o ID do livro da requisição (parâmetros da URL)
        const id = req.params.id
        // Exibe o ID no console para depuração
        console.log(id)
        // Insere o livro nos favoritos através da função de serviço
        inseretFavoritos(id)
        // Retorna status 201 (criado com sucesso) e uma mensagem de sucesso
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Função para lidar com a requisição de remover um livro dos favoritos
function deleteFavoritos(req, res) {
    try {
        // Extrai o ID do livro a ser removido dos favoritos
        const id = req.params.id
        // Verifica se o ID é válido e é um número
        if (id && Number(id)) {
            // Remove o livro dos favoritos através da função de serviço
            deleteFavoritosPorId(id)
            // Retorna status 201 (removido com sucesso) e uma mensagem de sucesso
            res.status(201)
            res.send("livro deletado com sucesso")
        } else {
            // Caso o ID seja inválido, retorna status 422 (erro de validação)
            res.status(422)
            res.send("id inválido")
        }
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Exporta as funções para serem utilizadas em outros arquivos
module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}
