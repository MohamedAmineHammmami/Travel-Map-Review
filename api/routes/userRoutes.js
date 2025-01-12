import { Router } from "express";
import { login, register, logOut } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logOut);

export default authRouter;
