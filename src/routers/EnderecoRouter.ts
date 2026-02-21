import { Router } from "express";
import { auth } from "../middlewares/auth";
import { adicionarEndereco } from "../controllers/EncderecoService/addEndereco";
import { listar } from "../controllers/EncderecoService/enderecos.Listas";
import { deletar } from "../controllers/EncderecoService/deletarEndereco";

export const EnderecosRouter = Router()

EnderecosRouter.post("/",    auth, adicionarEndereco)
EnderecosRouter.get("/",     auth, listar)
EnderecosRouter.delete("/",  auth, deletar)