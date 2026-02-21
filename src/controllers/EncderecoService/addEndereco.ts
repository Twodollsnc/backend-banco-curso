import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { addEndereco } from "../../services/endereçoService/enderecoServices";
import { error } from "node:console";
export async function adicionarEndereco(req: AuthRequest, res:Response)
{
    const ERROR_MESSAGE = "Não autorizado"
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error: ERROR_MESSAGE
        }
    )
    try
    {
        const result = await addEndereco(id_cliente, req.body)
        return res.status(201).json(
            {
                mensagem: "Endereco Adicionado", 
                result
            }
        )
    }
    catch (e: any) 
    {
        return res.status(400).json(
            {
                 error: e.message 
            }
        )
    }
}