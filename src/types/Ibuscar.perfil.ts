import { RowDataPacket } from "mysql2";

export interface IPerfilRow extends RowDataPacket
{
    id_clientee:        number
    nome_cliente:       string
    cps:                string
    email:              string
    telefone:           string
    data_nascimento:    Date
    status_conta:       string
    data_cadastro:      Date
}