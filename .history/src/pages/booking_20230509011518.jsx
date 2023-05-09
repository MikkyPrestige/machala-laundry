import React from "react";
import Layout from "../components/nav";
import washingMachine from "../assets/images/machine1.png";
import Avatar from "../components/avatar";

const Booking = () => {
  return (
    <section className="wrapper">
      <Layout />
      <div className="booking">
        <header className="booking--header">
          <h1 className="booking--header__title">
            Laundry service request form
          </h1>
          <div className="booking--header__avatar">
            <Avatar
              image={washingMachine}
              alt="washing machine"
              style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
            />
          </div>
        </header>
        <div className="booking--container">
          <p className="booking--container__subtitle">
            Fill the form below to book a service with us
          </p>
          <form className="booking--container--form">
            <div className="booking--container--form__group">
              <label
                htmlFor="full-name"
                className="booking--container--form__group--label"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="booking--container--form__group--input"
                placeholder="full name"
                autoComplete="name"
                enterKeyHint="next"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="email"
                className="booking--container--form__group--label"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="booking--container--form__group--input"
                placeholder="email (username@example.com)"
                autoComplete="email"
                enterKeyHint="next"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="phone-number"
                className="booking--container--form__group--label"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="booking--container--form__group--input"
                placeholder="phone number"
                autoComplete="tel"
                enterKeyHint="next"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="pickup-address"
                className="booking--container--form__group--label"
              >
                Pickup Address
              </label>
              <input
                type="text"
                name="pickup-address"
                id="pickup-address"
                enterKeyHint="next"
                autoComplete="pickup-address"
                className="booking--container--form__group--input"
                placeholder="street address"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="delivery-address"
                className="booking--container--form__group--label"
              >
                Delivery Address
              </label>
              <input
                type="text"
                name="delivery-address"
                id="delivery-address"
                enterKeyHint="next"
                autoComplete="delivery-address"
                className="booking--container--form__group--input"
                placeholder="street address"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="pickup-date-time"
                className="booking--container--form__group--label"
              >
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                name="pickup-date-time"
                id="pickup-date-time"
                className="booking--container--form__group--input"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="delivery-date-time"
                className="booking--container--form__group--label"
              >
                Delivery Date and Time
              </label>
              <input
                type="datetime-local"
                name="delivery-date-time"
                id="delivery-date-time"
                className="booking--container--form__group--input"
              />
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="service-type"
                className="booking--container--form__group--label"
              >
                Service Type
              </label>
              <select
                name="service-type"
                id="service-type"
                className="booking--container--form__group--input"
                defaultValue=""
              >
                <option value="" disabled>
                  choose a service ...
                </option>
                <option value="wash">Wash</option>
                <option value="iron">Iron</option>
                <option value="wash and iron">Wash and Iron</option>
              </select>
            </div>
            <div className="booking--container--form__check">
              <div className="booking--container--form__check--header">
                <h3 className="booking--container--form__check--header__title">
                  Important Instructions
                </h3>
                <p className="booking--container--form__check--header__subtitle">
                  Please read the following instructions carefully before
                  submitting your laundry.
                </p>
              </div>
              <div className="booking--container--form__check--content">
              <div className="booking--container--form__check--content__group">
              <label className="booking--container--form__check--content__label">
                <input
                  type="checkbox"
                  name="instruction"
                  id="instruction"
                  className="booking--container--form__check--content__label__checkbox"
                />
                <span className="booking--container--form__check--content__label__text">
                  Service days and turnaround time vary by location
                </span>
              </label>
              </div>
              <div className="booking--container--form__check--content__group">
                <label
                  htmlFor="lost"
                  className="booking--container--form__check--content__group__label"
                >
                  <input
                    type="checkbox"
                    name="lost"
                    id="lost"
                    className="booking--container--form__check--group__label__checkbox"
                  />
                  <span className="booking--container--form__check--group__label__text">
                    Any lost item must be reported via email to within 5
                    business days.
                  </span>
                </label>
              </div>
              <div className="booking--container--form__check--group">
                <label
                  htmlFor="caution"
                  className="booking--container--form__check--group__label"
                >
                  <input
                    type="checkbox"
                    name="caution"
                    id="caution"
                    className="booking--container--form__check--group__label__checkbox"
                  />
                  <span className="booking--container--form__check--group__label__text">
                    We request that customers remove items and empty pockets
                    prior to leaving their laundry with us as we cannot be held
                    responsible for damage of your garments from the left items
                    in pockets.
                  </span>
                </label>
              </div>
              <textarea
                className="booking--container--form__check--textarea"
                name="instruction"
                id="instruction"
                cols="30"
                rows="10"
                placeholder="Please specify any special instructions or requests here"
              >
              </textarea>
              </div>
            </div>
            <div className="booking--container--form__cta--btn">
              <button className="booking--container--form__cta--btn">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
