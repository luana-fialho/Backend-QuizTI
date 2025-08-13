# Quiz de TI

Projeto de um quiz de TI com perguntas de Backend, Frontend e Dados.

## Tecnologias

- Backend: Node.js + Express + MySQL
- Frontend: React
- Versionamento: Git/GitHub

## Estrutura do projeto

- `backend/` - API com Node.js
- `frontend/` - Interface em React

### Banco de Dados
Este projeto utiliza **MySQL** como banco de dados. Para facilitar a configuração, o dump com a estrutura e dados já está incluído no repositório.

### 📥 Como importar o banco de dados no MySQL Workbench

1. Abra o **MySQL Workbench**.

2. Vá até o menu: Server > Data Import

3. Selecione a opção: Import from Self-Contained File

4. Escolha o arquivo: db/banco-de-dados-quizti.sql

5. Em **Default Target Schema**:
- Selecione um banco existente **ou**
- Clique em **"New..."** e crie um novo banco com o nome `db-quizti` (ou outro de sua preferência).

6. Marque: Dump Structure and Data

7. Clique no botão: Start Import

---

### Configuração do ambiente

Após importar o banco, crie o seu arquivo `.env` na raiz do projeto e preencha com os dados de conexão:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_banco (ex: quizti)
```

### Frontend
Acesse o link para clonar o repositório do front-end
https://github.com/luana-fialho/Frontend-QuizTI

## Rodando o projeto

### Backend
```bash
cd backend-quizti
npm install
nodemon index.js
```

