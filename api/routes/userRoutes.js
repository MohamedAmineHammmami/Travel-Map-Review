import { Router } from "express";
import { login, register } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
