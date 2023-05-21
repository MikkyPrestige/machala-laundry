import React from "react";
import Avatar from "../components/avatar";
import Location from "../assets/images/business-location.svg";
import Call from "../assets/images/call-center.png";
import Time from "../assets/images/work-time.svg";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";
/** @jsxImportSource theme-ui */

const Stores = () => {
  return (
    <section
      className="stores"
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
    >
      <Helmet>
        <title>Machala Laundry | Stores</title>
        <meta name="description" content="Machala Laundry physical locations" />
      </Helmet>
      <div className="stores--intro">
        <p className="stores--intro__text">
          We are a full-service laundry provider headquartered in Asaba, Delta
          State. Machala Laundry is the place for your washing, ironing, and
          folding of laundries. We render modern, fast, and friendly services.
        </p>
      </div>
      <div
        className="stores--container"
        sx={{
          backgroundColor: "secondary",
          color: "text",
        }}
      >
        {/* <Slide cascade damping={1}> */}
        <header className="stores--container__header">
          <h1 className="stores--container__header--title">Stores</h1>
          <h2 className="stores--container__header--subtitle">Come visit us</h2>
        </header>
        <div className="stores--container__flex">
          <div className="stores--container__body">
            <h2 className="stores--container__body--title">Head Office</h2>
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
            <button className="stores--container__body--btn">
              <a
                href="mailto: Easyboi@myself.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact Us
              </a>
            </button>
          </div>
          <div className="stores--container__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d3.3515629999999997!3d6.524444000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7e7b5c3b3b%3A0x9b2f3b2b2b2b2b2b2!2sAsaba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1621361000000!5m2!1sen!2sng"
              title="Branch office map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="stores--container__map--frame"
            ></iframe>
          </div>
        </div>
        {/* </Slide> */}
      </div>

      <div
        className="stores--container"
        sx={{
          backgroundColor: "secondary",
          color: "text",
        }}
      >
        <header className="stores--container__header">
          <h1 className="stores--container__header--title">1st Location</h1>
          <h2 className="stores--container__header--subtitle">
            Good laundry room makes live easier
          </h2>
        </header>
        <div className="stores--container__flex">
          <div className="stores--container__body">
            <h2 className="stores--container__body--title">Office Building</h2>
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
                href="mailto: Easyboi@myself.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact Us
              </a>
            </button>
          </div>
          <div className="stores--container__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3966.2904721146847!2d6.674200214506728!3d6.225379407863408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1043f38f43a5554d%3A0x44afc26f586548e1!2smachala%20laundry%20service!3m2!1d6.225020499999999!2d6.6778642!5e0!3m2!1sen!2sng!4v1682997341018!5m2!1sen!2sng"
              title="Head office map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="stores--container__map--frame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
