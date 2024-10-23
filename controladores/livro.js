// Importando as funções de serviço relacionadas a "livro" do arquivo de serviços
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removerLivroPorId } = require("../servicos/livro")

// Função para lidar com a requisição de obtenção de todos os livros
function getLivros(req, res) {
    try {
        // Chama a função do serviço para obter todos os livros
        const livros = getTodosLivros()
        // Retorna a lista de livros como resposta
        res.send(livros)
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Função para lidar com a requisição de obtenção de um livro específico pelo ID
function getLivroPorid(req, res) {
    try {
        // Extrai o ID da requisição
        const id = req.params.id
        // Verifica se o ID existe e se é um número válido
        if (id && Number(id)) {
            // Obtém o livro pelo ID através da função de serviço
            const livro = getLivroPorId(id)
            // Envia o livro encontrado como resposta
            res.send(livro)
        } else {
            // Caso o ID seja inválido, retorna um status 422 (erro de validação)
            res.status(422)
            // Envia uma mensagem de erro informando que o ID é inválido
            res.send("id inválido")
        }
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Função para lidar com a requisição de inserção de um novo livro
function postLivro(req, res) {
    try {
        // Obtém o novo livro a ser inserido a partir do corpo da requisição
        const livroNovo = req.body

        // Verifica se todos os campos obrigatórios estão presentes no corpo da requisição
        if (req.body.id) {
            if (req.body.nome) {
                if (req.body.img) {
                    // Se todos os campos obrigatórios estão presentes, insere o novo livro
                    insereLivro(livroNovo)
                    // Retorna status 201 (criado com sucesso) e uma mensagem de sucesso
                    res.status(201)
                    res.send("Livro inserido com sucesso")
                } else {
                    // Se o campo "img" estiver faltando, retorna status 422 (erro de validação)
                    res.status(422)
                    res.send("O campo img é obrigatório")
                }
            } else {
                // Se o campo "nome" estiver faltando, retorna status 422 (erro de validação)
                res.status(422)
                res.send("O campo nome é obrigatório")
            }
        } else {
            // Se o campo "id" estiver faltando, retorna status 422 (erro de validação)
            res.status(422)
            res.send("O campo id é obrigatório")
        }
    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
        // Envia a mensagem de erro como resposta
        res.send(error.message)
    }
}

// Função para lidar com a requisição de atualização (parcial) de um livro pelo ID
function patchLivro(req, res) {
    try {
        // Extrai o ID da requisição
        const id = req.params.id
        // Verifica se o ID existe e se é um número válido
        if (id && Number(id)) {
            // Obtém os dados do corpo da requisição para atualização
            const body = req.body
            // Verifica se o campo "nome" está presente para a atualização
            if (req.body.nome) {
                // Se o nome estiver presente, modifica o livro pelo ID
                modificaLivro(body, id)
                // Retorna uma mensagem de sucesso após a modificação
                res.send("Item modificado com sucesso")
            } else {
                // Se o campo "nome" estiver faltando, retorna status 422 (erro de validação)
                res.status(422)
                res.send("O campo nome é obrigatório")
            }
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

// Função para lidar com a requisição de remoção de um livro pelo ID
function deleteLivro(req, res) {
    try {
        // Extrai o ID da requisição
        const id = req.params.id
        // Verifica se o ID existe e se é um número válido
        if (id && Number(id)) {
            // Remove o livro pelo ID através da função de serviço
            removerLivroPorId(id)
            // Retorna uma mensagem de sucesso após a remoção
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

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    getLivros,
    getLivroPorid,
    postLivro,
    patchLivro,
    deleteLivro
}
