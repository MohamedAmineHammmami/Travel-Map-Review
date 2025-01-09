import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [3, "username must contain at least 3 characters!"],
      maxlength: [45, "username must conatin at max 45 characters!"],
      require: true,
      unique: true,
    },
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      validate: {
        validator: (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/.test(v),
        message: (props) => `${props.value} is not strong password!`,
      },
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
