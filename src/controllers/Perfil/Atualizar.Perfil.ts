import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { atualizarPerfil } from "../../services/perfil/Atualizar.Perfil";
import { error } from "node:console";

export async function putPerfil(req:AuthRequest, res:Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado"
        }
    )
    const { nome_completo, email, telefone} = req.body
    try
    {
        const result = await atualizarPerfil(id_cliente, {nome_completo, email, telefone})
        return res.status(200).json(result)
    }
    catch(e:any)
    {
        return res.status(400).json(
            {
                error:e.mensagem
            }
        )
    }
}