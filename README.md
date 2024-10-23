
# Projeto de Servidor Node.js - Gestão de Livros e Favoritos

Este é um projeto de servidor construído com Node.js e Express para gerenciar livros e favoritos. O servidor permite criar, atualizar, listar, deletar livros, bem como gerenciar uma lista de livros favoritos.

## Funcionalidades

- **Gerenciamento de Livros**:
  - Listar todos os livros
  - Listar um livro específico por ID
  - Adicionar um novo livro
  - Atualizar parcialmente um livro (PATCH)
  - Remover um livro pelo ID
  
- **Gerenciamento de Favoritos**:
  - Listar todos os livros favoritos
  - Adicionar um livro aos favoritos
  - Remover um livro dos favoritos

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/en/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-diretorio
   ```

3. Instale as dependências do projeto usando npm:

   ```bash
   npm install
   ```

## Executando o Servidor

Após instalar as dependências, você pode executar o servidor localmente com o comando:

```bash
nodemon app.js
```

O servidor será iniciado na porta `8000`. Você verá a seguinte mensagem no console:

```
Escutando a porta 8000
```

## Endpoints

### Livros

| Método | Rota          | Descrição                            |
|--------|---------------|--------------------------------------|
| GET    | `/livros`      | Lista todos os livros                |
| GET    | `/livros/:id`  | Obtém um livro específico pelo ID    |
| POST   | `/livros`      | Adiciona um novo livro               |
| PATCH  | `/livros/:id`  | Atualiza parcialmente um livro       |
| DELETE | `/livros/:id`  | Remove um livro pelo ID              |

#### Exemplo de `POST /livros`

**Requisição**:

```json
{
  "id": 1,
  "nome": "Nome do Livro",
  "img": "URL da imagem do livro"
}
```

**Resposta de Sucesso**:

```
201 Livro inserido com sucesso
```

### Favoritos

| Método | Rota               | Descrição                                      |
|--------|--------------------|------------------------------------------------|
| GET    | `/favoritos`        | Lista todos os livros favoritos                |
| POST   | `/favoritos/:id`    | Adiciona um livro aos favoritos (ID do livro)  |
| DELETE | `/favoritos/:id`    | Remove um livro dos favoritos (ID do livro)    |

#### Exemplo de `POST /favoritos/:id`

**Requisição**:

```
POST /favoritos/1
```

**Resposta de Sucesso**:

```
201 Livro inserido com sucesso
```

## Estrutura do Projeto

```bash
.
├── controladores
│   ├── livro.js         # Controladores para gerenciamento de livros
│   ├── favorito.js      # Controladores para gerenciamento de favoritos
├── rotas
│   ├── livro.js         # Rotas para livros
│   ├── favorito.js      # Rotas para favoritos
├── servicos
│   ├── livros.js        # Funções de serviço para manipulação de livros
│   ├── favoritos.js     # Funções de serviço para manipulação de favoritos
├── livros.json          # Arquivo de dados que armazena os livros
├── favoritos.json       # Arquivo de dados que armazena os favoritos
├── app.js               # Arquivo principal que inicia o servidor
├── package.json         # Configuração do projeto e dependências
└── README.md            # Instruções do projeto
```

## Arquivos de Dados

- **livros.json**: Armazena a lista de livros disponíveis.
- **favoritos.json**: Armazena a lista de livros marcados como favoritos.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
