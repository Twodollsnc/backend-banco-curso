import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { ITransfPix } from "../../types/ITransf.Pix";
import { transfPix } from "../../services/TransacaoServices/transf.pix";
import { error } from "node:console";
export async function pix(req: AuthRequest, res:Response) 
{
    const id_cliente = req.cliente?.id_cliente    
    if(!id_cliente) return res.status(401).json({
        error:"Não autorizado."
    })
    const {id_conta, chave_pix, valor} = req.body
    if(!id_conta || !chave_pix || !valor) return res.status(400).json(
        {
            error:"Id_conta, chave_pix e valor são obrigatorios."
        }
    )
    const dados:ITransfPix = {
        id_conta_origem: id_conta,
        id_cliente,
        chave_pix,
        valor
    }
    try
    {
        const retultado = await transfPix(dados);
        return res.status(200).json(retultado)
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
