import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { deletarEndereco } from "../../services/endereçoService/deletar.Enderecos";

export async function deletar(req:AuthRequest, res: Response)
{
    const id_clientes = req.cliente?.id_cliente
    if(!id_clientes) return res.status(401).json(
        {
            error:"Não autorizado"
        }
    )
    try
    {
        await deletarEndereco(Number(req.params.id), id_clientes)
        return res.status(200).json(
            {
                menssagem: "Endereço removido!"
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