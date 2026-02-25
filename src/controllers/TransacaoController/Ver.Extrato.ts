import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { extratoService } from "../../services/TransacaoServices/Extrato";

export async function verExtrato(req:AuthRequest, res: Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json({
        error:"Não autorizado"
    })
    const id_conta = req.cliente?.id_conta
    if(!id_conta) return res.status(400).json({
        error:"id_conta é obrigatorio"
    })
    try
    {
        const transacoes = await extratoService(id_conta, id_cliente)
        return res.status(200).json(transacoes)
    }
    catch(e:any)
    {
        return res.status(400).json(
            {
                error:e.message
            }
        )
    }
}