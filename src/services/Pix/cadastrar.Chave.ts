import { db } from "../../data/connection";
import { randomBytes } from "crypto";
import { IChavePix } from "../../types/IChave.Pix";
export async function cadastrarChave(dados: IChavePix) 
{
    const [chaves] = await db.query(
        `SELECT id_chave from chaves_pix WHERE id_conta = ? AND status = 'ativa'`,
        [dados.id_conta]
    ) 
    if((chaves as any[]).length >= 5) throw new Error("Limite de 5 chaves pix por conta atingido");
    let cChave = dados.valor_chave
    if(dados.tipo_chave === "aleatoria") cChave = randomBytes(16).toString("hex");

    if(!cChave) throw new Error("Valor da chave é obrigatorio.");

    const [existe] = await db.query(
        `SELECT id_chave FROM chaves_pix WHERE valor_chave = ?`, [cChave]
    )
    if((existe as any[]).length > 0) throw new Error("Essa chave já esta cadastrada");

    const [result] = await db.query<any>(
        `INSERT INTO chaves_pix (
            id_conta, 
            tipo_chave, 
            valor_chave
        )VALUES( ?, ?, ?)`,
        [dados.id_conta, dados.tipo_chave, cChave]
    ) 
    return{
        id_chave: result.insertID,
        tipo_chave:dados.tipo_chave,
        valor_chave: cChave
    }
}