// GOOGLE REVIEW COMPONENT
import { React, useState } from "react";
import Estimate from "./estimate";
import { tada } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Reviews = () => {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const handleEstimateToggleOpen = () => {
    setIsEstimateOpen(true);
  };

  const handleEstimateToggleClose = () => {
    setIsEstimateOpen(false);
  };

  return (
    <section
      className="reviews"
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
    >
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
        <tada>
          <button
            type="submit"
            className="request--btn"
            onClick={handleEstimateToggleOpen}
          >
            Get an Estimate
          </button>
        </tada>
        {isEstimateOpen && <Estimate onClose={handleEstimateToggleClose} />}
      </div>
    </section>
  );
};

export default Reviews;
