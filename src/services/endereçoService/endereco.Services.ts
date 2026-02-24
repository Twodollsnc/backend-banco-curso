import { db } from "../../data/connection"
import { IenderecoAdd } from "../../types/IenderecosAdd"
export async function addEndereco(id_cliente:number, dados: IenderecoAdd)
{
     const [result] = await db.query<any>(
        `INSERT INTO enderecos (
            id_cliente,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            tipo_endereco
        )VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            id_cliente,
            dados.cep,
            dados.rua,
            dados.numero,
            dados.complemento ?? null,
            dados.bairro,
            dados.cidade,
            dados.estado,
            dados.tipo_endereco
        ]
     )
    return { id_endereco:result.insertId }
}