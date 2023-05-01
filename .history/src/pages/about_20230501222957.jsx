import React from "react";
import Layout from "../components/nav";
import Shirt from "../assets/images/shirt.svg";
import Avatar from "../components/avatar";
import Delivery from "../assets/gif/delivery-boy.gif";
import dryClean from "../assets/images/dryClean.svg";
import wash from "../assets/images/washing-machine.svg";
import iron from "../assets/images/dry-cleaner.svg";

const About = () => {
  return (
    <section className="wrapper">
      <Layout />
      <section className="about">
        <div className="about--head">
          <header className="about--head__header">
            <h1 className="about--head__header__title">
              About Machala Laundry Service
            </h1>
          </header>
          <div className="about--head__img">
            <Avatar
              image={Shirt}
              alt="about"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="about--content">
          <p className="about--content__text">
            We are a full service Laundry provider headquartered in Asaba, Delta
            State. Machala Laundry is the place for your Washing, Ironing and
            Folding of laundries. We render Modern, fast and friendly services.
            At Machala Laundry we take pride in having the knowledge, skills,
            expert resources and the products required to make your Laundry
            operations excellent.
          </p>
          <div className="about--content__videos">
            <div className="about--content__videos--video">
              <a
                className="about--content__videos--video--link"
                href="https://clipchamp.com/watch/oEE4UvILtLH?utm_source=embed&utm_medium=embed&utm_campaign=watch"
              >
                Akpu Junction Branch
              </a>
              <iframe
                allow="autoplay;"
                src="https://clipchamp.com/watch/oEE4UvILtLH/embed"
                title="Akpu Junction Branch"
                className="about--content__videos--video--iframe"
              ></iframe>
            </div>
            <div className="about--content__videos--video">
              <a
                className="about--content__videos--video--link"
                href="https://clipchamp.com/watch/ZFkJ6e8KEQk?utm_source=embed&utm_medium=embed&utm_campaign=watch"
              >
                First Empire Branch
              </a>
              <iframe
                allow="autoplay;"
                src="https://clipchamp.com/watch/ZFkJ6e8KEQk/embed"
                title="First Empire Branch"
                className="about--content__videos--video--iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <header className="services--header">
          <h1 className="services--header__title">Our Various Services</h1>
        </header>
        <div className="services--content">
          <div className="services--content__item">
            <div className="services--content__item--avatar">
              <Avatar
                image={Delivery}
                alt="Pick up and Delivery"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </div>
            <div className="services--content__item--text">
              <h2 className="services--content__item--text__title">
                Pick up and Delivery
              </h2>
              <p className="services--content__item--text__desc">
                We offer pick up and delivery services to our customers. We
                pickup your laundry and deliver it back to you at your
                convenience.
              </p>
            </div>
          </div>
          <div className="services--content__item">
            <div className="services--content__item--avatar">
      </section>
    </section>
  );
};

export default About;
