import React from "react";
import Layout from "../components/nav";
import Footer from "../components/footer";
import HomeBottom from "../components/homeBottom";
import Reviews from "../components/review";
import Gallery from "../components/gallery";

const Home = () => {
  return (
    <main>
      <section className="home">
        <Layout />
        <div className="home--bg">
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
          <div className="home--content__cta">
            <button className="home--content__cta--btn">
              Request a service
            </button>
          </div>
        </section>
      </section>
      <HomeBottom />
      <Gallery />
      <Reviews />
      <div className="footer--home">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
