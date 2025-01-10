import React from "react";
import { Popup } from "react-leaflet";
import RatingBar from "../ratingBar/RatingBar.jsx";
import moment from "moment";
import "./popUp.css";

function PopUp({ infos }) {
  return (
    <Popup>
      <div className="popUp">
        <div className="place">
          <label>Place</label>
          <h3>{infos.place}</h3>
        </div>
        <div className="review">
          <label>Review</label>
          <h3>{infos.review}</h3>
        </div>
        <div className="rating">
          <label>Rating</label>
          <RatingBar rating={infos.rating} />
        </div>
        <div className="information">
          <label>Information:</label>
          <span>
            Created by: <h4>{infos.username}</h4>
          </span>
          <h4 style={{ color: "green" }}>
            {moment(infos.createdAt).fromNow()}
          </h4>
        </div>
      </div>
    </Popup>
  );
}

export default PopUp;
