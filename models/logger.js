//integrantes:
//João Vitor Furquim de Brito
//Pedro Henrique Silva Melo
//Danilo Augusto Martins Frazon 

const fs = require("fs");

class Logger{
    static log(error){
        const timestamp = new Date().toISOString();
        const message = `[${timestamp}] - ${error}\n`;
        fs.appendFileSync("log.txt", message);
    }
}

module.exports = Logger;