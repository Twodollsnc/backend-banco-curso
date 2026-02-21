export interface IenderecoAdd
{
    cep:                string
    rua:                string
    numero:             string
    complemento?:       string
    bairro:             string
    cidade:             string
    estado:             string
    tipo_endereco:      "recidencial" | "comercial"
}