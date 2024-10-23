const fs = require("fs"); // Importa o módulo 'fs' para manipular arquivos no sistema de arquivos

// Função para obter todos os livros favoritos
function getTodosFavoritos() {
    // Lê o conteúdo do arquivo 'favoritos.json' e o converte em um array de objetos
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

// Função para deletar um livro dos favoritos pelo ID
function deleteFavoritosPorId(id) {
    // Lê todos os livros favoritos do arquivo 'favoritos.json'
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));
    
    // Filtra a lista de favoritos, removendo o livro com o ID fornecido
    const livorsFiltrados = livros.filter(livro => livro.id !== id);
    
    // Sobrescreve o arquivo 'favoritos.json' com a lista filtrada
    fs.writeFileSync("favoritos.json", JSON.stringify(livorsFiltrados));
}

// Função para inserir um livro nos favoritos
function inseretFavoritos(id) {
    // Lê a lista completa de livros e a lista de favoritos
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    
    // Encontra o livro que corresponde ao ID fornecido
    const livroInserido = livros.find(livro => livro.id === id);
    
    // Adiciona o livro à lista de favoritos
    const novalistaDeLivrosFavoritos = [...favoritos, livroInserido];
    
    // Sobrescreve o arquivo 'favoritos.json' com a nova lista de favoritos
    fs.writeFileSync("favoritos.json", JSON.stringify(novalistaDeLivrosFavoritos));
}

// Exporta todas as funções para que possam ser utilizadas em outros arquivos
module.exports = {
    getTodosFavoritos,
    deleteFavoritosPorId,
    inseretFavoritos
};
