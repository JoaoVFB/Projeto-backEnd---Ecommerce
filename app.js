//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 

const { MongoClient, ObjectId } = require('mongodb');

const Usuario = require('./models/usuarios');
const Produto = require('./models/produtos');
const Pedido = require('./models/pedidos');
const Logger = require('./controllers/logger');

async function main() {
    try {
        // --- INSERIR USUÁRIOS ---
        const usuario1 = new Usuario('João Silva', 'joao@email.com', 'Rua A, 123', '11999999999');
        const usuario2 = new Usuario('Maria Oliveira', 'maria@email.com', 'Av. B, 456', '21988888888');

        await usuario1.inserir();
        await usuario2.inserir();

        // --- BUSCAR USUÁRIOS PELO EMAIL PARA PEGAR O _id ---
        const usuarios = await buscarUsuariosComFiltro({ email: { $in: ['joao@email.com', 'maria@email.com'] } });
        const idJoao = usuarios.find(u => u.email === 'joao@email.com')._id;
        const idMaria = usuarios.find(u => u.email === 'maria@email.com')._id;

        // --- INSERIR PRODUTOS ---
        const produto1 = new Produto('Apple', 10, 'iPhone 14', 4500);
        const produto2 = new Produto('Samsung', 5, 'Galaxy S22', 3800);

        await produto1.inserir();
        await produto2.inserir();

        // --- BUSCAR PRODUTOS PELOS NOMES PARA PEGAR OS _id ---
        const produtos = await buscarProdutosComFiltro({ nome: { $in: ['iPhone 14', 'Galaxy S22'] } });
        const idIphone = produtos.find(p => p.nome === 'iPhone 14')._id;
        const idGalaxy = produtos.find(p => p.nome === 'Galaxy S22')._id;

        // --- INSERIR PEDIDOS USANDO IDs REAIS ---
        const pedido1 = new Pedido(idJoao, [idIphone, idGalaxy], 8300, 'em processamento');
        const pedido2 = new Pedido(idMaria, [idIphone], 4500, 'entregue');

        await pedido1.inserir();
        await pedido2.inserir();

        // --- CONSULTAR PEDIDOS ---
        await Pedido.buscar();

        // --- ATUALIZAR PEDIDO (exemplo com status) ---
        await Pedido.atualizar({ status: 'em processamento' }, { status: 'enviado' });

        // --- DELETAR UM PEDIDO COM STATUS "entregue" ---
        await Pedido.deletar({ status: 'entregue' });

    } catch (err) {
        Logger.error('Erro geral:' + err);
    }
}

// Funções auxiliares para buscar dados com retorno
async function buscarUsuariosComFiltro(filtro) {
    const { connect } = require('./database/db');
    const { db, client } = await connect();
    try {
        const usuarios = await db.collection('usuarios').find(filtro).toArray();
        return usuarios;
    } catch (err) {
        Logger.error("Erro ao buscar usuários:" + err);
        return [];
    } finally {
        client.close();
    }
}

async function buscarProdutosComFiltro(filtro) {
    const { connect } = require('./database/db');
    const { db, client } = await connect();
    try {
        const produtos = await db.collection('produtos').find(filtro).toArray();
        return produtos;
    } catch (err) {
        Logger.error("Erro ao buscar produtos:" + err);
        return [];
    } finally {
        client.close();
    }
}

main();
