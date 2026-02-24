import { Router } from "express"
import { registro } from "../controllers/clinteController/client.Controller"
import { login } from "../controllers/clinteController/login.Controller";
export const AuthRouter = Router();
AuthRouter.post("/registro", registro)
AuthRouter.post("/login", login)


