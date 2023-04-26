import React from "react";
import Avatar from "./avatar";
import Delivery from "../assets/gif/delivery-boy.gif";
import Affordable from "../assets/images/gift.png";
import Medal from "../assets/gif/first-place-badge.gif";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="whyUs--header">
        <h1 className="whyUs--header__title">Why Choose Us?</h1>
        <p className="whyUs--header__subtitle">
          Our services is lightening quick from the moment your package is
          picked up. Satisfaction guaranteed!
        </p>
      </div>
      <div className="whyUs--content">
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--avatar">
            <Avatar
              image={Delivery}
              alt="Pick up and Delivery"
              style={{ width: "80%", height: "80%", borderRadius: "50%" }}
            />
          </div>
          <div className="whyUs--content__item--title">
            <h3>Fast Pickup and Delivery</h3>
          </div>
          <div className="whyUs--content__item--subtitle">
            <p>
              Your Laundry gets picked up and delivered back to your doorstep
            </p>
          </div>
        </div>
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--avatar">
            <Avatar
              image={Affordable}
              alt="Affordable"
              style={{ width: "80%", height: "80%", borderRadius: "50%" }}
            />
          </div>
          <div className="whyUs--content__item--title">
            <h3>Affordable</h3>
          </div>
          <div className="whyUs--content__item--subtitle">
            <p>Our services are affordable and No additional cost added</p>
          </div>
        </div>
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--avatar">
            <Avatar
              image={Medal}
              alt="First Place"
              style={{ width: "80%", height: "80%", borderRadius: "50%" }}
            />
          </div>
          <div className="whyUs--content__item--title">
            <h3>Quality Guaranteed</h3>
          </div>
          <div className="whyUs--content__item--subtitle">
            <p>We ensure the best quality service in time</p>
          </div>
        </div>
      </div>
    </section>
    <section className="work">
      <div className="work--header">
        <h1 className="work--header__title">How Machala Laundry Works</h1>
        <p className="work--header__subtitle">
          Book a time for collection of your laundry & dry cleaning, we deliver it back to you at the scheduloed time slot.
        </p>
      </div>
      <div className="work--content">
      <div class="progress-bar">
  <span class="stop" style="left: 33.33%;">
    1
  </span>
  <span class="stop" style="left: 66.66%;">
    2
  </span>
  <span class="stop" style="right: 0%;">
    3
  </span>
</div>

    </section>
  );
};

export default WhyUs;
