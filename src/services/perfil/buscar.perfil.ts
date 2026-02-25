import { db } from "../../data/connection";
import { IPerfilRow } from "../../types/Ibuscar.perfil";

export async function buscarPerfil(id_cliente:number)
{
    const [rows] = await db.query<IPerfilRow[]>(
        `SELECT id_cliente, nome_completo, cpf, email, telefone,
        data_nascimento, status_conta, data_cadastro
        FROM clientes WHERE id_cliente = ?`,[id_cliente]
    )
    const cliente = rows[0]
    if(!cliente) throw new Error("Cliente não encontrado.");
    return cliente;
}