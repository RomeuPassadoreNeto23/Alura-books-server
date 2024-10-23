const fs = require("fs"); // Importa o módulo 'fs' para manipular arquivos no sistema de arquivos

// Função para obter todos os livros
function getTodosLivros() {
    // Lê o conteúdo do arquivo 'livros.json' e o converte em um array de objetos
    return JSON.parse(fs.readFileSync("livros.json"));
}

// Função para obter um livro específico pelo ID
function getLivroPorId(id) {
    // Lê todos os livros do arquivo 'livros.json'
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    
    // Filtra o livro que corresponde ao ID fornecido
    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

// Função para inserir um novo livro
function insereLivro(livroNovo) {
    // Lê todos os livros existentes
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    
    // Adiciona o novo livro à lista de livros
    const novalistaDeLivro = [...livros, livroNovo];
    
    // Sobrescreve o arquivo 'livros.json' com a nova lista
    fs.writeFileSync("livros.json", JSON.stringify(novalistaDeLivro));
}

// Função para modificar um livro existente pelo ID
function modificaLivro(modificacoes, id) {
    // Lê todos os livros atuais
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    
    // Encontra o índice do livro que será modificado
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    
    // Combina o livro atual com as modificações feitas
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    
    // Atualiza o livro na lista
    livrosAtuais[indiceModificado] = conteudoMudado;
    
    // Sobrescreve o arquivo 'livros.json' com a lista atualizada
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

// Função para remover um livro pelo ID
function removerLivroPorId(id) {
    // Lê todos os livros
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    
    // Filtra a lista de livros, removendo o livro com o ID fornecido
    const livroFiltrado = livros.filter(livro => livro.id !== id);
    
    // Sobrescreve o arquivo 'livros.json' com a lista filtrada
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado));
}

// Exporta todas as funções para que possam ser utilizadas em outros arquivos
module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removerLivroPorId
};
