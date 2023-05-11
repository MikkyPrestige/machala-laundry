import React from "react";
import Avatar from "./avatar";
import Delivery from "../assets/gif/delivery-boy.gif";
import Affordable from "../assets/gif/shopping.gif";
import Medal from "../assets/gif/first-place-badge.gif";
import Collect from "../assets/images/delivery-guy-with-parcel-on-bike.svg";
import Clean from "../assets/images/laundry.svg";
import deliver from "../assets/images/courier-guy-holding-parcel.svg";

const HomeBottom = () => {
  return (
    <section className="homeBottom">
      <section className="work paddingTop-lg">
        <div className="work--header">
          <h1 className="work--header__title">Why Choose Us?</h1>
          <p className="work--header__subtitle">
            Our services is lightening quick from the moment your package is
            picked up. Satisfaction guaranteed!
          </p>
        </div>
        <div className="work--content">
          <figure className="work--content__item">
            <div className="work--content__item--avatar">
              <Avatar
                image={Delivery}
                alt="Pick up and Delivery"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            <figcaption className="work--content__item--wrapper">
              <h3 className="work--content__item--wrapper__title">
                Fast Pickup and Delivery
              </h3>
              <p className="work--content__item--wrapper__subtitle">
                Your Laundry gets picked up and delivered back to your doorstep
              </p>
            </figcaption>
          </figure>
          <figure className="work--content__item">
            <div className="whyUs--content__item--avatar">
              <Avatar
                image={Affordable}
                alt="Affordable"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            <figcaption className="work--content__item--wrapper">
              <h3 className="work--content__item--wrapper__title">
                Affordable Service
              </h3>
              <p className="work--content__item--wrapper__subtitle">
                Our services are affordable and No additional cost added
              </p>
            </figcaption>
          </figure>
          <figure className="work--content__item">
            <div className="work--content__item--avatar">
              <Avatar
                image={Medal}
                alt="First Place"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            <figcaption className="work--content__item--wrapper">
              <h3 className="work--content__item--wrapper__title">
                Quality Guaranteed
              </h3>
              <p className="work--content__item--wrapper__subtitle">
                We ensure the best quality service in time
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="work paddingTop-sm">
        <div className="work--header">
          <h1 className="work--header__title">How Machala Laundry Works</h1>
          <p className="work--header__subtitle">
            Book a time for collection of your laundry & dry cleaning, we
            deliver it back to you at the scheduled time slot.
          </p>
        </div>
        <div className="work--content2">
          <div className="work--content2__progress-bar">
            <span className="work--content2__progress-bar__stop one"></span>
            <span className="work--content2__progress-bar__stop two"></span>
            <span className="work--content2__progress-bar__stop three"></span>
          </div>
          <div className="work--content2__items">
            <figure className="work--content2__items__item">
              <div className="work--content2__items__item--avatar">
                <Avatar
                  image={Collect}
                  alt="Pick up Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <figcaption className="work--content2__items__item--text">
                <h3 className="work--content2__items__item--text__title">
                  We collect
                </h3>
                <p className="work--content2__items__item--text__subtitle">
                  We collect your laundry from your doorstep any day of the week
                </p>
              </figcaption>
            </figure>
            <figure className="work--content2__items__item">
              <div className="work--content2__items__item--avatar">
                <Avatar
                  image={Clean}
                  alt="Washing Machine Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <figcaption className="work--content2__items__item--text">
                <h3 className="work--content2__items__item--text__title">
                  We clean
                </h3>
                <p className="work--content2__items__item--text__subtitle">
                  We use the best quality products and clean your laundry with
                  utmost care.
                </p>
              </figcaption>
            </figure>
            <figure className="work--content2__items__item">
              <div className="work--content2__items__item--avatar">
                <Avatar
                  image={deliver}
                  alt="Delivery Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <figcaption className="work--content2__items__item--text">
                <h3 className="work--content2__items__item--text__title">
                  We deliver
                </h3>
                <p className="work--content2__items__item--text__subtitle">
                  We deliver your clean, fresh laundry back to your doorstep at
                  the scheduled time.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="work--btn">Order Now</button>
      </section>
    </section>
  );
};

export default HomeBottom;
