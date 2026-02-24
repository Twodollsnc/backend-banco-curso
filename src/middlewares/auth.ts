import { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { env } from "../config/env"
import { AuthRequest } from "../types/Iauth"
export function auth(req: AuthRequest, res: Response, next: NextFunction)
{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({error: "Token nao fornecido"});


    const token = authHeader.split(" ")[1]

    if(!token) return res.status(401).json({ error: "Token mal formatatdo"});

    try
    {
        /*log("SECRET:  ", env.jwt.secret)
        log("TOKEN: ", token);
        */
        const decoded = jwt.verify(token, env.jwt.secret)
        req.cliente = decoded
        next()
    }
    catch
    {
        //log("ERRO JWT", e)
        return res.status(401).json({ error:"Token invalido ou expirado."})
    }
}