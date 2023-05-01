// GOOGLE REVIEW COMPONENT

import React from "react";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="review">
        <h1 className="review--title">Clients Review</h1>
        <div className="review--container">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/138606"
            title="Google Reviews"
            className="review--container__frame"
          ></iframe>
        </div>
      </div>
      <div className="request">
        <h2 className="request--title">Request for a service</h2>
        <p className="request--text">
          The freedom of choosing your preferred laundry service provider from
          our any of different branches
        </p>
        <button type="submit" className="request--btn">Get an Estimate</button>
      </div>
    </section>
  );
};

export default Reviews;
