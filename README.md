# Projeto-backEnd_E-commerce
Projeto Back-End - E-commerceAPI
🗂️ Tópicos
Integrantes da equipe

Empresa simulada atendida

Descrição do projeto

Funcionalidades principais

Estrutura das classes

Tecnologias utilizadas

👥 Integrantes da equipe
<table> <thead> <tr> <th align="center"><a href="https://github.com/JoaoVFB"><img src="https://i.ibb.co/rHmQwYP/IMG-20240525-122603958-HDR.jpg" width="110"><br><sub>João Vitor Furquim</sub></a></th> <th align="center"><a href="https://github.com/Pedro-Meloo"><img src="https://i.ibb.co/y0Ydhjd/foto-Pedro.jpg" width="110"><br><sub>Pedro Henrique Silva Melo</sub></a></th> <th align="center"><a href="https://github.com/DaniloFrazon"><img src="https://i.ibb.co/8P0574B/Whats-App-Image-2024-11-21-at-21-04-00.jpg" width="100"><br><sub>Danilo Augusto</sub></a></th> </tr> </thead> </table>
🏪 Empresa Simulada Atendida
Loja Virtual Fictícia - E-commerceAPI

📝 Descrição do Projeto
O projeto E-commerceAPI é uma aplicação back-end que simula o funcionamento de um sistema de e-commerce. Desenvolvida com foco em boas práticas de POO e arquitetura em camadas, a API permite gerenciar usuários, produtos e pedidos, oferecendo funcionalidades completas de CRUD (Create, Read, Update, Delete) e rotas RESTful.

O sistema visa servir como base para integrações com um front-end futuro, podendo atender lojas virtuais de pequeno a médio porte.

⚙️ Funcionalidades Principais
Cadastro de usuários

Inserção, listagem, atualização e remoção de produtos

Criação e acompanhamento de pedidos

Filtros de busca por nome, categoria e status

Validação de dados e tratamento de erros

Documentação da API com Swagger (em desenvolvimento)

📦 Estrutura das Classes
🔹 Usuário
id

nome

email

senha (criptografada)

tipo (cliente ou admin)

🔹 Produto
id

nome

preço

descrição

categoria

quantidade_em_estoque

🔹 Pedido
id

id_usuario

lista_produtos (com quantidades)

valor_total

status (em processamento, enviado, entregue)

💻 Tecnologias Utilizadas
Linguagem: Java (ou Node.js/Python — adaptar conforme linguagem usada)

Framework: Spring Boot / Express / Django REST

Banco de Dados: MySQL / PostgreSQL

ORM: Hibernate / Sequelize / Django ORM

Autenticação: JWT

Versionamento: Git

Documentação: Swagger (OpenAPI)
