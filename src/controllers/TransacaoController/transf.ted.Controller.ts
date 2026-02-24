import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { TransfTed } from "../../services/TransacaoServices/transf.Ted";
import { ITransfTed } from "../../types/Itransf.Ted";


export async function ted(req:AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Nao autorizado."
        }
    )
     const { id_conta, numero_conta_destino, valor } = req.body
    if (!id_conta || !numero_conta_destino || !valor) return res.status(400).json({ error: "id_conta, numero_conta_destino e valor são obrigatórios." })

    const dados: ITransfTed = {
        id_conta_origem:      id_conta,
        id_cliente,
        numero_conta_destino,
        valor
    }
    try 
    {
        const resultado = await TransfTed(dados)
        return res.status(200).json(resultado)
    }
    catch(e: any)
    {
        return res.status(400).json({error:e.message})
    }
}