# English

## Why the separation in two projects, being a front (web-react) and another back (server-node)?
To achieve a better quality of visualization for the end user I decided to carry out another project where I could build a more robust front end, without having to use template render solutions such as react-template-render, Pug, Nunjucks and etc.

 ## Known bugs
  - Due to the dates of the RPC API, the React application may not show what is happening at the moment, this is due to the fact that the seconds / minutes differ between one program and another, such as: Malhação - Viva a Diferença ends at 18:23:21 and the next New World program starts at 18:23:41, if the customer accesses the site during this time difference, it will be presented as if nothing is being shown on television.

## Back-end project made in NodeJS: server-node
To execute:
  - npm install
  - npm run dev
  - The server will run at: http: // localhost: 3333
  
Dependencies and reasons for using them:
  - express: to accelerate the development of the API with concepts such as routes, MVC, cors and etc.
  - axios: I decided to use Axios to facilitate the work with requests for the RPC API
  - cors: to accept cross-origin resource sharing
  
Desired improvements:
  - Add regex to the route / getRPCProgramming /: date to accept only dates in the American format (yyyy-mm-dd)
  - Improve error messages in general, returning more expressive and easy to understand errors for the user using the API
  - Treat the JSON data of the RPC API on the back end, thus sending a cleaner "JSON" to the front

## Front-end project done in ReactJS: web-react
To execute:
  - npm install
  - npm start
  - The react project will run at: http: // localhost: 3000
  
Dependencies and reasons for using them:
  - material-ui-react: accelerate the development process with ready-made components
  - axios: I decided to use Axios to facilitate work with requests for the simple API built in NodeJS
  - moment: the use of momentjs is mainly due to the ease it brings with it to work with dates (comparisons, formatting, etc.)
  - moment-timezone: to complement moment with possibilities for formatting timezones (for example: formatting a date in Brasília time)
  - react-icons: react-icons is a robust library that brings a very diverse range of icons to the system, such as Material Design Icons, Font Awesome, Feather, Bootstrap Icons and etc.
  
Desired improvements:
  - Auto-scroll for the program currently playing
  - Expand the accordion of the program currently playing
  - Add an input of type date at the beginning of the page, which is defined in principle for the day of the date that the user enters the site, but which gives the option to change to any day and month that he wishes
  - Add a "in a moment" session in case the mentioned bugs section of this readme occurs
  - Make changes in the JSON from the RPC API in the backend
  - Add a loading spinner if the project has not yet completed the request for the back-end
  
# Português

## Por que a separação em dois projetos, sendo um front(web-react) e outro back(server-node)? 
Para alcançar uma qualidade melhor de visualização para o usuário final decidi realizar um outro projeto onde pudesse construir um front-end mais robusto, sem precisar utilizar soluções de template render como react-template-render, Pug, Nunjucks e etc.

 ## Bugs conhecidos
  - Devido as datas da API da RPC pode ocorrer da aplicação React não exibir o que está passando no momento, isso se deve pelo fato das diferenças de segundos/minutos entre um programa e outro, como por exemplo: Malhação - Viva a Diferença termina às 18:23:21 e o próximo programa Novo Mundo começa às 18:23:41, se o cliente acessar o site durante essa diferença de segundos será apresentado como se nada estivesse sendo exibido na televisão.

## Projeto back-end feito em NodeJS: server-node
Para executar:
  - npm install
  - npm run dev
  - O servidor executará em: http://localhost:3333
  
Dependências e motivos de utilização das mesmas:
  - express: para acelerar o desenvolvimento da API com conceitos como rotas, MVC, cors e etc
  - axios: decidi utilizar o Axios para facilitar o trabalho com requisições para a API da RPC
  - cors: para aceitar cross-origin resource sharing
  
Melhorias desejadas:
  - Adicionar regex a rota /getRPCProgramming/:date para aceitar apenas datas do formato americano (yyyy-mm-dd)
  - Melhorar as mensagens de erro no geral, devolvendo erros mais expressivos e de fácil compreensão para o usuário que utilizar a API
  - Tratar os dados do JSON da API da RPC no back-end, enviando assim para o front um JSON mais "limpo"

## Projeto front-end feito em ReactJS: web-react
Para executar:
  - npm install
  - npm start
  - O projeto react executará em: http://localhost:3000
  
Dependências e motivos de utilização das mesmas:
  - material-ui-react: acelerar o processo de desenvolvimento com componentes prontos
  - axios: decidi utilizar o Axios para facilitar o trabalho com requisições para a simples API construída em NodeJS
  - moment: a utilização do momentjs se deve principalmente a facilidade que ela traz consigo de trabalhar com datas (comparações, formatações e etc)
  - moment-timezone: para complementar o moment com possibilidades de formatação de timezones (por exemplo: formatar uma data no horário de Brasília)
  - react-icons: o react-icons é uma biblioteca robusta que traz consigo uma gama muito diversificada de ícones para o sistema, como por exemplo o Material Design Icons, Font Awesome, Feather, Bootstrap Icons e etc
  
Melhorias desejadas:
  - Auto-scroll para o programa em exibição no momento
  - Expandir o accordion do programa em exibição no momento
  - Adicionar um input do tipo date no começo da página, que seja definido a principio para o dia da data que o usuário entrar no site, mas que dê a opção de alterar para qualquer dia e mês que desejar
  - Adicionar uma sessão de "em instantes" para caso ocorra o que está mencionado na seção de bugs conhecidos desse readme
  - Efetuar alteração da trativa do JSON de retorno da API RPC para o back-end
  - Adicionar um spinner de loading caso o projeto ainda não tenha finalizado a requisição para o back-end
  
