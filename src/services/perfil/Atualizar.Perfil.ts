import { IAtualizarPerfi } from "../../types/IAtualizar.Perfil";
import { db } from "../../data/connection";

export async function atualizarPerfil(id_cliente: number, dados:IAtualizarPerfi)
{
    if(!dados.nome_completo && !dados.email && !dados.telefone)throw new Error("Informe ao menos um campo para atualizar.");

    if(dados.email){
        const [rows] = await db.query<any[]>(
            `SELECT id_cliente FROM clentes WHERE email = ? AND id_cliente != ?`,
            [dados.email, id_cliente]
        )
        if(rows.length > 0) throw new Error("Email já está em uso")
    }
    await db.query(
        `UPDATE clientes SET
        nome_completo   = COALESCE(?, nome_completo),
        email           = COALESCE(?, email),
        telefone        = COALESCE(?, telefone)
        WHERE id_cliente = ?`,
        [dados.nome_completo ?? null, dados.email ?? null, dados.telefone ?? null, id_cliente]
    )
    return {
        mensagem:"Perfil atualizado com sucesso!"
    }
}