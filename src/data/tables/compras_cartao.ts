import { db } from "../connection";

export async function createTableComprasCartao() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS compras_cartao (
            id_compra    INT AUTO_INCREMENT PRIMARY KEY,
            id_cartao    INT            NOT NULL,
            id_fatura    INT            NOT NULL,
            descricao    VARCHAR(255)   NOT NULL,
            valor        DECIMAL(15,2)  NOT NULL,
            data_compra  DATETIME       NOT NULL DEFAULT NOW(),
            FOREIGN KEY (id_cartao) REFERENCES cartoes(id_cartao),
            FOREIGN KEY (id_fatura) REFERENCES faturas(id_fatura)
        )
    `);
    console.log("Tabela 'compras_cartao' pronta.");
}