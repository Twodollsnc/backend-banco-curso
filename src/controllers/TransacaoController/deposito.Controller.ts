import { AuthRequest } from "../../types/Iauth";
import { Response } from "express";
import { ServicesDepositar } from "../../services/TransacaoServices/depositar.Services";
export async function deposito(req: AuthRequest, res: Response)
{
    const id_cliente = req.cliente?.id_cliente
    if(!id_cliente) return res.status(401).json(
        {
            error:"Não autorizado"
        }
    )
    const { id_conta, valor} = req.body
    if(!id_conta || !valor) return res.status(400).json(
        {
            error:"id da conta e o valor são obrigatorios."
        }
    );
    try
    {
        const resultado = await ServicesDepositar(id_conta, id_cliente, valor)
        return res.status(200).json(resultado)
    }
    catch(e:any)
    {
        return res.status(400).json({
            error:e.message
        })
    }
}