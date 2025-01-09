import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoUri = process.env.MONGO_DB_URI;
const dbConnection = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Database is connected!");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnection;
