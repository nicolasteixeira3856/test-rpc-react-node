# TestePratico-RPC

## Por que a separação em dois projetos, sendo um front(web-react) e outro back(server-node)? 
Para alcançar uma qualidade melhor de visualização para o usuário final decidi realizar um outro projeto onde pudesse construir um front-end mais robusto, sem precisar utilizar soluções de template render como react-template-render, Pug, Nunjucks e etc.

 ## Bugs conhecidos
  - Devido as datas da API da RPC pode ocorrer da aplicação React não exibir o que está passando no momento, isso se deve pelo fato das diferenças de segundos/minutos entre um programa e outro, como por exemplo: Malhação - Viva a Diferença termina às 18:23:21 e o próximo programa Novo Mundo começa às 18:23:41, se o cliente acessar o site durante essa diferença de segundos será apresentado como se nada estivesse sendo exibido na televisão.

## Projeto back-end feito em NodeJS: server-node
Para executar:
  - npm install
  - npm run dev
OBS: O servidor executará em: http://localhost:3333
  
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
OBS: O projeto react executará em: http://localhost:3000
  
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
  
