import { db } from "../../data/connection";
export async function deletarEndereco(id_endereco: number, id_cliente:number)
{
    const [result] = await db.query<any>(
        `DELETE FROM enderecos WHERE id_endereco = ? AND id_cliente = ?`, [id_endereco, id_cliente]
    )
    if(result.affecredRows === 0) throw new Error("Endereço não encontrado.")
}