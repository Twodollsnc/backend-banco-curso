import { error } from "node:console";
import { db } from "../../data/connection";
export async function deletarChave(id_chave: number, id_conta:number)
{
    const [rows] = await db.query(
        `SELECT id_chave FROM chaves_pix
        WHERE id_chave = ? AND id_conta = ? AND status = 'ativa'`,
        [id_chave, id_conta]
    )
    if((rows as any[]).length === 0) throw new Error("Chave pix não encontrada.");

    await db.query(
        `UPDATE chaves_pix SET status = 'inativa' WHERE id_chave = ?`,
        [id_chave]
    )
    return{
        mensagem:"Chave Pix removida com sucesso!"
    }
}