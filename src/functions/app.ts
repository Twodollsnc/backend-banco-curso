import express from "express"
import { InitializeBanco } from "../data/init"
import { db } from "../data/connection" 
import { createTables } from "../data/Createtables";
import { error } from "node:console";
import { env } from '../config/env'
import { rateLimiter } from "../middlewares/rateLimiter";
import { AuthRouter } from "../routers/authRouters";
import { EnderecosRouter } from "../routers/EnderecoRouter";

const PORTA = env.server.port
export async function startServer(){
    const app = express();
    app.use(express.json())
    app.use(rateLimiter)
    app.use("/auth", AuthRouter);
    app.use("/enderecos", EnderecosRouter)
    try
    {
        await InitializeBanco();
        await createTables();
        await db.getConnection();
        console.log("Banco pronto");
        app.listen(PORTA, ()=>{ console.log("Servidor iniciado com sucesso");})
    }
    catch(e)
    {
        console.log(`erro ao iniciar servidor \n tal erro ${error}`);
    }
}