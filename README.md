# Escola API

Este projeto é uma API para gerenciar informações de alunos em uma escola. A API foi construída utilizando Node.js e Express.

## Estrutura do Projeto

```
escola-api
├── src
│   ├── app.js                  # Ponto de entrada da aplicação
│   ├── controllers
│   │   └── alunosController.js  # Controlador para gerenciar alunos
│   ├── routes
│   │   └── alunosRoutes.js      # Rotas para a API de alunos
│   └── models
│       └── aluno.js             # Modelo de dados para um aluno
├── package.json                  # Configuração do npm
└── README.md                     # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd escola-api
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

A API possui os seguintes endpoints para gerenciar alunos:

- `GET /alunos` - Retorna a lista de todos os alunos.
- `GET /alunos/:id` - Retorna um aluno específico pelo ID.
- `POST /alunos` - Cria um novo aluno.
- `PUT /alunos/:id` - Atualiza um aluno existente pelo ID.
- `DELETE /alunos/:id` - Remove um aluno pelo ID.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.