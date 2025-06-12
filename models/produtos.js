//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 
const Logger = require('./logger');

const { connect } = require('./db');

class Produto {
  constructor(marca, quantidade, nome, preco) {
    this.marca = marca;
    this.quantidade = quantidade;
    this.nome = nome;
    this.preco = preco;
  }

  //inserir dados
  async inserir() {
    let client;
    try {
      const conexao = await connect();
      const db = conexao.db;
      client = conexao.client;

      const result = await db.collection("produtos").insertOne({
        marca: this.marca,
        quantidade: this.quantidade,
        nome: this.nome,
        preco: this.preco
      });
      console.log("Produtos cadastrado com sucesso.", result.insertedId);
    } catch (error) {
      console.log("Erro ao inserir produtos:", error);
    } finally {
      if (client) {
        client.close();
      }
    }

  }


  //atualizar dados 
  static async atualizar(filtro, novosDados) {
    const { db, client } = await connect();
    try {
      const result = await db.collection("produtos").updateOne(filtro, { $set: novosDados });
      console.log("Dados do produto atualizado com sucesso: ", result.modifiedCount);

    } catch (error) {
      Logger.log("Erro ao atualizar produto:", error);
    } finally {
      if (client) {
        client.close();
      }
    }
  }

  //buscar um usuario
  static async buscar(filtro = {}) {
    const { db, client } = await connect();
    try {
      const produtos = await db.collection("produtos").find(filtro).toArray();
      console.log("Produto encontrado: ", produtos);
    } catch (error) {
      Logger.log("Erro ao buscar produto:" + error);
    } finally {
      if (client) client.close();
    }
  }

  //deletar dados
  static async deletar(filtro) {
    const { db, client } = await connect();
    try {
      const result = await db.collection("produtos").deleteOne(filtro);
      console.log("Produtos deletados: ", result.deletedCount);

    } catch (error) {
      Logger.log("Erro ao deletar produto." + error);
    } finally {
      if (client) client.close();
    }
  }


}

module.exports = Produto;