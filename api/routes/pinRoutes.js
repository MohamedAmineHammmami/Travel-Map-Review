import { Router } from "express";
import { createPin, getPins } from "../controllers/pinControllers.js";

const pinRouter = Router();

pinRouter.post("/add", createPin);
pinRouter.get("/all", getPins);

export default pinRouter;
