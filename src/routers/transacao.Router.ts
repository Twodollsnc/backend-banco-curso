import { Router } from "express";
import { auth } from "../middlewares/auth";
import { deposito } from "../controllers/TransacaoController/deposito.Controller";
import { ted } from "../controllers/TransacaoController/transf.ted.Controller";
import { pix } from "../controllers/TransacaoController/transf.Pix";
import { verExtrato } from "../controllers/TransacaoController/Ver.Extrato";
export const transacaoRouter = Router();
transacaoRouter.post("/deposito", auth, deposito)
transacaoRouter.post("/ted", auth, ted)
transacaoRouter.post("/pix", auth, pix)
transacaoRouter.get("/extrato/:id_conta", auth, verExtrato)