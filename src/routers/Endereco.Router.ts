import { Router } from "express";
import { auth } from "../middlewares/auth";
import { adicionarEndereco } from "../controllers/EnderecoService/add.Endereco";
import { listar } from "../controllers/EnderecoService/enderecos.Listas";
import { deletar } from "../controllers/EnderecoService/deletar.Endereco";

export const EnderecosRouter = Router()

EnderecosRouter.post("/",    auth, adicionarEndereco)
EnderecosRouter.get("/",     auth, listar)
EnderecosRouter.delete("/",  auth, deletar)