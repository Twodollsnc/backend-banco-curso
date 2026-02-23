import { db } from "../../../data/connection";

export async function gerarNumeroConta(): Promise<string>
{
    let numero_conta:string
    let existe = true
    do{
        const numero = Math.floor(Math.random() * 9000000000) + 1000000000 
        numero_conta = numero.toString()
        const [rows] = await db.query(
            `SELECT id_conta FROM contas WHERE numero_conta = ?`, [numero_conta]
        )
        existe = (rows as any[]).length > 0
    }while(existe)
    
    return numero_conta
}