<h1>Projeto Back-End - ECommerceAPI</h1>

<h2>Tópicos</h2>
<ul>
  <li><a href="#integrantes-da-equipe">Integrantes da equipe</a></li>
  <li><a href="#instituicao-atendida">Instituição atendida</a></li>
  <li><a href="#descricao-do-projeto">Descrição do projeto</a></li>
  <li><a href="#estrutura-do-projeto">Estrutura do projeto</a></li>
  <li><a href="#funcionalidades">Funcionalidades</a></li>
  <li><a href="#tecnologias">Tecnologias utilizadas</a></li>
</ul>

<h2 id="integrantes-da-equipe">Integrantes da Equipe </h2>
<markdown-accessiblity-table data-catalyst=""><table tabindex="0">
<thead>
  <tr>
    <th align="center"><a href="https://github.com/JoaoVFB"><img src="https://i.ibb.co/rHmQwYP/IMG-20240525-122603958-HDR.jpg" width="110"><br><sub>João Vitor Furquim</sub></a></th>
    <th align="center"><a href="https://github.com/Pedro-Meloo"><img src="https://i.ibb.co/y0Ydhjd/foto-Pedro.jpg" width="110"><br><sub>Pedro Henrique Silva Melo</sub></a></th>
    <th align="center"><a href="https://github.com/DaniloFrazon"><img src="https://i.ibb.co/8P0574B/Whats-App-Image-2024-11-21-at-21-04-00.jpg" width="100"><br><sub>Danilo Augusto</sub></a></th>
  </tr>
</thead>
</table></markdown-accessiblity-table>

<h2 id="instituicao-atendida">Instituição atendida</h2>
<p><strong>ECommerce Simulado – Projeto Acadêmico</strong></p>

<h2 id="descricao-do-projeto">Descrição do Projeto</h2>
<p>
  O projeto tem como objetivo desenvolver uma API back-end para uma plataforma de e-commerce, permitindo o gerenciamento completo de usuários, produtos e pedidos. A aplicação contará com rotas seguras e funcionalidades de CRUD (Create, Read, Update, Delete), atendendo aos principais processos de uma loja virtual.
</p>

<h2 id="estrutura-do-projeto">Estrutura do Projeto</h2>
<ol>
  <li><strong>Diretórios principais:</strong></li>
  <ul>
    <li><strong>models/</strong>: Contém as classes <code>Usuario</code>, <code>Produto</code> e <code>Pedido</code></li>
    <li><strong>controllers/</strong>: Contém a lógica das operações da API</li>
    <li><strong>routes/</strong>: Definição de rotas para cada entidade</li>
    <li><strong>database/</strong>: Configuração do banco de dados</li>
    <li><strong>server.js</strong>: Arquivo principal que inicializa a aplicação</li>
  </ul>
</ol>

<h2 id="funcionalidades">Funcionalidades</h2>
<ol>
  <li><strong>Usuários:</strong></li>
  <ul>
    <li>Criar novo usuário</li>
    <li>Buscar usuário por ID ou listar todos</li>
    <li>Atualizar dados de um usuário</li>
    <li>Deletar usuário</li>
  </ul>
  <li><strong>Produtos:</strong></li>
  <ul>
    <li>Inserir novo produto</li>
    <li>Buscar produto por ID ou nome</li>
    <li>Atualizar dados de um produto</li>
    <li>Remover produto</li>
  </ul>
  <li><strong>Pedidos:</strong></li>
  <ul>
    <li>Criar novo pedido (relacionando usuário e produtos)</li>
    <li>Consultar pedidos por usuário ou ID</li>
    <li>Atualizar status do pedido (em andamento, finalizado, cancelado)</li>
    <li>Deletar/cancelar pedido</li>
  </ul>
</ol>

<h2 id="tecnologias">Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Node.js</strong></li>
  <li><strong>MongoDB</strong></li>
  <li><strong>Mongoose</strong></li>
  <li><strong>Nodemon</strong> para desenvolvimento</li>
  <li><strong>Postman</strong> para testes dos endpoints</li>
</ul>
