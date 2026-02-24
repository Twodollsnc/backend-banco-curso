import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { deletarChave } from "../../services/Pix/deletar.Chave";
import { error } from "node:console";

export async function deletar(req:AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado."
        }
    )
    const { id_conta } = req.query
    if(!id_conta) return res.status(400).json(
        {
            error:"id_conta é obreigatorio."
        }
    )
    try
    {
        const resultado = await deletarChave(Number(req.params.id), Number(id_conta))
        return res.status(200).json(resultado)
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