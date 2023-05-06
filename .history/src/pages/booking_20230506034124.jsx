import React from "react";
import Layout from "../components/nav";
import washingMachine from "../assets/images/machine1.png";
import Avatar from "../components/avatar";

const Booking = () => {
  return (
    <section className="booking">
      <Layout />
      <div className="booking--container">
        <header className="booking--container__header">
          <div className="booking--container___header--head">
            <h1 className="booking--container__header--head__title">
              Laundry service request form
            </h1>
            <Avatar
              image={washingMachine}
              alt="washing machine"
              style={{ width: "10rem", height: "10rem", borderRadius: "1rem" }}
            />
          </div>
          <p className="booking--container__header--head__subtitle">
            Fill the form below to book a service with us
          </p>
        </header>
        <div className="booking--container__body">
          <form className="booking--container__body--form">
            <div className="booking--container__body--form__group">
              <label
                htmlFor="full-name"
                className="booking--container__body--form__group--label"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="booking--container__body--form__group--input"
                placeholder="Full name"
                autocomplete="name"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="email"
                className="booking--container__body--form__group--label"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="booking--container__body--form__group--input"
                placeholder="Email address"
                autocomplete="email"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="phone-number"
                className="booking--container__body--form__group--label"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="booking--container__body--form__group--input"
                placeholder="Phone number"
                autocomplete="tel"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="pickup-address"
                className="booking--container__body--form__group--label"
              >
                Pickup Address
              </label>
              <input
                type="text"
                name="pickup-address"
                id="pickup-address"
                enterkeyhint="next"
                autoComplete="pickup-address"
                className="booking--container__body--form__group--input"
                placeholder="Pickup address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="delivery-address"
                className="booking--container__body--form__group--label"
              >
                Delivery Address
              </label>
              <input
                type="text"
                name="delivery-address"
                id="delivery-address"
                enterkeyhint="next"
                autoComplete="delivery-address"
                className="booking--container__body--form__group--input"
                placeholder="Delivery address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="pickup-date-time"
                className="booking--container__body--form__group--label"
              >
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                name="pickup-date-time"
                id="pickup-date-time"
                enterkeyhint="next"
                autoComplete="pickup-date-time"
                className="booking--container__body--form__group--input"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="delivery-date-time"
                className="booking--container__body--form__group--label"
              >
                Delivery Date and Time
              </label>
              <input
                type="datetime-local"
                name="delivery-date-time"
                id="delivery-date-time"
                enterkeyhint="next"
                autoComplete="delivery-date-time"
                className="booking--container__body--form__group--input"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label
                htmlFor="service-type"
                className="booking--container__body--form__group--label"
              >
                Service Type
              </label>
              <select
                name="service-type"
                id="service-type"
                enterkeyhint="next"
                autoComplete="service-type"
                className="booking--container__body--form__group--input"
                placeholder="Service type"
              >
                <option value="wash">Wash</option>
                <option value="iron">Iron</option>
                <option value="wash and iron">Wash and Iron</option>
              </select>
            </div>
            <div className="booking--container__body--form__instruction">
              <div className="booking--container__body--form__instruction--header">
                <h3 className="booking--container__body--form__instruction--header__title">
                  Important Instructions
                </h3>
                <p className="booking--container__body--form__instruction--header__subtitle">
                  Please read the following instructions carefully before
                  submitting your laundry.
                </p>
              </div>
              {/* <label className="booking--container__body--form__instruction--label">
                <input
                  type="checkbox"
                  name="instruction"
                  id="instruction"
                  className="booking--container__body--form__instruction--label__checkbox"
                />
                <span className="booking--container__body--form__instruction--label__text">
                  Service days and turnaround time vary by location
                </span>
              </label> */}
              <div className="booking--container__body--form__instruction--group">
                <label
                  htmlFor="lost"
                  className="booking--container__body--form__instruction--group__label"
                >
                  <input
                    type="checkbox"
                    name="lost"
                    id="lost"
                    className="booking--container__body--form__instruction--group__label__checkbox"
                  />
                  <span className="booking--container__body--form__instruction--group__label__text">
                    Any lost item must be reported via email to within 5
                    business days.
                  </span>
                </label>
              </div>
              <div className="booking--container__body--form__instruction--group">
                <label
                  htmlFor="caution"
                  className="booking--container__body--form__instruction--group__label"
                >
                  <input
                    type="checkbox"
                    name="caution"
                    id="caution"
                    className="booking--container__body--form__instruction--group__label__checkbox"
                  />
                  <span className="booking--container__body--form__instruction--group__label__text">
                    We request that customers remove items and empty pockets
                    prior to leaving their laundry with us as we cannot be held
                    responsible for damage of your garments from the left items
                    in pockets.
                  </span>
                </label>
              </div>
              <textarea className="booking--container__body--form__instruction--textarea">
                Special instructions(If any)...
              </textarea>
            </div>
            <div className="booking--container__body--form__cta--btn">
              <button className="booking--container__body--form__cta--btn">
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
