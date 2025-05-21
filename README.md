# AdoteUmPet

Este trabalho consiste no desenvolvimento de uma aplicação Web Single Page Application trabalhando em memória (com Services).

## Desenvolvimento

Para iniciar o projeto:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Requisitos do Projeto:
- 2 CRUDs; - PET e ADOTANTE
- 1 funcionalidade de filtro ou busca; - Filtro de busca tanto para pet quanto para adotante utilizando Pipes
- 1 funcionalidade de negócio; - Adotar pets e gerenciar 
- 1 funcionalidade que tenha relacionamento com duas entidades (pode ser um CRUD ou a própria funcionalidade de negócio); - Adotante adota Pet 
- CRUDs completos (pelo menos um por aluno) na aplicação com utilização de tabela e formulário;
- Trabalhar com múltiplas telas fazendo uso de rotas;
- Uma funcionalidade de filtro ou busca que evidencie o uso de Pipes; - filtroAdotantes e filtrosPets é um custom pipe, utilizado diretamente no template HTML, ele faz a filtragem dinâmica dos adotantes
- Login e tratamento de segurança com Token (JWT). - Mockado, salvando no LocalStorage
- Proteger rotas com RouteGuards.
