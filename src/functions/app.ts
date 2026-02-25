import express from "express"
import { InitializeBanco } from "../data/init"
import { db } from "../data/connection" 
import { createTables } from "../data/Createtables";
import { error } from "node:console";
import { env } from '../config/env'
import { rateLimiter } from "../middlewares/rate.Limiter";
import { AuthRouter } from "../routers/auth.Routers";
import { EnderecosRouter } from "../routers/Endereco.Router";
import { contaRouter } from "../routers/conta.Routers";
import { transacaoRouter } from "../routers/transacao.Router";
import { pixRouter } from "../routers/pixRouter";
import { perfilRouter } from "../routers/perfil.Router";

const PORTA = env.server.port
export async function startServer()
{
    const app = express();
    app.use(express.json())
    app.use(rateLimiter)
    app.use("/auth", AuthRouter);
    app.use("/enderecos", EnderecosRouter);
    app.use("/contas", contaRouter);
    app.use("/transacoes", transacaoRouter);
    app.use("/pix", pixRouter);
    app.use("/perfil", perfilRouter)
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