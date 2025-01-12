import React, { useState } from "react";
import "./formPopUp.css";
import { Popup } from "react-leaflet";
import DynamicRatingBar from "../ratingBar/dynamicRating/DynamicRatingBar.jsx";

const newLocationReview = {
  username: "",
  place: "",
  review: "",
  rating: "",
  long: 0,
  lat: 0,
};
function FormPopUp({ place, lat, long }) {
  const [newLocation, setNewLocation] = useState({ ...newLocationReview });
  console.log("newLocation", newLocation);
  const handleOnchange = (e) => {
    setNewLocation({
      ...newLocation,
      place,
      lat,
      long,
      [e.target.name]: e.target.value,
    });
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
      </div>
    </Popup>
  );
}

export default FormPopUp;
