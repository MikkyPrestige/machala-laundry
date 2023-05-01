// GOOGLE REVIEW COMPONENT

import React from "react";

const Reviews = () => {
  return (
    <div className="review">
        <h1 className="review--title">Clients Review</h1>
        <div className="review--container">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/138606"
            title="Google Reviews"
            width="100%"
            height="100%"
            className="review--frame"
          ></iframe>
        </div>
      </div>
  );
};

export default Reviews;
