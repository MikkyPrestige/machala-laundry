import React from "react";
import Layout from "../layout/nav";
import Shirt from "../assets/images/shirt.svg";
import Avatar from "../components/avatar";
import Delivery from "../assets/images/delivery-boy.jpg";
import Cloth from "../assets/images/dryClean.svg";
import WashingMachine from "../assets/images/washing-machine.svg";
import Iron from "../assets/images/dry-cleaner.svg";
import Footer from "../layout/footer";

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
          <h2 className="services--header__title">Services</h2>
          <h3 className="services--header__subtitle">Our various services</h3>
        </header>
        <div className="services--content">
          <div className="services--content__item">
            <div className="services--content__item--avatar">
              <Avatar
                image={Cloth}
                alt="Folded cloth icon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="services--content__item--title">Dry Cleaning</h2>
          </div>
          <div className="services--content__item">
            <div className="services--content__item--avatar">
              <Avatar
                image={Iron}
                alt="Iron Icon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="services--content__item--title">Iron Cleaning</h2>
          </div>
          <div className="services--content__item">
            <div className="services--content__item--avatar">
              <Avatar
                image={WashingMachine}
                alt="Washing machine icon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="services--content__item--title">Self Service</h2>
          </div>
          <div className="services--content__item">
            <div className="services--content__item--avatar">
              <Avatar
                image={Delivery}
                alt="Delivery man icon"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <h2 className="services--content__item--title">Delivery Service</h2>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default About;
