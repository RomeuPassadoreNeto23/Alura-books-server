// Importa o módulo Router do Express, que permite criar rotas para a aplicação
const { Router } = require("express");

// Importa as funções de controle que gerenciam as operações sobre os favoritos
const { getFavoritos, postFavoritos, deleteFavoritos } = require("../controladores/favoritos");

// Cria uma nova instância do roteador
const router = Router();

// Define a rota GET para buscar todos os favoritos
// Quando uma requisição GET é feita para a raiz da rota '/favoritos', a função getFavoritos é chamada
router.get('/', getFavoritos);

// Define a rota POST para adicionar um novo favorito
// Quando uma requisição POST é feita para '/favoritos/:id', a função postFavoritos é chamada
// O ':id' é um parâmetro de rota que deve ser passado na URL
router.post('/:id', postFavoritos);

// Define a rota DELETE para remover um favorito
// Quando uma requisição DELETE é feita para '/favoritos/:id', a função deleteFavoritos é chamada
// O ':id' é um parâmetro de rota que identifica qual favorito deve ser removido
router.delete('/:id', deleteFavoritos);

// Exporta o roteador para que possa ser utilizado em outros arquivos
module.exports = router;