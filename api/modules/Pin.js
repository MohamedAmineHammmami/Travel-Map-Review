import mongoose from "mongoose";

const pinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [3, "username at least 3 characters!"],
      maxlength: [45, "username at least 45 characters!"],
      require: true,
    },
    place: {
      type: String,
      minlength: [3, "place should at least 3 characters!"],
      maxlength: [255, "place should at max 255 characters!"],
      require: true,
      unique: true,
    },
    review: {
      type: String,
      minlength: [3, "review should at least 3 characters!"],
      maxlength: [100, "review at max 55 characters!"],
      require: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      require: true,
    },
    long: {
      type: Number,
      require: true,
      unique: true,
    },
    lat: {
      type: Number,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Pin = mongoose.model("Pin", pinSchema);

export default Pin;
