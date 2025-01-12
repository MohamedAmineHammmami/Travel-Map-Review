import React, { useEffect, useState } from "react";
import "./dynamicRatingBar.css";
import StarIcon from "@mui/icons-material/Star";

function DynamicRatingBar({ setStarNum }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setStarNum((prev) => {
      return { ...prev, rating };
    });
  }, [rating]);
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <StarIcon
            onClick={() => setRating(i + 1)}
            onMouseMove={() => setHover(i + 1)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "220%",
              color: i < (hover || rating) ? "gold" : "gray",
            }}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default DynamicRatingBar;
