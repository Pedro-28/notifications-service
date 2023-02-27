# API de Notificações

Este projeto é uma API para gerenciar notificações para usuários.

## Tecnologias

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [NestJS](https://nestjs.com)
- [Prisma](https://www.prisma.io)
- [Jest](https://jestjs.io)

## Instalação

1. Clone este repositório em sua máquina:

   ```sh
   $ git clone git@github.com:Pedro-28/notifications-service.git
   ```
2. Instale as dependências:

   ```sh
   $ cd notifications-service
   $ npm install
   ```
3. Inicie o servidor:

   ```sh
   $ npm run start:dev
   ```
## Rotas

<details>
   <summary><strong>POST /notifications</strong> - cria notificação</summary><br/>
      
   Corpo da requisição:
   
   ```bash
   {
      "recipientId": "id_do_destinatario",
      "content": "conteudo_da_notificacao",
      "category": "categoria_da_notificacao"
   }
   ```
   
   Resposta:

   ```bash
   {
      "notification": {
         "id": "id_da_notificacao",
         "recipientId": "id_do_destinatario",
         "content": "conteudo_da_notificacao",
         "category": "categoria_da_notificacao"
      }
   }
   ```
</details>

## Testes

Para rodar os testes, execute o seguinte comando:

```sh
$ npm run test
```

