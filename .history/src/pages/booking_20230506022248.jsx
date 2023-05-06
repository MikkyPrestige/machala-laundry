import React from "react";
import Layout from "../components/nav";
import washingMachine from "../assets/images/waterman.jpg";
import Avatar from "../components/avatar";

const Booking = () => {
  return (
    <section className="booking">
      <Layout />
      <div className="booking--container">
        <header className="booking--container__header">
          <div className="booking--container___header--head">
            <h1 className="booking--container__header--head__title">
              Laundry service online order
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
                Pickup Date
              </label>
              <input
                type="date"
                className="booking--container__body--form__group--input"
              />
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
