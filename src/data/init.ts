import mysql from "mysql2/promise";
import { env } from "../config/env";

export async function InitializeBanco() {
    const connection = await mysql.createConnection({
        host:     env.db.host,
        user:     env.db.user,
        password: env.db.password,
    });

    const [rows] = await connection.query(
        `SHOW DATABASES LIKE '${env.db.name}'`
    );

    if ((rows as any[]).length === 0) 
    {
        console.log("Banco não encontrado — criando...");
        await connection.query(`CREATE DATABASE ${env.db.name}`);
        console.log(`Banco '${env.db.name}' criado com sucesso!`);
    } 
    else
    {
        console.log(`Banco '${env.db.name}' já existe.`);
    }

    await connection.end();
}