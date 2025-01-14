import React, { useState } from "react";
import "./formPopUp.css";
import { Popup } from "react-leaflet";
import DynamicRatingBar from "../ratingBar/dynamicRating/DynamicRatingBar.jsx";
import axios from "axios";

const newLocationReview = {
  username: "",
  place: "",
  review: "",
  rating: "",
  long: 0,
  lat: 0,
};
function FormPopUp({ place, lat, long, username }) {
  const [newLocation, setNewLocation] = useState({ ...newLocationReview });
  console.log(newLocation);

  const handleOnchange = (e) => {
    setNewLocation({
      ...newLocation,
      place,
      lat,
      long,
      username,
      [e.target.name]: e.target.value,
    });
  };

  const addNewPin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/pin/add",
        newLocation,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(res.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Popup>
      <div className="popUp">
        <div className="place">
          <label>Address</label>
          <h3>{place}</h3>
        </div>
        <div className="review">
          <label>Review</label>
          <textarea
            type="text"
            placeholder="enter your review!"
            onChange={(e) => handleOnchange(e)}
            name="review"
          />
        </div>
        <div className="rating">
          <label>Rating</label>
          <DynamicRatingBar setStarNum={setNewLocation} />
        </div>
        <button onClick={addNewPin} className="submitBtn">
          submit
        </button>
      </div>
    </Popup>
  );
}

export default FormPopUp;
