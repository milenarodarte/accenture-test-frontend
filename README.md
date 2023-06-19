# Front-end Companies-Suppliers

## Pontos a se destacar:
Esse front-end foi desenvolvido em 1 dia e meio e, apesar de apresentar CRUD das duas entidades requisitadas e todos os requisitos pedidos no projeto, o projeto está incompleto e falta implementar a renderização dos relacionamentos entre Companies e Suppliers. 

## Linguagem de programação escolhida: Javascript com React.js e gerenciados de pacotes Yarn.
REACT-HOOK-FORM para criação de formulários.

AXIOS para requisições.

REACT-ROUTER-DOM para definir rotas URL e gerenciar a single page application.

STYLED-COMPONENTS para componentização e reaproveitamente de código CSS.

YUP para validação de formu[arios;

REACT-TOSTIFY para toasts.


# COMO INICIALIZAR O PROJETO

```
1. clone o repositório em sua máquina
2. verifique se já há instalado o Node.js.
3. importar o projeto para sua IDE de preferência. No desenvolvimento desse projeto, foi utilizado o VScode.
4. verifique se há o Yarn na sua máquina.
5. no terminal, dentro do da pasta raiz do projeto, digite o comando: yarn install e dê enter.
6. após verificar que as dependências foram instaladas, na mesma pasta, digite o comando: yarn start e dê enter.
7. O projeto estará rodando por padrão na porta http://localhost:3000/

```


# ROTAS URL (http://localhost:<SERVER_PORT>)

```
http://localhost:3000/*
Rota de erro, com botão para voltar à porta principal

http://localhost:3000/
Rota principal com CRUD de empresas

http://localhost:3000/suppliers
Rota suppliers com CRUD de fornecedores

http://localhost:3000/companies_suppliers
Rota com destino de CRUD dos relacionamentos entre empresas e fornecedores.
No momento, nessa rota, apenas a possibilidade de adicionar o relacionamento entre empresas e fornecedores está ativo. 


```


