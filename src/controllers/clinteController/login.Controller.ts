import { Request, Response } from "express"
import { loginCliente } from "../../services/ClientServices/login.Services"
export async function login(req: Request, res:Response)
{
    const { email, senha} = req.body
    if(!email || !senha) return res.status(400).json({
        error: "Email e senha são obrigatorios." 
    })
    try
    {
        const result = await loginCliente(email, senha)
        return res.status(200).json(result)
    }
    catch (e:any)
    {
        return res.status(401).json({
            error: e.message
        })
    }
}