import React from "react";
import HomeBottom from "../components/homeBottom";
import Reviews from "../components/review";
import Gallery from "../components/gallery";
import { Helmet } from "react-helmet";
import 'transition-style';
/** @jsxImportSource theme-ui */

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Machala Laundry</title>
        <meta
          name="description"
          content="Machala Laundry is the place for your washing, ironing, and folding of laundries"
        />
      </Helmet>
      <section
        className="home"
        sx={{
          backgroundColor: "background",
          color: "text",
        }}
      >
        <div className="home--bg overflow">
          <div className="home--bg__img"></div>
        </div>
        <section className="home--content">
          <div className="home--content__head">
            <div className="home--content__head--multiColor">
              <h1 className="home--content__head--multiColor__title">
                Do Your Laundry Smartly!
              </h1>
            </div>
            <p className="home--content__head--subtitle">
              Your laundry gets delivered to your preferred destination in a
              click.
            </p>
          </div>
          <button className="home--content__btn">
            <a href="tel: +2347061516180">Request a service</a>
          </button>
        </section>
      </section>
      <HomeBottom />
      <Gallery />
      <Reviews />
    </main>
  );
};

export default Home;
