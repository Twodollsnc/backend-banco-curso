import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { listarContas } from "./abrirConta/listarContas";
export async function listarC(req: AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado"
        }
    )
    try{
        const contas = await listarContas(id_cliente)
        return res.status(200).json(contas)
    }
    catch (e:any)
    {
        return res.status(400).json({
            error: e.message
        })
    }
}