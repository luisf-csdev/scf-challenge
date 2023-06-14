<h1 align="center">Desafio SCF</h1>

<h4 align="center">
    <a href="#-introdução">Introdução</a> •
    <a href="#-recursos">Recursos</a> •
    <a href="#-pré-requisitos">Pré-requisitos</a> •
    <a href="#-clone-do-repositório">Clone do Repositório</a> •
    <a href="#-rotas">Rotas</a> •
    <a href="#-testes">Testes</a> •
    <a href="#-arquivos">Arquivos</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#excelsior-code--by-luís-felipe">Autor</a>
</h4>
<br>

## 📄 Introdução

- Este projeto é um CRUD com banco de dados local (fakeData.ts).

- Através de um cliente REST, você será capaz de realizar as ações descritas na aba de Recursos deste readme.

- As rotas da aplicação, juntamente com os métodos HTTP, estarão da aba Rotas.

- As demais informações sobre os testes e o objetivo das funções presentes em cada arquivo serão explicadas nas abas Testes e Arquivos, respectivamente.

- Por fim, espero que aproveite a leitura do código e acompanhe as soluções dos problemas aqui descritos!
<br>

## 📌 Recursos
- [x] Visualizar todos os usuários do banco de dados
- [x] Visualizar um usuário específico
- [x] Criar novos usuários
- [x] Fornecer permissão para efetuar as seguintes ações:
    - [x] Atualizar usuários
    - [x] Excluir usuários
- [x] Visualizar quantas vezes determinado usuário foi lido
<br>

## 💾 Pré-requisitos
Você precisará ter as seguintes ferramentas instaladas em sua máquina:
- [GIT](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

Use, também, seu editor de texto e cliente REST preferidos.

Estes são os que utilizo:
- [VSCode](https://code.visualstudio.com/)
- [Insomnia](https://insomnia.rest/)
<br>

## 🪢 Clone do Repositório
```bash
# execute o comando para efetuar a clonagem
git clone https://github.com/luisf-csdev/scf-challenge.git

# entre no diretório do projeto
cd scf-challenge

# instale as dependências
npm install

# então rode o script para iniciar 
npm start

# a aplicação irá iniciar em PORT:3000, acesse pelo seu cliente REST em <http://localhost:3000>
```
<br>

## 🚶🏽 Rotas
### GET
- [x] /user

- [x] /users

- [x] /users/access
### POST
- [x] /users
### DELETE
- [x] /users
### PUT
- [x] /users
<br>

## 🧪 Testes
### 1. Leitura

- O cliente será capaz de fazer buscas no banco de dados local através de duas rotas:

    - a) Em uma rota, este precisará passar uma ID para ler os dados de um usuário específico.

    - b) Já na outra rota, o cliente consultará a totalidade de usuários cadastrados, ou apenas determinados usuários que possuírem parte de ou mesmo nome.
### 2. Inserção

- O cliente realizará inserções de novos registros de usuários no banco de dados informando o nome e a profissão destes.
### 3. Exclusão

- O cliente fará a busca de um usuário específico passando uma ID e o exclui do banco, recebendo retorno do a respeito do sucesso desta exclusão.
### 4. Atualização

- O cliente atualizará os dados de determinado usuário, através de sua ID, informando os novos dados (nome e profissão) para efetuar a modificação.
### 5. Contagem

- Através de uma rota, o cliente conseguirá visualizar quantas vezes os dados de um usuário específico foi lido ao passar sua ID.
### 6. Autorização

- Este teste é relacionado aos testes 3 e 4.

- Consiste em um intermediário que garantirá permissão para as ações realizadas nos testes supracitados. 

    - Neste, o cliente, além de passar os dados para efetuar a ação em si, também precisará informar uma chave que será checada e caso seja válida, será concedida autorização para efetuar a ação desejada.
<br>

## 📁 Arquivos
### app.ts
- Arquivo principal do projeto, onde ficam as rotas e as configurações para receber formulários e JSON da requisição.
##

### fakeData.ts
- Banco de dados local da aplicação.
##

### notFound.ts
- Função que retorna uma mensagem de página não encontrada quando o cliente informa um URL não correspondente a nenhuma das outras rotas.
##

### dataBaseEntryValidate.ts
- Função interligada aos testes 2, 3 e 4.

- Seu papel é validar as entradas de usuários no banco de dados (criar, atualizar e excluir), apenas registrando-os quando fornecidos todos os dados obrigatórios e estes forem válidos.
##

### adminValidate.ts
- Função intermediária ligada aos testes 3, 4 e 6 que valida a autorização do cliente antes de realizar determinada ação.

- Caso o cliente possua permissão, este irá prosseguir para a próxima função;
- Do contrário, será retornada uma mensagem de não autorizado.
##

### teste1.ts
- Este arquivo possui duas funções.

- Ambas checam se existem algum usuário cadastrado no banco de dados antes de prosseguir
- Caso não haja, é retornada uma mensagem de nenhum cadastro.

    1. getUser:
    
        a) Retornar o registro de um usuário específico buscado pela ID informada no formulário ou query da requisição.
           - Caso o registro de um usuário específico seja lido, esta visualização será adicionada à base de dados (a contagem das visualizações será exibida no teste 5).

        b) Retornar todos os registros de usuários se nenhuma ID foi passada.

    2. getUsers:
    
        a) Retornar todos os registros de usuários.

        b) Caso um nome de usuário seja informado no formulário ou query, retorna os usuários que contêm o nome informado. 
           - Se não houver nenhum usuário que contêm um nome correspondente, retorna todos os registros.
##

### teste2.ts
- Criar um novo usuário com base nos dados fornecidos pelo formulário no corpo da requisição e armazená-lo em uma base de dados.
##

### teste3.ts
- Excluir um usuário com base na ID fornecida no corpo da requisição, salvando as alterações no banco de dados.
##

### teste4.ts
- Atualizar as informações de um usuário existente com base na ID fornecida no corpo da requisição, salvando as alterações no banco de dados.
##

### teste5.ts
- Ler as informações de um usuário com base no ID fornecido na requisição e enviar uma resposta contendo a quantidade de visualizações desse usuário, se disponível.
<br>

## 💽 Tecnologias
<span>
    <a href='https://nodejs.org/'>
        <img alt="luisf-node" height="30rem"
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" 
        />
    </a>   
    <a href='https://expressjs.com/'>
        <img alt="luisf-express" height="30rem" 
            src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" 
        />
    <a href='https://www.typescriptlang.org/'>
        <img alt="luisf-typescript" height="30rem"
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" 
        />
    </a>
    <a href='https://eslint.org/'>
        <img alt="luisf-eslint" height="30rem"
            src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" 
        />
    </a>
    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
        <img alt="luisf-html" height="30rem" 
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" 
        />
    </a>
</span><br><br>

<hr> 
<div align="center">
<h5>Excelsior code 💙 by Luís Felipe</h5>
 
[🪐 See my LinkedIn 🪐](https://www.linkedin.com/in/luisf-csdev/)
</div>
