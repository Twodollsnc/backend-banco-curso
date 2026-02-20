import { db } from "../connection";

export async function createTableEnderecos() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS enderecos (
            id_endereco    INT AUTO_INCREMENT PRIMARY KEY,
            id_cliente     INT          NOT NULL,
            cep            VARCHAR(9)   NOT NULL,
            rua            VARCHAR(100) NOT NULL,
            numero         VARCHAR(10)  NOT NULL,
            complemento    VARCHAR(50),
            bairro         VARCHAR(50)  NOT NULL,
            cidade         VARCHAR(50)  NOT NULL,
            estado         CHAR(2)      NOT NULL,
            tipo_endereco  ENUM('residencial','comercial') NOT NULL DEFAULT 'residencial',
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
        )
    `);
    console.log("Tabela 'enderecos' pronta.");
}