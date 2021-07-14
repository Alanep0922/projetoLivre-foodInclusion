[![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](https://foodinclusion.herokuapp.com/) 

<h1 align="center">
  <p align="center">Projeto - FoodInclusion<p>
</h1>

> API que lista negócios que fornecem e produzem produtos orgânicos e alimentos próprios para alérgicos, levando em consideração a contaminação cruzada.

> Status: Em construção... 🚧  

## Contrato
<h1 align="center">
<a href="https://ibb.co/TPgTqnR"><img src="https://i.ibb.co/5sR9xzv/pexels-fauxels-3184183-2.jpg" alt="pexels-fauxels-3184183-2" border="0"></a>
</h1>
Acesse a apresentação do projeto no link abaixo: 
https://www.canva.com/design/DAEjgrNJK8A/Wve7HcKbk0tN3hLU7NbbIA/view?utm_content=DAEjgrNJK8A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

<br>
<br>

```
## Sobre o Projeto

O FoodInclusion é um sistema de gerenciamento de negócios voltado para o consumidor sensitivo.

Esta aplicação é uma API onde será possível compilar e gerenciar negócios certificados e seguros que atuam no fornecimento, produção e manipulação de alimentos próprios para pessoas que possuem algum tipo de restrição alimentar, considerando as nuances da contaminação cruzada, além das opções orgânicas para os optantes de alimentos saudáveis. 

A plataforma é um CRUD desenvolvido em JavaScript e Node.js, onde recebe o cadastro de negócios referenciando por ramo/nicho de atuação, utilizando-se do MongoDB como Banco de Dados NoSQL.  
```
 ## 🚀 **Tecnologias e dependências**
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript |
| `express` | Framework NodeJS para construção de APIs Rest |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
|`Postman ` | Interface gráfica para realizar os testes|
| `MongoDb` | Banco de dado não relacional orientado a documentos|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `MongoDb Compass` | Interface gráfica para realizar testes|
| `MongoDb Atlas`| Banco de dados como serviço - na nuvem |
|`Github` | Instrumento de versionamento de código|
|`Heroku` |  Plataforma de hospedagem para aplicações back-end |

<br>
<br>

## 📁 Arquitetura MVC (Model-View-Controller)

```
 📁 PROJETOLIVRE-FOODINCLUSION
   |
   |-  📁 src
   |    |
   |    |- 📁 configs
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 branch.controller.js
   |         |- 📄 market.controller.js
   |
   |    |- 📁 models
   |         |- 📄 branch.js
   |         |- 📄 market.js
   |
   |    |- 📁 routes
   |         |- 📄 branch.routes.js 
   |         |- 📄 market.routes.js 
   |    | - 📄 app.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 LICENSE
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js

```

<br>
<br>

## 🎯 **Rotas HTTP**

## Retorna rota default da aplicação

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:3000/`     |  Mensagem de apresentação (Index)    |             |

<br>

## Manipulação das Rotas Branch:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/branch`              | Retorna todos os ramos de negócios cadastrados    |
| POST         | `/branch`              | Criar/cadastrar um ramo de negócio                |
| PUT          | `/branch/:id`          | Atualizar/Substituir um ramo de negócio           |
| DELETE       | `/branch/:id`          | Retorna a remoção de um ramo de negócio           |

<br>

## Manipulação das Rotas Market:


| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/market`              | Criar/cadastrar um negócio                        |
| GET          | `/market`              | Retorna todos os negócios cadastrados             |
| GET          | `/market/city`         | Retorna todos os negócios de uma cidade           |
| PUT          | `/market/:id`          | Atualizar/Substituir um negócio                   |
| DELETE       | `/market/:id`          | Retorna a remoção de um negócio                   |

<br>

### Dados para Collection branch

- id: autogerado e obrigatório
- name: texto e obrigatório
- createdIn: data gerada automaticamente e obrigatório
### API deve retornar seguinte JSON:

```jsx

{
    "_id": "60e6641fad68a207c0a24760",
    "name": "Feira orgânica",
    "createdIn": "2021-07-08T02:33:53.858Z",
    "__v": 0
}

```
<br>
<br>

### Dados para Collection market

- id: autogerada e obrigatória
- name: texto e obrigatório
- description: texto e obrigatório 
- city: texto e obrigatório
- branch: referencia do ramo de negócio cadastrado previamente obrigatório
- createdIn: data gerada automaticamente e obrigatório

### API deve retornar seguinte JSON:

```jsx

{
    
    "_id": "60e66618ad68a207c0a24773",
    "name": "E.livre",
    "description": "Confeitaria Inclusiva, Sem glúten, leite (APLV). Opções vegan, low carb e adoçadas com frutas, controle de contaminação cruzada.",
    "city": "Recife",
    "branch": "60e664dead68a207c0a2476c",
    "createdIn": "2021-07-08T02:33:53.874Z",
    "__v": 0
}

```
<br>
<br>

## Maria Priscila
- [linkedin](https://www.linkedin.com/in/maria-priscila-c/)
- [github](https://github.com/PrisRocha)
```
