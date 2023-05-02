import React from "react";
import Avatar from "../components/avatar";
import Location from "../assets/images/business-location.svg";
import Call from "../assets/images/call-center.png";
import Time from "../assets/images/work-time.svg";
import Layout from "../components/nav";

const Stores = () => {
  return (
    <section className="stores">
      <Layout />
      <div className="stores--container">
        <header className="stores--container__header">
          <h1 className="stores--container__header--title">Stores</h1>
          <h2 className="stores--headOffice__header--subtitle">
            Come Visit Us
          </h2>
        </header>
        <div className="stores--container__body">
          <h2 className="stores--container__body--title">Our Head Office</h2>
          <div className="stores--container__body--content">
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Location}
                  alt="Location Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                17 DBS Rd, Opposite first empire, Asaba
              </h3>
            </div>
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Call}
                  alt="Phone Call Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                +234 706 151 6180
              </h3>
            </div>
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Time}
                  alt="Timer Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                Mon - Sat: 9:00am - 8:00pm
              </h3>
            </div>
          </div>
          <button className="stores--container__body--btn">Contact Us</button>
        </div>
        <div className="stores--container__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3966.2904721146847!2d6.674200214506728!3d6.225379407863408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1043f38f43a5554d%3A0x44afc26f586548e1!2smachala%20laundry%20service!3m2!1d6.225020499999999!2d6.6778642!5e0!3m2!1sen!2sng!4v1682997341018!5m2!1sen!2sng"
            title="Head office map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="stores--container__map--frame"
          ></iframe>
        </div>
      </div>

      <div className="stores--container">
        <header className="stores--container__header">
          <h1 className="stores--container__header--title">Our location</h1>
          <h2 className="stores--headOffice__header--subtitle">
            Good laundry room makes live easier
          </h2>
        </header>
        <div className="stores--container__body">
          <h2 className="stores--container__body--title">Our Branch Office</h2>
          <div className="stores--container__body--content">
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Location}
                  alt="Location Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                Providence Plaza, Akpu Junction, Asaba
              </h3>
            </div>
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Call}
                  alt="Phone Call Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                +234 903 478 9024
              </h3>
            </div>
            <div className="stores--container__body--content__item">
              <div className="stores--container__body--content__item--avatar">
                <Avatar
                  image={Time}
                  alt="Timer Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--container__body--content__item--text">
                Mon - Sat: 9:00am - 8:00pm
              </h3>
            </div>
          </div>
          <button className="stores--container__body--btn">
            <a 
              href="https://goo.gl/maps/6Z1Z6Z7Z6Z6Z6Z6Z6"
              target="_blank"
              rel="noreferrer"
              style={{textDecoration: "none", color: "inherit"}}
            >
              Contact Us
            </a>
          </button>
        </div>
        <div className="stores--container__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3966.2904721146847!2d6.674200214506728!3d6.225379407863408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1043f38f43a5554d%3A0x44afc26f586548e1!2smachala%20laundry%20service!3m2!1d6.225020499999999!2d6.6778642!5e0!3m2!1sen!2sng!4v1682997341018!5m2!1sen!2sng"
            title="Branch office map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="stores--container__map--frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Stores;
