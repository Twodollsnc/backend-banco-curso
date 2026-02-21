import { db } from "../data/connection";
export async function listaEnderecos(id_cliente: number)
{
    const [ rows ] = await db.query(
        `SELECT * FROM enderecos WHERE id_cliente = ?`, [id_cliente]
    ) 
    return rows;   
}