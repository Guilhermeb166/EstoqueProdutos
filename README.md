# EstoqueProdutos

## Visão Geral

Este projeto implementa um sistema de gestão de estoque de produtos, dividindo-se em duas partes principais:

- **Backend (API RESTful):** Desenvolvido em Python com o framework Flask, responsável pela lógica de negócio, persistência de dados e exposição de endpoints para o frontend.
- **Frontend (Interface do Usuário):** Desenvolvido em JavaScript com o framework React, responsável por consumir a API e fornecer uma interface intuitiva para o usuário interagir com o sistema.

## Funcionalidades

O sistema oferece as seguintes funcionalidades:

- **Gestão de Produtos (CRUD):**
  - Listar todos os produtos.
  - Buscar um produto por ID.
  - Adicionar novos produtos.
  - Atualizar informações de produtos existentes.
  - Remover produtos.
- **Gestão de Inventário:**
  - Funcionalidades para controle de estoque, como entrada e saída de produtos (a ser detalhado na seção de uso).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
EstoqueProdutos/
├── backend/                 # Contém o código do servidor Flask
│   ├── app.py               # Aplicação Flask principal
│   ├── database.py          # Configuração do banco de dados (SQLAlchemy)
│   ├── models.py            # Definição dos modelos de dados (Produto)
│   ├── requirements.txt     # Dependências do backend
│   └── routes/              # Módulos de rotas da API
│       ├── inventario.py    # Rotas relacionadas ao inventário
│       └── produtos.py      # Rotas relacionadas aos produtos
├── frontend/                # Contém o código da aplicação React
│   ├── public/              # Arquivos estáticos
│   ├── src/                 # Código fonte da aplicação React
│   │   ├── App.jsx          # Componente principal da aplicação
│   │   ├── Home.jsx         # Componente da página inicial
│   │   ├── App.css          # Estilos globais
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Inventory.jsx
│   │   │   └── ProductForm.jsx
│   │   └── pages/           # Páginas da aplicação
│   │       └── Products.jsx
│   ├── index.html           # Página HTML principal
│   ├── package.json         # Dependências e scripts do frontend
│   └── vite.config.js       # Configuração do Vite
└── README.md                # Este arquivo de documentação
```




## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado:

- Python 3.8+ (com pip)
- Node.js (com npm ou yarn)

### 1. Configuração do Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd EstoqueProdutos/backend
   ```
2. Crie um ambiente virtual e ative-o (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   .\venv\Scripts\activate   # Windows
   ```
3. Instale as dependências do Python:
   ```bash
   pip install -r requirements.txt
   ```
4. Crie um arquivo `.env` na raiz do diretório `backend` com o seguinte conteúdo (se desejar usar um banco de dados diferente do SQLite padrão):
   ```
   DATABASE_URL="sqlite:///instance/estoque.db"
   ```
   (O SQLite é configurado por padrão e não requer um `.env` para funcionar. O arquivo `estoque.db` será criado automaticamente na primeira execução.)
5. Inicie o servidor Flask:
   ```bash
   flask run
   ```
   O backend estará disponível em `http://127.0.0.1:5000` (ou outra porta, dependendo da sua configuração).

### 2. Configuração do Frontend

1. Em um novo terminal, navegue até o diretório `frontend`:
   ```bash
   cd EstoqueProdutos/frontend
   ```
2. Instale as dependências do Node.js:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Inicie a aplicação React:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O frontend estará disponível em `http://localhost:5173` (ou outra porta, dependendo da sua configuração).

## Uso

Após iniciar o backend e o frontend, acesse `http://localhost:5173` no seu navegador. Você poderá:

- **Visualizar Produtos:** A página inicial exibirá uma lista de produtos existentes.
- **Adicionar Produtos:** Utilize o formulário para adicionar novos produtos ao estoque.
- **Editar Produtos:** Clique em um produto para editar suas informações.
- **Remover Produtos:** Exclua produtos do estoque.
- **Gerenciar Inventário:** A seção de inventário permitirá ajustar a quantidade de produtos (entrada/saída).

## Tecnologias Utilizadas

- **Backend:**
  - Python
  - Flask
  - SQLAlchemy (ORM)
  - SQLite (Banco de Dados padrão)
- **Frontend:**
  - JavaScript
  - React
  - React Router DOM
  - Vite (Ferramenta de build)

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature (`git checkout -b feature/MinhaNovaFeature`).
3. Faça suas alterações e commit-as (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch original (`git push origin feature/MinhaNovaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.



