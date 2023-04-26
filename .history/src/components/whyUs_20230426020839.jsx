import React from "react";
import {GrDeliver} from "react-icons/gr";
import {RiShoppingBasketFill} from "react-icons/ri";
import {TfiMedall} from "react-icons/tfi";


const WhyUs = () => {{
  return (
    <section className="whyUs">
      <div className="whyUs--header">
        <h1 className="whyUs--header__title">Why Choose Us?</h1>
        <p className="whyUs--header__subtitle">Our services is lightening quick from the moment your package is picked up. Satisfaction guaranteed!</p>
      </div>
      <div className="whyUs--content">
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--icon">
            <GrDeliver />
          </div>
          <div className="whyUs--content__item--title">
            <h3>Fast Pickup and Delivery</h3>
          </div>
}