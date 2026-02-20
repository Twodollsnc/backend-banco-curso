import { db } from "../connection";

export async function createTableFaturas() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS faturas (
            id_fatura        INT AUTO_INCREMENT PRIMARY KEY,
            id_cartao        INT            NOT NULL,
            mes_referencia   TINYINT        NOT NULL,
            ano_referencia   YEAR           NOT NULL,
            valor_total      DECIMAL(15,2)  NOT NULL DEFAULT 0.00,
            data_vencimento  DATE           NOT NULL,
            status           ENUM('aberta','paga','atrasada') NOT NULL DEFAULT 'aberta',
            FOREIGN KEY (id_cartao) REFERENCES cartoes(id_cartao)
        )
    `);
    console.log("Tabela 'faturas' pronta.");
}