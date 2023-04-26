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
        <p className="whyUs--header__subtitle">Our services is lightening quick from the moment your package is picked up. Satisfaction guaranteed!</p>
      </div>
      <div className="whyUs--content">
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--avatar">
            <Avatar
            image={Delivery}
            alt="Pick up and Delivery"
            style={{ width: "80%", height: "80%", borderRadius: "50%"}}
            />
          </div>
          <div className="whyUs--content__item--title">
            <h3>Fast Pickup and Delivery</h3>
          </div>
          <div className="whyUs--content__item--subtitle">
            <p>Your Laundry gets picked up and delivered back to your doorstep</p>
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
  );
};

export default WhyUs;