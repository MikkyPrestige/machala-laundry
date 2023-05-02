import React from "react";
import Avatar from "../components/avatar";
import Location from "../assets/images/business-location.svg";
import Call from "../assets/images/call-center.png";
import Time from "../assets/images/work-time.svg";

const Stores = () => {
  return (
    <section className="stores">
      <div className="stores--headOffice">
        <header className="stores--headOffice__header">
          <h1 className="stores--headOffice__header--title">Stores</h1>
          <h2 className="stores--headOffice__header--subtitle">
            Come Visit Us
          </h2>
        </header>
        <div className="stores--headOffice__body">
          <h2 className="stores--headOffice__body--title">Head Office</h2>
          <div className="stores--headOffice__body--content">
            <div className="stores--headOffice__body--content__item">
              <div className="stores--headOffice__body--content__item--avatar">
                <Avatar
                  src={Location}
                  alt="Location Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--headOffice__body--content__item--text">
                17 DBS Rd, Opposite first empire, Asaba
              </h3>
            </div>
            <div className="stores--headOffice__body--content__item">
              <div className="stores--headOffice__body--content__item--avatar">
                <Avatar
                  src={Call}
                  alt="Phone Call Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--headOffice__body--content__item--text">
                +234 706 151 6180
              </h3>
            </div>
            <div className="stores--headOffice__body--content__item">
              <div className="stores--headOffice__body--content__item--avatar">
                <Avatar
                  src={Time}
                  alt="Timer Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--headOffice__body--content__item--text">
                Mon - Sat: 9:00am - 8:00pm
              </h3>
            </div>
          </div>
          <div className="stores--headOffice__body--cta">
            <button className="stores--headOffice__body--cta__button">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
