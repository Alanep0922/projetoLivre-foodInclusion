[![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](https://foodinclusion.herokuapp.com/) 
![badge node version](https://img.shields.io/badge/node-v12.18.3-brightgreen)
![badge fork](https://img.shields.io/github/forks/maaysiq/projeto-final?style=social)
![badge license](https://img.shields.io/github/license/maaysiq/projeto-final?style=social)

<h1 align="center">
  <p align="center">Projeto - FoodInclusion<p>
</h1>

> API que lista negócios que fornecem e produzem produtos orgânicos e alimentos próprios para alérgicos, levando em consideração a contaminação cruzada.

> Status: Em construção... 🚧 👷  

 ## 📚 **Sobre o Projeto**

 Os conceitos do projeto serão apresentados aos negócios especializados no ramo alimentício que é voltado para alérgicos/orgânicos, ou que queiram abrir o leque do público de modo que possa incentivar a inclusão alimentar desse grupo, considerando a relevância de uma porcentagem solidada da população mundial que são acometidas á restrições alimentares ou que simplesmente optam por alimentos mais saudáveis e que não prejudicam o meio ambiente em seu plantio e produção. 

 ### Metas do projeto
1. Fortalecer a capacidade de busca de negócios certificados e seguros de uma determinada Cidade/Estado, que utilizam produtos que seguem a Rotulagem de Alimentos Alergênicos da Agência Nacional de Vigilância Sanitária (Anvisa) e que produzem alimentos e vegetais orgânicos.
2. Desenvolver a competência  do alcance da API para apoiar seus membros criando uma ponte ao grupo de consumidores sensíveis, mediando com estratégias e promoções do negócio que atua neste ramo a partir deste Projeto. 
3. Desenvolver modelos colaborativos entre as organizações parceiras da plataforma e assim fortalecê-las para ampliar a sua visibilidade e influenciarem a inclusão do setor especifico de consumo. 

 ## 🚀 **Tecnologias e dependências**

 [Git](https://git-scm.com/)

 [GitHub](https://github.com/)

 [NodeJS](https://nodejs.org/pt-br/) 

 [Nodemon](https://www.npmjs.com/package/nodemon)

 [Express](https://expressjs.com/pt-br/)

 [MongoDB](https://www.mongodb.com/)

 [Mongoose](https://mongoosejs.com/)

 [Dotenv-safe](https://www.npmjs.com/package/dotenv-safe)


## 🔧 **Funcionalidades**

- [X] Cadastro de negócios especializados; 
- [X] Cadastro de ramo de negócios especializados;
- [X] Lista de todos os  negócios cadastrados;
- [X] Lista de todos os  ramos de um negócio;
- [X] Lista de negócios por cidade;
- [X] Atualiza/substitui negócios por ID;
- [X] Atualiza/substitui ramo de negócio por ID;
- [X] Remoção de negócios por ID;
- [X] Remoção de ramo de negócio por ID;

## 🎯 **Rotas HTTP**

Esta API está sendo executada na `porta 3000` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:3000/` antes dos endpoints de requisição.


| Feature | Método | Rota |
|---------|--------|------|
| Lista de negócios | GET | `/market` |
| Cadastra um negócio na base de dados | POST | `/market` |
| Lista negócios por cidade por query | GET | `/market/city<city-nome-da-cidade>` |
| Atualiza/substitui um negócio por id | PUT | `/market/:id` |
| Remoção de um negócio por id | DELETE | `/market/:id` |
| Lista de ramos de negócios cadastrados | GET | `/branch` |
| Cadastra um ramo de negócio na base de dados | POST | `/branch` |
| Atualiza/substitui um ramo de negócio por id | PUT | `/branch/:id` |
| Remoção de um ramo de negócio por id | DELETE | `/branch/:id` |


## 📌 **Instruções para instalação e contribuições no projeto**

*Instalação*

 Clonar o repositório
` git clone https://github.com/PrisRocha/projetoLivre-foodInclusion.git `

 Instalar as dependências
 ` npm install `

 Renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `3000`), `MONGODB_URI` (string de conexão com o banco de dados)

 Executar o servidor
 ` npm start `

*Contribuição*

Faça um `fork` do projeto 

Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-sua-branch`

Commit suas alterações `git commit -m 'sua mensagem'`

Suba o projeto no seu GitHub `git push origin feature/<sua_branch>`;

 Crie um novo _Pull Request_ com as contribuições para o projeto original.


---



