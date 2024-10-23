const express = require("express"); // Importa o módulo Express
const rotaLivor = require('./rotas/livro'); // Importa as rotas de gerenciamento de livros
const rotaFavoritos = require('./rotas/favoritos'); // Importa as rotas de gerenciamento de favoritos
const cors = require("cors"); // Importa o módulo CORS

// Cria uma instância da aplicação Express
const app = express();

// Configura o Express para aceitar requisições com JSON
app.use(express.json());

// Permite que requisições de qualquer origem sejam aceitas, usando CORS
app.use(cors({origin:"*"}));

// Define as rotas da aplicação
app.use('/livros', rotaLivor); // Associa as rotas de gerenciamento de livros ao caminho "/livros"
app.use('/favoritos', rotaFavoritos); // Associa as rotas de gerenciamento de favoritos ao caminho "/favoritos"

// Define a porta em que o servidor irá rodar
const port = 8000;

// Inicia o servidor e o coloca para escutar na porta definida
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`); // Mensagem de log indicando que o servidor está ativo
});
