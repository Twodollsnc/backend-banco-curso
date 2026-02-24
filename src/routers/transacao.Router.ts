import { Router } from "express";
import { auth } from "../middlewares/auth";
import { deposito } from "../controllers/TransacaoController/deposito.Controller";
import { ted } from "../controllers/TransacaoController/transf.ted.Controller";
export const transacaoRouter = Router();
transacaoRouter.post("/deposito", auth, deposito)
transacaoRouter.post("/ted", auth, ted)