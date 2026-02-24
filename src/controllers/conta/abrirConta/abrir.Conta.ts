import { ResultSetHeader } from "mysql2";
import { db } from "../../../data/connection";
import { gerarNumeroConta } from "./gerar.Numero.Conta";
export async function abrirConta(id_cliente:number, tipo_conta: "corrente"|"poupanca") 
{
    const numero_conta = await gerarNumeroConta()
    const [result] = await db.query<ResultSetHeader>(
        `INSERT INTO contas (id_cliente, numero_conta, tipo_conta) VALUES (?, ?, ?)`,
        [id_cliente, numero_conta, tipo_conta]
    )    
    return {id_conta: result.insertId, numero_conta, tipo_conta}
}