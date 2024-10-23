const { Router } = require("express"); // Importa o construtor de rotas do Express.js
const {
  getLivros,
  postLivro,
  patchLivro,
  deleteLivro,
  getLivroPorid,
} = require("../controladores/livro"); // Importa as funções do controlador para lidar com cada rota

// Cria uma instância do roteador do Express
const router = Router();

// Define as rotas e associa cada rota a uma função do controlador

// GET /livros: Obtém todos os livros
router.get("/", getLivros);

// GET /livros/:id: Obtém um livro específico pelo ID
router.get("/:id", getLivroPorid);

// POST /livros: Cria um novo livro
router.post("/", postLivro);

// DELETE /livros/:id: Deleta um livro específico pelo ID
router.delete("/:id", deleteLivro);

// PATCH /livros/:id: Atualiza parcialmente um livro específico pelo ID
router.patch("/:id", patchLivro);

// Exporta o roteador para ser utilizado em outros módulos
module.exports = router;
