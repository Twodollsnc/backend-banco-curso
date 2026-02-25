import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { buscarPerfil } from "../../services/perfil/buscar.perfil";

export async function getPerfil(req: AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado."
        }
    )
    try
    {
        const perfil = await buscarPerfil(id_cliente)
        return res.status(200).json(perfil)
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