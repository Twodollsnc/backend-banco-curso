import express from "express"
import { InitializeBanco } from "../data/init"
import { db } from "../data/connection" 
import { error } from "node:console";

const PORTA = 8000
export async function startServer(){
    const app = express();

    app.use(express.json())
    try
    {
        await InitializeBanco();
        await db.getConnection();
        console.log("Banco pronto");
        app.listen(PORTA, ()=>{ console.log("Servidor iniciado com sucesso");})
    }
    catch(e)
    {
        console.log(`erro ao iniciar servidor \n tal erro ${error}`);
    }
}