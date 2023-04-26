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
          <h1 className="home--content__head--title">Do Your Laundry Smartly!</h1>
          <p className="home--content__head--subtitle">
          Your laundry gets delivered to your preferred destination in a click
          </p>
          </div>
          {/* <div className="home--content__img">
            <div className="home--content__img--imgContent home--content__img--imgContent-1">
            <Avatar image={Building1} alt="building" style={{ width: "100%", height: "100%", borderRadius: "1rem" }} />
            </div>
            <div className="home--content__img--imgContent home--content__img--imgContent-2">
            <Avatar image={Building2} alt="building" style={{ width: "100%", height: "100%", borderRadius: "1rem" }} />
            </div>
            <div className="home--content__img--imgContent home--content__img--imgContent-3">
            <Avatar image={Machine} alt="building" style={{ width: "100%", height: "100%", borderRadius: "1rem" }} />
            </div>
          </div> */}
          </section>
    </main>
  );
}

export default Home