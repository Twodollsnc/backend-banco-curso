import mysql from "mysql2/promise"

const NameDB = "DB_DigitalBank"

export async function InitializeBanco() {
    const conection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123456"
    });
    const [rows] = await conection.query(`show databases like '${NameDB}'`)
    if((rows as any[]).length === 0){
        console.log("Banco de dados nao existente, criando um");
        await conection.query(`CREATE DATABASE ${NameDB}`)
        console.log("Banco de dados criado");        
    }
    else
    {
        console.log("Banco de dados existente");
    }
    await conection.end();
}