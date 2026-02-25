import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../../../data/connection";
import { gerarNumeroConta } from "./gerar.Numero.Conta";

export async function abrirConta(id_cliente: number, tipo_conta: "corrente" | "poupanca") {
    const [contas] = await db.query<RowDataPacket[]>(
        `SELECT id_conta FROM contas WHERE id_cliente = ? AND status = 'ativa'`,
        [id_cliente]
    )
    if (contas.length >= 2) throw new Error("Limite de 2 contas por cliente atingido.");

    const numero_conta = await gerarNumeroConta()

    const [result] = await db.query<ResultSetHeader>(
        `INSERT INTO contas (id_cliente, numero_conta, tipo_conta) VALUES (?, ?, ?)`,
        [id_cliente, numero_conta, tipo_conta]
    )
    return { id_conta: result.insertId, numero_conta, tipo_conta }
}