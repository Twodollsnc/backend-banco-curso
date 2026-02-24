import { db } from "../../../data/connection";
export async function consultarSaldo(id_conta: number, id_cliente:number)
{
    const [rows] = await db.query(
        `SELECT saldo_atual FROM contas WHERE id_conta = ? and id_cliente = ?`,
        [id_conta, id_cliente]
    )
    const conta = (rows as any[])[0]
    if(!conta) throw new Error("Conta não encontrada.");

    return {saldo: conta.saldo_atual}
}