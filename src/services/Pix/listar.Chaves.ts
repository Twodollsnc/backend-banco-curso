import { db } from "../../data/connection";
export async function listarChaves(id_conta: number)
{
    const [rows] = await db.query(
        `SELECT id_chave, tipo_chave, valor_chave, status, data_criacao
         FROM chaves_pix WHERE id_conta = ? AND status = 'ativa'`,
         [id_conta]
    )    
    return rows
}