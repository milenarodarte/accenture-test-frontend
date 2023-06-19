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

1. clone o repositório em sua máquina
2. verifique se já há instalado o Node.js.
```
3. importar o projeto para sua IDE de preferência. No desenvolvimento desse projeto, foi utilizado o VScode.
4. verifique se há oo Yarn na sua máquina.
```


# ROTAS (http://localhost:<SERVER_PORT>)
## COMPANIES 

### GET (/companies)
retorno de todas as companies cadastradas no banco de dados. 

### GET (/companies/{id})
retorno da company buscada por seu ID.

### GET (/companies/cnpj/{cnpj}) 
retorno da company buscada por seu CNPJ

### GET (companies/business_name/{businessName})
retorno das companies por seu business_name 

### POST (/companies) 
criaçao da company através do corpo completo de requisição: 
```json
{ "business_name": "string", "cnpj": "string", "cep": "string" }
```

### PUT (companies/{id})
update da company através do envio do seu id e corpo completo de requisição: 
```json
{ "business_name": "string", "cnpj": "string", "cep": "string" }
```

### DELETE (/companies/{id})
deleçao a company e seus respectivos relacionamentos

### POST (companies/{companyId}/supplier/{supplierId})
relaciona um supplier a uma company através dos seus ids passados no parâmetro. 

### DELETE (companies/{companyId}/supplier/{supplierId})
deleta o relacionamento de um supplier com uma company


## SUPPLIERS

### GET (/suppliers)
retorno de todas os suppliers cadastradas no banco de dados. 

### GET (/suppliers/{id})
retorno do supplier buscada por seu ID.

### GET (/suppliers/name/{name})
retorno dos suppliers por seu name 

### GET (/suppliers/cpfcnpj/{cpfcnpj}) 
retorno do supplier buscado por seu CNPJ ou CPF

### POST (/suppliers) 
criaçao do supplier através do envio do seu id e corpo completo de requisição: 
```json
  {	
    "name": "string",	
    "cpfCnpj": "string", 
    "email": "string", 
    "cep": "string", 
    "rg": "string", 
    "birthdate": "YYYY-MM-DD"
  }
```
- _RG e Birthdate apenas para pessoa física._

### PUT (/suppliers/{id})
update do supplier através do envio do seu id e corpo completo de requisição: 
```json
  {	
    "name": "string",	
    "cpfCnpj": "string", 
    "email": "string", 
    "cep": "string", 
    "rg": "string", 
    "birthdate": "YYYY-MM-DD"
  }
```
- _RG e Birthdate apenas para pessoa física._

### DELETE (suppliers/{Id})
deleta um supplier e seus respectivos relacionamentos

## COMPANY_SUPPLIER (/companies_suppliers)


### GET (/companies_suppliers)
retorno de todops os relacionamentos cadastradas no banco de dados. 

### GET (/companies_suppliers/company_id/{companyId})
retorno de todops os relacionamentos que tiverem o id da company_id passada. 

### GET (/companies_suppliers/supplier_id/{supplierId})
retorno de todops os relacionamentos que tiverem o id do supplier_id passada. 

### GET (/companies_suppliers/company_id/{companyId}/supplier_id/{supplierId})
retorno de todops o relacionamento que corresponder a company_id com o supplier_id passado. 


