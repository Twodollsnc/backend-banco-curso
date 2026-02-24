import { Response } from "express";
import { AuthRequest } from "../../types/Iauth";
import { consultarSaldo } from "./abrirConta/consultar.Saldo";
export async function  saldo(req: AuthRequest, res:Response) 
{
    const id_cliente = req.cliente.id_cliente;    
    if(!id_cliente) return res.status(401).json(
        {
            error: "Não autorizado."
        }
    )
    try{
        const resultado = await consultarSaldo(Number(req.params.id), id_cliente)
        return res.status(200).json(resultado);
    }
    catch(e:any){
        return res.status(400).json(
            {
                error: e.message
            }
        )
    }
}