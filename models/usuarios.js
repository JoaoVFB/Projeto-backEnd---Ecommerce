//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 

const { connect } = require('./db');

const Logger = require('./logger');
// importar banco de dados

class Usuario {
    constructor(nome, email, endereco, telefone) {
        this.nome = nome,
            this.email = email,
            this.endereco = endereco,
            this.telefone = telefone
    }

    // inserir dados
    async inserir() {
        let client;
        try {
            const conexao = await connect();
            const db = conexao.db;
            client = conexao.client;

            const result = await db.collection("usuarios").insertOne({
                nome: this.nome,
                email: this.email,
                endereco: this.endereco,
                telefone: this.telefone
            });
            console.log("Usuário cadastrado com sucesso.", result.insertedId);
        } catch (error) {
            console.log("Erro ao inserir usuário:", error);
        } finally {
            if (client) {
                client.close();
            }
        }


    }

    //atualizar dados 
    static async atualizar(filtro, novosDados){
        const {db, client} = await connect();
        try{
            const result = await db.collection("usuarios").updateOne(filtro, {$set: novosDados});
            console.log("Dados do cliente atualizado com sucesso: ", result.modifiedCount);
            
        }catch(error){
            console.log("Erro ao atualizar usuário:", error);
        }finally{
            if(client){
                client.close();
            }
        }
    }

    //buscar um usuario
    static async buscar(filtro = {}){
        const {db, client} = await connect();
        try{
            const usuarios = await db.collection("usuarios").find(filtro).toArray();
            console.log("Usuários encontrados: ", usuarios);
        }catch(error){
            Logger.log("Erro ao buscar usuários:"+error);
        }finally {
            if (client) client.close();
        }
    }

    //função para deletar um usuario
    static async deletar(filtro){
        const {db, client} = await connect();
        try{
            const result = await db.collection("usuarios").deleteOne(filtro);
            console.log("Usuários deletados: ", result.deletedCount);
            
        }catch(error){
            Logger.log("Erro ao deletar dado."+error);
        }finally {
            if (client) client.close();
        }
    }
}

module.exports = Usuario;