import React from "react";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="whyUs--header">
        <h1 className="whyUs--header__title">Why Us?</h1>
      </div>
      <div className="whyUs--content">
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--img"></div>
          <div className="whyUs--content__item--text">
            <h3 className="whyUs--content__item--text__title">
              We are Reliable
            </h3>
            <p className="whyUs--content__item--text__desc">
              We are always available to attend to your laundry needs. We are
              always on time and we deliver on time.
            </p>
          </div>
        </div>
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--img"></div>
          <div className="whyUs--content__item--text">
            <h3 className="whyUs--content__item--text__title">
              We are Professional
            </h3>
            <p className="whyUs--content__item--text__desc">
              We are always on time and we deliver on time. We are always
              available to attend to your laundry needs.
            </p>
          </div>
        </div>
        <div className="whyUs--content__item">
          <div className="whyUs--content__item--img"></div>
          <div className="whyUs--content__item--text">
            <h3 className="whyUs--content__item--text__title">
              We are Affordable
            </h3>
            <p className="whyUs--content__item--text__desc">
              We are always on time and we deliver on time. We are always
              available to attend to your laundry needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}