import { React, useState } from "react";
import washingMachine from "../assets/images/machine1.png";
import Avatar from "../components/avatar";
// import { database, ref, set } from "../config";
import { Helmet } from "react-helmet";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pickupAddress: "",
    deliveryAddress: "",
    pickupDateTime: "",
    deliveryDateTime: "",
    serviceType: "",
    instruction: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setForm({
      name: "",
      email: "",
      phoneNumber: "",
      pickupAddress: "",
      deliveryAddress: "",
      pickupDateTime: "",
      deliveryDateTime: "",
      serviceType: "",
      instruction: "",
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!form.name.trim()) {
      isValid = false;
      errors["name"] = "Please enter your name";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      isValid = false;
      errors["email"] = "Please enter a valid email address";
    } else if (!form.phoneNumber.trim()) {
      isValid = false;
      errors["phoneNumber"] = "Please enter your phone number";
    } else if (!form.serviceType.trim()) {
      isValid = false;
      errors["serviceType"] = "Please select a service type";
    }
    setError(errors);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // sendMessage(form);
      console.log(form);
      setSuccess(true);
      setSuccessName(form.name);
      reset();
    }
  };

  // SEND FORM DATA TO FIREBASE
  // const sendMessage = (form) => {
  //   set(ref(database, "orders/" + Math.floor(Math.random() * 10000000)), {
  //     name: form.name,
  //     email: form.email,
  //     phoneNumber: form.phoneNumber,
  //     pickupAddress: form.pickupAddress,
  //     deliveryAddress: form.deliveryAddress,
  //     pickupDateTime: form.pickupDateTime,
  //     deliveryDateTime: form.deliveryDateTime,
  //     serviceType: form.serviceType,
  //     instruction: form.instruction,
  //   });
  // };

  // REMOVE POPUP
  const removePopup = () => {
    setSuccess(false);
  };

  return (
    <section className="wrapper">
      <Helmet>
        <title>Machala Laundry | Booking</title>
        <meta name="description" content="Place booking orders here" />
      </Helmet>
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
          {success && (
            <div className="booking--popup">
              <h2 className="booking--popup__title">
                Thank you <strong>{successName}</strong>!
              </h2>
              <p className="booking--popup__text">
                Your order has been received. We will get back to you as soon as
                possible.
              </p>
              <button className="booking--popup__btn" onClick={removePopup}>
                Close
              </button>
            </div>
          )}
          <form className="booking--container--form" onSubmit={submitForm}>
            <div className="booking--container--form__group">
              <label
                htmlFor="name"
                className="booking--container--form__group--label"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="booking--container--form__group--input"
                placeholder="name"
                autoComplete="name"
                enterKeyHint="next"
                value={form.name}
                onChange={handleChange}
              />
              <p className="booking--container--form__error">{error.name}</p>
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
                value={form.email}
                onChange={handleChange}
              />
              <p className="booking--container--form__error">{error.email}</p>
            </div>
            <div className="booking--container--form__group">
              <label
                htmlFor="phoneNumber"
                className="booking--container--form__group--label"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="booking--container--form__group--input"
                placeholder="phone number"
                autoComplete="tel"
                enterKeyHint="next"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <p className="booking--container--form__error">
                {error.phoneNumber}
              </p>
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
                name="pickupAddress"
                id="pickupAddress"
                enterKeyHint="next"
                autoComplete="pickup-address"
                className="booking--container--form__group--input"
                placeholder="street address"
                onChange={handleChange}
                value={form.pickupAddress}
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
                name="deliveryAddress"
                id="deliveryAddress"
                enterKeyHint="next"
                autoComplete="delivery-address"
                className="booking--container--form__group--input"
                placeholder="street address"
                onChange={handleChange}
                value={form.deliveryAddress}
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
                name="pickupDateTime"
                id="pickupDateTime"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.pickupDateTime}
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
                name="deliveryDateTime"
                id="deliveryDateTime"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.deliveryDateTime}
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
                name="serviceType"
                id="serviceType"
                className="booking--container--form__group--input"
                onChange={handleChange}
                value={form.serviceType}
              >
                <option value="">choose a service ...</option>
                <option value="wash">Wash</option>
                <option value="iron">Iron</option>
                <option value="wash and iron">Wash and Iron</option>
              </select>
              <p className="booking--container--form__error">
                {error.serviceType}
              </p>
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
                  <label className="booking--container--form__check--content__group__label">
                    <input
                      type="checkbox"
                      name="instruction"
                      id="instruction"
                      className="booking--container--form__check--content__group__label__checkbox"
                    />
                    <span className="booking--container--form__check--content__group__label__text">
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
                      className="booking--container--form__check--content__group__label__checkbox"
                    />
                    <span className="booking--container--form__check--content__group__label__text">
                      Any lost item must be reported via email to within 5
                      business days.
                    </span>
                  </label>
                </div>
                <div className="booking--container--form__check--content__group">
                  <label
                    htmlFor="caution"
                    className="booking--container--form__check--content__group__label"
                  >
                    <input
                      type="checkbox"
                      name="caution"
                      id="caution"
                      className="booking--container--form__check--content__group__label__checkbox"
                    />
                    <span className="booking--container--form__check--content__group__label__text">
                      We request that customers remove items and empty pockets
                      prior to leaving their laundry with us as we cannot be
                      held responsible for damage of your garments from the left
                      items in pockets.
                    </span>
                  </label>
                </div>
                <textarea
                  className="booking--container--form__check--content__textarea"
                  name="instruction"
                  id="instruction"
                  placeholder="Please specify any special instructions or requests here"
                  onChange={handleChange}
                  value={form.instruction}
                ></textarea>
              </div>
            </div>
            <button className="booking--container--form__cta">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
