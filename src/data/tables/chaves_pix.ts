import { db } from "../connection";

export async function createTableChavesPix() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS chaves_pix (
            id_chave     INT AUTO_INCREMENT PRIMARY KEY,
            id_conta     INT          NOT NULL,
            tipo_chave   ENUM('cpf','email','telefone','aleatoria') NOT NULL,
            valor_chave  VARCHAR(255) NOT NULL UNIQUE,
            status       ENUM('ativa','inativa') NOT NULL DEFAULT 'ativa',
            data_criacao DATETIME     NOT NULL DEFAULT NOW(),
            FOREIGN KEY (id_conta) REFERENCES contas(id_conta)
        )
    `);
    console.log("Tabela 'chaves_pix' pronta.");
}