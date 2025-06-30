//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

async function connect() {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('ecommerce');
    return { db, client };
}

module.exports = {connect};