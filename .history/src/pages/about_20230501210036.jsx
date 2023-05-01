import React from "react";
import Layout from "../components/nav";
import Shirt from "../assets/images/shirt.svg";
import Avatar from "../components/avatar";

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
              style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
            />
          </div>
        </div>
        <div className="about--content">
          <p className="about--content__text">
            A full service Laundry provider headquartered in Asaba, Delta State.
            Machala Laundry is the place for your Washing, Ironing and Folding
            of laundries. We render Modern, fast and friendly services. At
            Machala Laundry we take pride in having the knowledge, skills,
            expert resources and the products required to make your Laundry
            operations excellent.
          </p>
          <div className="about--content__videos">
            <div className="about--content__videos--video">
              <a
                className="about--content__videos--video--link"
                href="https://clipchamp.com/watch/oEE4UvILtLH?utm_source=embed&utm_medium=embed&utm_campaign=watch"
              >
                <span className="about--content__videos--video--link__span">
                  Akpu Junction Branch
                </span>
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
                <span className="about--content__videos--video--link__span">
                  First Empire Branch
                </span>{" "}
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
    </section>
  );
};

export default About;
