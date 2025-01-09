import Pin from "../modules/Pin.js";

export const createPin = async (req, res) => {
  const { username, place, review, rating, lat, long } = req.body;
  if (!username || !place || !review || !rating || !lat || !long) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required!" });
  }
  try {
    const newPin = new Pin(req.body);
    await newPin.save();
    res.status(201).json({ success: true, msg: "new Pin created!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getPins = async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json({ success: true, pins });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
