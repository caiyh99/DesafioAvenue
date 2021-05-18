# DESAFIO SENSEDIA

## .ENV

Para rodar a automação será necessário passar algumas variáveis de ambiente, siga o exemplo de .env contido no repositório e substitua as variáveis faltantes com os valores de sua conta.

### Key

Para conseguir uma Key, crie uma conta no trello e siga o tutorial

https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/

## Rodando testes

A melhor forma de rodar os testes é com o comando `npm run test`, pois o mesmo irá rodar todas as suítes.

Caso queira rodar um cenário isolado, adicione a tag `@only` no cenário desejado e rode com `npm run only`

É possivel gerar um arquivo .html com o relatório do último teste rodado com o comando `npm run report` um navegador irá abrir e mostrar o relatório.

