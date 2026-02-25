import { Router } from "express";
import { auth } from "../middlewares/auth";
import { getPerfil } from "../controllers/Perfil/Buscar.Perfil";
import { putPerfil } from "../controllers/Perfil/Atualizar.Perfil";
export const perfilRouter = Router()

perfilRouter.get("/",       auth, getPerfil);
perfilRouter.put("/",       auth, putPerfil)