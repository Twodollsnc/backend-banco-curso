import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { IChavePix } from "../../types/IChave.Pix";
import { cadastrarChave } from "../../services/Pix/cadastrar.Chave";
import { error } from "node:console";



export async function cadastrarChavePix(req: AuthRequest, res: Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado."
        }
    )

    const { id_conta, tipo_chave, valor_chave } = req.body
    if(!id_conta || !tipo_chave) return res.status(400).json({
        error:"id_conta e tipo_chave são obrigatorios"
    })
    const dados: IChavePix = { id_conta, tipo_chave, valor_chave}

    try
    {
        const resultado = await cadastrarChave(dados)
        return res.status(201).json({
            mensagem:"Chave Pix cadastrada!",
            resultado
        })
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