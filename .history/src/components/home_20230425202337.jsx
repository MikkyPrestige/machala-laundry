import React from "react";
import Avatar from "./avatar";
import Building1 from "../assets/images/firstEmpire_branch.jpeg";
import Building2 from "../assets/images/building-1-min.jpeg";
import Machine from "../assets/images/washing-machine.jpg";

const Home = () => {
  return (
    <main className="home">
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
        <div className="home--cta">
          <button className="home--cta__btn">Request a service</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
