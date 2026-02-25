import { RowDataPacket } from "mysql2"
import { db } from "../../data/connection"
import { ITransfPix } from "../../types/ITransf.Pix"
import { log } from "node:console"


interface IContaRow extends RowDataPacket { saldo_atual: number }
interface IChaveRow  extends RowDataPacket { id_conta: number }


export async function transfPix(dados: ITransfPix) {
    if (dados.valor <= 0) throw new Error("O valor deve ser maior que zero.")


    const connection = await db.getConnection()


    try {
        await connection.beginTransaction()


    const [rowsOrigem] = await connection.query<IContaRow[]>(
      `SELECT saldo_atual FROM contas
       WHERE id_conta = ? AND id_cliente = ? AND status = 'ativa'
       FOR UPDATE`,
      [dados.id_conta_origem, dados.id_cliente]
    )
    const origem = rowsOrigem[0]
    log("ORIGEM", origem);
    if (!origem) throw new Error("Conta de origem não encontrada ou inativa.")
    if (origem.saldo_atual < dados.valor) throw new Error("Saldo insuficiente.")


    const [rowsChave] = await connection.query<IChaveRow[]>(
      `SELECT id_conta FROM chaves_pix WHERE valor_chave = ? AND status = 'ativa'`,
      [dados.chave_pix]
    )
    const chave = rowsChave[0]
    log("CHAVE ENCONTRADA: ", chave)
    if (!chave) throw new Error("Chave Pix não encontrada.")
    if (chave.id_conta === dados.id_conta_origem)
      throw new Error("Não é possível transferir para a mesma conta.");
    log("DEBITANDO DA CONTA:", dados.id_conta_origem)
    log("CREDITANDO NA CONTA:", chave.id_conta)
    log("VALOR:", dados.valor)

    await connection.query(
      `UPDATE contas SET saldo_atual = saldo_atual - ? WHERE id_conta = ?`,
      [dados.valor, dados.id_conta_origem]
    )
    await connection.query(
      `UPDATE contas SET saldo_atual = saldo_atual + ? WHERE id_conta = ?`,
      [dados.valor, chave.id_conta]
    )
    log(`o pix foi concluido, sendo adicionado no ${chave.id_conta}, o valor total de: ${dados.valor}`);
    await connection.query(
      `INSERT INTO transacoes (
            id_conta_origem,
            id_conta_destino,
            tipo_transacao,
            valor, 
            status, 
            descricao
        )VALUES (?, ?, 'pix', ?, 'concluida', 'Transferência Pix')`,
      [dados.id_conta_origem, chave.id_conta, dados.valor]
    )


    await connection.commit()
    return { 
        mensagem: "Pix realizado com sucesso!", 
        valor: dados.valor 
    }
  } 
  catch (e) 
  {
    log("ERROR", e)
    await connection.rollback()
    throw e
  }
  finally 
  {
    connection.release()
  }
}