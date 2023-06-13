# API de Notificações

Este projeto é uma API para gerenciar notificações para usuários, desenvolvido utilizando os princípios do Clean Code, Clean Architecture e Programação Orientada a Objetos. Além disso, foi adotado o padrão de projeto Domain-Driven Design (DDD) e os princípios do SOLID para promover uma estrutura organizada e de fácil manutenção.

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

<details>
   <summary><strong>PATCH /notifications/:id/cancel</strong> - cancela notificação</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o id da notificação na url.
   ```
   
   Resposta:

   ```bash
      Não possui resposta.
   ```
</details>

<details>
   <summary><strong>PATCH /notifications/:id/read</strong> - lê notificação</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o id da notificação na url.
   ```
   
   Resposta:

   ```bash
      Não possui resposta.
   ```
</details>

<details>
   <summary><strong>PATCH /notifications/:id/unread</strong> - cancela leitura da notificação</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o id da notificação na url.
   ```
   
   Resposta:

   ```bash
      Não possui resposta.
   ```
</details>

<details>
   <summary><strong>GET /notifications/from/:recipientId</strong> - obtém notificações através do id do destinatário</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o id do destinatário na url.
   ```
   
   Resposta:

   ```bash
   {
      "notifications": [
         {
            "id": "id_da_notificacao",
            "recipientId": "id_do_destinatario",
            "content": "conteudo_da_notificacao",
            "category": "categoria_da_notificacao"
         },
         {
            "id": "id_da_notificacao",
            "recipientId": "id_do_destinatario",
            "content": "conteudo_da_notificacao",
            "category": "categoria_da_notificacao"
         },
      ]
   }
   ```
</details>

<details>
   <summary><strong>GET /notifications/count/from/:recipientId</strong> - conta notificações através do id do destinatário</summary><br/>
      
   Corpo da requisição:
   
   ```bash
      Não possui corpo da requisição, apenas o id do destinatário na url.
   ```
   
   Resposta:

   ```bash
   {
      "count": numero_de_notificacoes_que_destinatario_possui
   }
   ```
</details>

## Testes

Para rodar os testes, execute o seguinte comando:

```sh
$ npm run test
```

