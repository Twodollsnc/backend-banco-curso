import { db } from "../../data/connection";
import { IExtratoRow } from "../../types/IExtrato";

export async function extratoService(id_conta: number, id_cliente: number)
{
        const [rows] = await db.query<IExtratoRow[]>(
        `SELECT t.id_transacao, t.tipo_transacao, t.valor, t.status, 
                t.descricao, t.data_transacao, t.id_conta_origem, t.id_conta_destino
         FROM transacoes t
         INNER JOIN contas c ON (t.id_conta_origem = c.id_conta OR t.id_conta_destino = c.id_conta)
         WHERE c.id_conta = ? AND c.id_cliente = ?
         ORDER BY t.data_transacao DESC`,
        [id_conta, id_cliente]
    )
    return rows;
}