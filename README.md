# Controle de Estoque

Aplicação React para cadastro e listagem de produtos de estoque, consumindo uma API REST.

## Tecnologias

- React
- Vite
- json-server 0.17.4

## Como rodar

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/igorsantossdev/trabalho02-devweb.git
   cd trabalho02-devweb
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Em um terminal, inicie a API:

   ```bash
   npm run api
   ```

4. Em outro terminal, inicie a aplicação:

   ```bash
   npm run dev
   ```

5. Acesse:
   - Aplicação: http://localhost:5173
   - API: http://localhost:3001

## API REST

**URL base:** `http://localhost:3001`  
**Recurso:** `/produtos`

### Modelo do produto

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | número | Identificador gerado pela API |
| `nome` | texto | Nome do produto |
| `quantidade` | número | Quantidade em estoque |
| `localizacao` | texto | Localização do produto no estoque |

### Rotas

| Método | Rota | Descrição | Body esperado | Status de sucesso |
|---|---|---|---|---|
| GET | `/produtos` | Lista os produtos | Nenhum | 200 |
| GET | `/produtos/:id` | Busca um produto pelo ID | Nenhum | 200 (ou 404 se não existir) |
| POST | `/produtos` | Cadastra um produto | JSON com `nome`, `quantidade` e `localizacao`, sem `id` | 201 |
| PUT | `/produtos/:id` | Substitui os dados de um produto | JSON completo com `nome`, `quantidade` e `localizacao` | 200 |
| PATCH | `/produtos/:id` | Atualiza parcialmente um produto | JSON com um ou mais campos do produto | 200 |
| DELETE | `/produtos/:id` | Remove um produto | Nenhum | 200 |

### Exemplo de cadastro

Requisição:

```http
POST /produtos HTTP/1.1
Host: localhost:3001
Content-Type: application/json

{
  "nome": "Teclado USB",
  "quantidade": 15,
  "localizacao": "Corredor B, Prateleira 3"
}
```

Resposta de sucesso:

```json
{
  "nome": "Teclado USB",
  "quantidade": 15,
  "localizacao": "Corredor B, Prateleira 3",
  "id": 4
}
```

O valor de `id` da resposta é atribuído pela API.

### Rotas usadas pela interface

Atualmente, a interface React usa `GET /produtos` para carregar a lista e `POST /produtos` para cadastrar produtos. As demais rotas são oferecidas pela API, mas ainda não são usadas pela interface.

## Estrutura de pastas

```text
.
├── db.json
└── src/
    ├── api.js
    ├── App.jsx
    └── components/
        ├── FormProduto.jsx
        └── ListaProdutos.jsx
```
