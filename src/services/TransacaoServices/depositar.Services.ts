import { db } from "../../data/connection"
export async function ServicesDepositar(id_conta: number, id_cliente: number, valor: number) {
    if (valor <= 0) throw new Error("Valor deve ser maior que zero.")

    const connection = await db.getConnection()

    try {
        await connection.beginTransaction()

        const [rows] = await connection.query(
            `SELECT id_conta FROM contas 
             WHERE id_conta = ? AND id_cliente = ? AND status = 'ativa'`,
            [id_conta, id_cliente]
        )
        if ((rows as any[]).length === 0)
            throw new Error("Conta não encontrada ou inativa.")

        await connection.query(
            `UPDATE contas SET saldo_atual = saldo_atual + ? WHERE id_conta = ?`,
            [valor, id_conta]
        )

        await connection.query(
            `INSERT INTO transacoes (id_conta_origem, tipo_transacao, valor, status, descricao)
             VALUES (?, 'deposito', ?, 'concluida', 'Depósito em conta')`,
            [id_conta, valor]
        )

        await connection.commit()
        return { mensagem: "Depósito realizado com sucesso!", valor }
    } catch (e) {
        await connection.rollback()
        throw e
    } finally {
        connection.release()
    }
}