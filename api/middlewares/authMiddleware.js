import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token", token);
  if (!token) {
    return res.status(401).json({ success: false, msg: "Unauthorized!" });
  }
  try {
    Jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, msg: "Invalid token!" });
      }

      next();
    });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};
