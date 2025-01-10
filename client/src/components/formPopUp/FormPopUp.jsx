import React, { useState } from "react";
import "./formPopUp.css";

function FormPopUp({ place }) {
  const [review, setReview] = useState("");
  return (
    <Popup>
      <div className="popUp">
        <div className="place">
          <label>Place</label>
          <h3>{place}</h3>
        </div>
        <div className="review">
          <label>Review</label>
          <input
            type="text"
            placeholder="enter your review!"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="rating">
          <label>Rating</label>
          <RatingBar rating={3} />
        </div>
        <div className="information">
          <label>Information:</label>
          <span>
            Created by: <h4>{ali}</h4>
          </span>
          <h4 style={{ color: "green" }}>{moment(Date.now()).fromNow()}</h4>
        </div>
      </div>
    </Popup>
  );
}

export default FormPopUp;
