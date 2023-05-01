import React from "react";
import Layout from "./nav";
import HomeBottom from "./homeBottom";
import Reviews from "./review";

const Home = () => {
  return (
    <div>
      <main className="home">
        <Layout />
        <div className="home--bg">
          <div className="home--bg__img"></div>
        </div>
        <section className="home--content">
          <div className="home--content__head">
            <h1 className="home--content__head--title">
              Do Your Laundry Smartly!
            </h1>
            <p className="home--content__head--subtitle">
              Your laundry gets delivered to your preferred destination in a
              click.
            </p>
          </div>
          <div className="home--content__cta">
            <button className="home--content__cta--btn">
              Request a service
            </button>
          </div>
        </section>
      </main>
      <HomeBottom />
      <Reviews />
    </div>
  );
};

export default Home;
