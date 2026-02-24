import { db } from "../../../data/connection";
export async function listarContas(id_cliente: number) {
    const [rows] = await db.query(
        `SELECT id_conta, numero_conta, tipo_conta, saldo_atual, data_abertura, status
        FROM contas WHERE id_cliente = ?`,
        [id_cliente]
    )
    return rows
}