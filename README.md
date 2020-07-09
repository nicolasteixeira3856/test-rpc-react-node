# TestePratico-RPC

## Por que a separação em dois projetos, sendo um front e outro back? 
Para alcançar uma qualidade melhor de visualização para o usuário final decidi realizar um outro projeto onde pudesse construir um front-end mais robusto, sem precisar utilizar soluções de template render como react-template-render, Pug, Nunjucks e etc.

## Projeto back-end feito em NodeJS
Para executar:
  - npm install
  - npm run dev
  
Dependências e motivos de utilização das mesmas:
  - express: para acelerar o desenvolvimento da API com conceitos como rotas, MVC, cors e etc
  - axios: decidi utilizar o Axios para facilitar o trabalho com requisições para a API da RPC
  - cors: para aceitar cross-origin resource sharing
  
Melhorias desejadas:
  - Adicionar regex a rota /getRPCProgramming/:date para aceitar apenas datas do formato americano (yyyy-mm-dd)
  - Melhorar as mensagens de erro no geral, devolvendo erros mais expressivos e de fácil compreensão para o usuário que utilizar a API

## Projeto front-end feito em ReactJS
Para executar:
  - npm install
  - npm start
  
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
  
