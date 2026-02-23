import { Request, Response} from "express"
import { registrarCliente } from "../../services/endereçoService/clientServices"
import { ICriarCliente } from "../../types/IClienteCreate"
import { error } from "node:console"
export async function registro(req:Request, res:Response)
{
    const dados: ICriarCliente = req.body
    
    const campos = [
        "nome_completo",
        "cpf",
        "data_nascimento",
        "email",
        "telefone",
        "senha"
    ]
    for(const campo of campos)
    {
        if(!dados[campo as keyof ICriarCliente])return res.status(400).json({error: `O campo ${campo} é obrigatorio`})
    }
    try
    {
        const clientes = await registrarCliente(dados)
        return res.status(201).json
        (
            {
                status:"success",
                message: "Cliente cadastrado com sucesso",
                data: { clientes }
            }
        )
    }   
    catch(e: any)
    {
        const status = e.status || 400;
        const message = e.message || "Erro Interno";
        return res.status(status).json({error:message})
    }
}