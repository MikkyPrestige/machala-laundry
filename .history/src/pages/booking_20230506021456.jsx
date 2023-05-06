// BOOK WITH US
// Description: Booking page for the website

import React from "react";
import Layout from "../components/nav";

const Booking = () => {
  return (
    <section className="booking">
      <Layout />
      <div className="booking--container">
        <div className="booking--container__header">
          <h1 className="booking--container__header--title">Book with us</h1>
          <p className="booking--container__header--subtitle">
            Fill the form below to book a service with us
          </p>
        </div>
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
            <div className="