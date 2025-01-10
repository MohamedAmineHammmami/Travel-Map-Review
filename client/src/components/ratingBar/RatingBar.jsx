import React from "react";
import "./ratingBar.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";
function RatingBar({ rating }) {
  const emptyStar = 5 - Math.round(rating);
  return (
    <div className="ratingBar">
      {[...Array(Math.floor(rating))].map((_, i) => {
        return <StarIcon style={{ color: "gold", fontSize: "220%" }} key={i} />;
      })}
      {rating % 1 !== 0 && (
        <StarHalfIcon style={{ color: "gold", fontSize: "220%" }} />
      )}
      {emptyStar >= 1 &&
        [...Array(emptyStar)].map((_, i) => {
          return (
            <StarOutlineIcon
              style={{ color: "gold", fontSize: "220%" }}
              key={i}
            />
          );
        })}
    </div>
  );
}

export default RatingBar;
