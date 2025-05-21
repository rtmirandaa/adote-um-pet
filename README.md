# AdoteUmPet

Este trabalho consiste no desenvolvimento de uma aplica��o Web Single Page Application trabalhando em mem�ria (com Services).

## Desenvolvimento

Para iniciar o projeto:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Requisitos do Projeto:
- 2 CRUDs; - PET e ADOTANTE
- 1 funcionalidade de filtro ou busca; - Filtro de busca tanto para pet quanto para adotante utilizando Pipes
- 1 funcionalidade de neg�cio; - Adotar pets e gerenciar 
- 1 funcionalidade que tenha relacionamento com duas entidades (pode ser um CRUD ou a pr�pria funcionalidade de neg�cio); - Adotante adota Pet 
- CRUDs completos (pelo menos um por aluno) na aplica��o com utiliza��o de tabela e formul�rio;
- Trabalhar com m�ltiplas telas fazendo uso de rotas;
- Uma funcionalidade de filtro ou busca que evidencie o uso de Pipes; - filtroAdotantes e filtrosPets � um custom pipe, utilizado diretamente no template HTML, ele faz a filtragem din�mica dos adotantes
- Login e tratamento de seguran�a com Token (JWT). - Mockado, salvando no LocalStorage
- Proteger rotas com RouteGuards.
