import { db } from "../../data/connection";
import { ITransfTed } from "../../types/Itransf.Ted";
export async function TransfTed(dados: ITransfTed) 
{
    if(dados.valor <= 0) throw new Error("Valor deve ser maior que zero.");
    const connection = await db.getConnection()
    try
    {
        await connection.beginTransaction()
        const [rowsOrigem] = await connection.query(
            `SELECT saldo_atual FROM contas WHERE id_conta = ?
            AND id_cliente = ?
            AND status = 'ativa'`,
            [dados.id_conta_origem, dados.id_cliente]
        )
        const origem = (rowsOrigem as any [])[0]

        if(!origem) throw new Error("Conta de origem não encontrada ou inativa.");
        if(origem.saldo_atual < dados.valor) throw new Error("Saldo insuficiente.");

        const [rowsDestino] = await connection.query(
            `SELECT id_conta FROM contas WHERE numero_conta = ?
            AND status = 'ativa'`,
            [dados.numero_conta_destino]
        )
        const destino = (rowsDestino as any[])[0]
        
        if(!destino) throw new Error("Conta de destino não encontrada.");
        await connection.query(
            `UPDATE contas SET saldo_atual = saldo_atual - ? WHERE id_conta = ?`,
            [dados.valor, dados.id_conta_origem]
        )
   
        await connection.query(
            `UPDATE contas SET saldo_atual = saldo_atual + ? WHERE id_conta = ?`,
            [dados.valor, destino.id_conta]
        )

        await connection.query(
            `INSERT INTO transacoes (id_conta_origem, id_conta_destino, tipo_transacao,valor, status, descricao)
            VALUES (?, ?, 'ted', ?, 'concluida', 'Transferencia TED')`,
            [dados.id_conta_origem, destino.id_conta, dados.valor]
        )
        await connection.commit()
        return {
            mensagem: "Transferencia TED realizado com sucesso!",
            valor: dados.valor
        }
    }
    catch (e)
    {

        await connection.rollback()
        throw e
    }
    finally
    {
        connection.release();
    }
}