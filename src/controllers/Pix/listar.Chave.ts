import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { listarChaves } from "../../services/Pix/listar.Chaves";
import { CharsetToEncoding } from "mysql2";
export async function listar(req:AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado."
        }
    )
    
    const {id_conta} = req.query
    if(!id_conta) return res.status(400).json(
        {
            error:"id_conta é obrigatorio"
        }
    )
    try
    {
        const chaves = await listarChaves(Number(id_conta))
        return res.status(200).json(chaves)
    }
    catch (e: any)
    {
        return res.status(400).json(
            {
                error:e.message
            }
        )
    }
}