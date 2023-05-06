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
              <label htmlFor="full-name" className="booking--container__body--form__group--label">
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="booking--container__body--form__group--input"
                placeholder="Enter your full name"
                autocomplete="name"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="email" className="booking--container__body--form__group--label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="booking--container__body--form__group--input"
                placeholder="Enter your email address"
                autocomplete="email"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="phone-number" className="booking--container__body--form__group--label">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="booking--container__body--form__group--input"
                placeholder="Enter your phone number"
                autocomplete="tel"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="street-address" className="booking--container__body--form__group--label">
                Pickup Address
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                enterkeyhint="next"
                autoComplete="street-address"
                className="booking--container__body--form__group--input"
                placeholder="Enter your pickup address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="delivery-address" className="booking--container__body--form__group--label">
                Delivery Address
              </label>
              <input
                type="text"
                name="delivery-address"
                id="delivery-address"
                enterkeyhint="next"
                autoComplete="delivery-address"
                className="booking--container__body--form__group--input"
                placeholder="Enter your delivery address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="pickup-date-time" className="booking--container__body--form__group--label">
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                name="pickup-date-time"
                id="pickup-date-time"
                enterkeyhint="next"
                autoComplete="pickup-date-time"
                className="booking--container__body--form__group--input"
                placeholder="Enter your pickup date and time"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="delivery-date-time" className="booking--container__body--form__group--label">
                Delivery Date and Time
              </label>
              <input
                type="datetime-local"
                name="delivery-date-time"
                id="delivery-date-time"
                enterkeyhint="next"
                autoComplete="delivery-date-time"
                className="booking--container__body--form__group--input"
                placeholder="Enter your delivery date and time"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label htmlFor="service-type" className="booking--container__body--form__group--label">
                Service Type
              </label>
              <select
                className="booking--container__body--form__group--input"
                placeholder="Enter your service type"
              >
                <option value="wash">Wash</option>
                <option value="iron">Iron</option>
                <option value="wash and iron">Wash and Iron</option>
              </select>
            </div>
            <div className="">
              <button className="booking--container__body--form__group--btn">
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
