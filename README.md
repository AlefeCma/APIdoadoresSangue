# API para gerenciamento de doadores de sangue

## Sobre o Projeto

Essa API é um sistema de gerenciamento de doações de sangue, com quatro componentes principais: Funcionário, Doador, Doação e Estoque de Sangue. Ela permite a manipulação de informações e facilita o controle e a organização do processo de doação de sangue.

## Tecnologias Empregadas

Este projeto emprega uma variedade de tecnologias e bibliotecas de ponta, incluindo:

- **Node.js**: Plataforma JavaScript que permite a execução de código JavaScript no lado do servidor, tornando o desenvolvimento de aplicações web rápido e eficiente.
- **Express.js**: Framework web para Node.js que facilita a criação de APIs web robustas e escaláveis.
- **MongoDB**: banco de dados NoSQL orientado a documentos que oferece alta performance, alta disponibilidade e fácil escalabilidade, tornando-o ideal para aplicações modernas.
- **Mongoose**: Biblioteca do MongoDB que proporciona uma solução direta baseada em esquemas para modelar os dados da sua aplicação, permitindo um controle mais rigoroso dos dados.
- **bcrypt**: Biblioteca que ajuda você a fazer hash das senhas de forma segura, protegendo as informações sensíveis dos usuários.
- **jsonwebtoken**: Implementação dos tokens JSON Web Token, que permite a criação de tokens de acesso seguros para autenticação de usuários.
- **passport**: Middleware de autenticação para Node.js extremamente flexível e modular, que suporta uma ampla gama de estratégias de autenticação.
- **Nodemon**: Utilitário que monitora quaisquer mudanças no seu código e automaticamente reinicia o seu servidor, economizando tempo de desenvolvimento e aumentando a eficiência.

Cada uma dessas tecnologias desempenha um papel crucial na funcionalidade e eficiência deste projeto.

## Como Instalar e Executar o Projeto

Para instalar e executar este projeto localmente, você precisará seguir estas etapas:

1. Clone este repositório para a sua máquina local:

```bash
git clone https://github.com/alvesjaov/APIdoadoresSangue.git
```

2. Instale as dependências do projeto, no terminal digite o comando:

```bash
npm install
```

3. Crie um arquivo `.env` e adicione as seguintes *Variáveis de Ambiente*

```bash
MONGODB_URI=
JWT_SECRET=
```

- *Observação: Você precisará de uma string de conexão mongoDB para fazer a comunicação entre o código e o banco de dados.*

4. Dite o comando abaixo para gerar uma string na variável `JWT_SECRET` no arquivo `.env`, para o melhor funcionamento do token JWT.

```bash
node generateSecret.js
```

5. No terminal digite o comando abaixo para iniciar o servidor local:

```bash
npm run dev
```

## Documentação das Rotas da API

Este projeto inclui várias rotas que permitem aos usuários interagir com os recursos do sistema. A documentação completa das rotas está disponível [aqui](https://apidoadoressangue.vercel.app/api-docs/).

As rotas se dividem em:

1. **Login**: Para acessar as Rotas de Funcionários é preciso fazer login como um funcionário administrador, já as Rotas de Doadores, Doações e Estoque podem ser acessadas como um funcionário padrão.
2. **Funcionário**: Permite a Criação; Listagem; Atualização da senha e Exclusão de funcionários.
3. **Doador**: Permite a Criação, Listagem, Atualização de dados e Exclusão de doadores.
4. **Doação**:  Permite a Criação, Listagem, Atualização de exames *Adicionando os Exames* e Exclusão de doações.
5. **Estoque de Sangue**: Permite a Listagem do estoque.
