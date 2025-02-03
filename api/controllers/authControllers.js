import User from "../modules/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required!" });
  }
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, msg: "User already exist!" });
    }

    await User.create({ username, email, password });
    res
      .status(201)
      .json({ success: true, msg: "User was successfully created!" });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required!" });
  }
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found!" });
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return res
        .status(401)
        .json({ success: false, msg: "Wrong credentials..!" });
    }
    const access_token = Jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    //send token to client by authHeader
    res.set("authorization", `Bearer ${access_token}`);

    res.status(200).json({
      success: true,
      msg: "You're logged in!",
      user: { ...user._doc, password: undefined },
    });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

export const logOut = async (req, res) => {
  try {
    res.send("logout");
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};
