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
              <label className="booking--container__body--form__group--label">
                Full Name
              </label>
              <input
                type="text"
                className="booking--container__body--form__group--input"
                placeholder="Enter your full name"
                autocomplete="name"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Email Address
              </label>
              <input
                type="email"
                className="booking--container__body--form__group--input"
                placeholder="Enter your email address"
                autocomplete="email"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Phone Number
              </label>
              <input
                type="tel"
                className="booking--container__body--form__group--input"
                placeholder="Enter your phone number"
                autocomplete="tel"
                enterkeyhint="next"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Pickup Address
              </label>
              <input
                type="text"
                className="booking--container__body--form__group--input"
                placeholder="Enter your pickup address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Delivery Address
              </label>
              <input
                type="text"
                className="booking--container__body--form__group--input"
                placeholder="Enter your delivery address"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Pickup Date and Time
              </label>
              <input
                type="datetime-local"
                className="booking--container__body--form__group--input"
                placeholder="Enter your pickup date and time"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
                Delivery Date and Time
              </label>
              <input
                type="datetime-local"
                className="booking--container__body--form__group--input"
                placeholder="Enter your delivery date and time"
              />
            </div>
            <div className="booking--container__body--form__group">
              <label className="booking--container__body--form__group--label">
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
