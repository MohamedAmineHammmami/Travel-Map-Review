import { Router } from "express";
import { createPin, getPins } from "../controllers/pinControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const pinRouter = Router();

pinRouter.post("/add", authMiddleware, createPin);
pinRouter.get("/all", getPins);

export default pinRouter;
