import brcypt from "bcrypt"
import jwt from "jsonwebtoken"
import { db } from "../data/connection"
import { env } from "../config/env"

export async function loginCliente(email: string, senha:string) 
{
    const INVALID_MESSAGE = "Email ou senha inválidos." 
    const [rows] = await db.query(
        `SELECT id_cliente, nome_completo, email, senha_hash, status_conta
        FROM clientes WHERE email = ?`, [email]
    )
    const cliente = (rows as any[])[0]
    if(!cliente) throw new Error(INVALID_MESSAGE)
    if(cliente.status_conta !== "ativa") throw new Error("Conta bloqueada ou invalida")

    const senhaValida = await brcypt.compare(senha, cliente.senha_hash)
    if(!senhaValida) throw new Error(INVALID_MESSAGE)
    const token = jwt.sign(
        { 
            id_cliente: cliente.id_cliente, 
            email: cliente.email
        },
        env.jwt.secret,
        { 
            expiresIn: env.jwt.expiresIn as any
        }
    )
    return { 
        token, nome: cliente.nome_completo
    }
}