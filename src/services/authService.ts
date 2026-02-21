import brcypt from "bcrypt"
import { db } from "../data/connection"
import { ICriarCliente } from "../types/IClienteCreate"
import { ResultSetHeader } from "mysql2"

export async function registrarCliente (dados: ICriarCliente)
{
    const [cpfExiste] = await db.query(
        `SELECT id_clientes FROM clientes WHERE cpf = ?`, [dados.cpf]
    )
    if((cpfExiste as any[]).length > 0) throw new Error("CPF já cadatrado")

    const [emaiExiste] = await db.query( `SELECT id_cliente FROM clientes WHERE email = ?`, [dados.email])
    if((emaiExiste as any[]).length > 0)throw new Error("Email já cadastrado");

    const senha_hash = await brcypt.hash(dados.senha, 10)

    const [result] = await db.query<ResultSetHeader>(
        `INSERT INTO clientes (
            nome_completo,
            cpf,
            data_nascimento,
            email,
            telefone,
            senha_hash
        ) VALUES (?, ?, ?, ?, ?, ?)`,
         [
            dados.nome_completo,
            dados.cpf,
            dados.data_nascimento,
            dados.email,
            dados.telefone,
            senha_hash,
         ]
    )
    return { id_cliente: result.insertId, email: dados.email }
}