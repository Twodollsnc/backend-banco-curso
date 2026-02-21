import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { listaEnderecos } from "../../services/listaEnderecos";

export async function listar(req: AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado."
        }
    )
    try
    {
        const enderecos = await listaEnderecos(id_cliente)
        return res.status(200).json(enderecos)
    }
    catch(e:any)
    {
        return res.status(400).json(
            {
                error: e.message
            }
        )
    }
}