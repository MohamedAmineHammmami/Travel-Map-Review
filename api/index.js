import express from "express";
import dotenv from "dotenv";
import db from "./database/dbConnection.js";
import pinRouter from "./routes/pinRoutes.js";
import authRouter from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    exposedHeaders: "authorization",
  })
);

app.use("/api/pin", pinRouter);
app.use("/api/auth", authRouter);

app.use((req, res, next) => {
  const error = new Error(`Path not found ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ success: false, error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});

db();
