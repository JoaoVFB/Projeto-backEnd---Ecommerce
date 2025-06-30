//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 

const { ObjectId } = require('mongodb');
const { connect } = require('../database/db');
const Logger = require('../controllers/logger');

class Pedido {
    constructor(userId, produtosId, valorTotal, status = 'pendente') {
        this.userId = new ObjectId(userId);
        this.produtosId = produtosId.map(id => new ObjectId(id));
        this.valorTotal = valorTotal;
        this.status = status;
    }

    async inserir() {
        let client;
        try {
            const conexao = await connect();
            const db = conexao.db;
            client = conexao.client;

            const result = await db.collection("pedidos").insertOne({
                userId: this.userId,
                produtosId: this.produtosId,
                valorTotal: this.valorTotal,
                status: this.status
            });
            console.log("Pedido cadastrado com sucesso:", result.insertedId);
        } catch (error) {
            Logger.log("Erro ao inserir pedido:" + error);
        } finally {
            if (client) client.close();
        }
    }

    static async buscar(filtro = {}) {
        let client;
        try {
            const conexao = await connect();
            const db = conexao.db;
            client = conexao.client;

            const pedidos = await db.collection("pedidos").find(filtro).toArray();
            console.log("Pedidos encontrados: ", pedidos);
        } catch (error) {
            Logger.log("Erro ao buscar pedidos:" + error);
        } finally {
            if (client) client.close();
        }
    }

    static async atualizar(filtro, novosDados) {
        let client;
        try {
            const conexao = await connect();
            const db = conexao.db;
            client = conexao.client;

            const result = await db.collection("pedidos").updateOne(filtro, { $set: novosDados });
            console.log("Pedidos atualizados:", result.modifiedCount);
        } catch (error) {
            Logger.log("Erro ao atualizar pedido:" + error);
        } finally {
            if (client) client.close();
        }
    }

    static async deletar(filtro) {
        let client;
        try {
            const conexao = await connect();
            const db = conexao.db;
            client = conexao.client;

            const result = await db.collection("pedidos").deleteOne(filtro);
            console.log("Pedido deletado:", result.deletedCount);
        } catch (error) {
            Logger.log("Erro ao deletar pedido:" + error);
        } finally {
            if (client) client.close();
        }
    }
}

module.exports = Pedido;
