import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { abrirConta } from "./abrirConta/abrirConta";
import { error } from "node:console";

export async function abrir(req: AuthRequest, res: Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json({
        error:"Não autorizado."
    })   
    const {tipo_conta} = req.body
    if(!tipo_conta) return res.status(400).json(
        {
            error:"Tipo de conta é obrigatorio."
        }
    )
    if(!["corrente", "poupanca"].includes(tipo_conta)) return res.status(400).json(
        {
            error:"Tipo invalido.\n Use: corrente ou poupanca"
        }
    )
    try
    {
        const conta = await abrirConta(id_cliente, tipo_conta)
        return res.status(201).json(
            {
                mensagem:"Conta aberta com sucesso!", conta
            }
        )
    }
    catch(e: any)
    {
        return res.status(400).json(
            {
                error: e.message
            }
        )
    }

}
