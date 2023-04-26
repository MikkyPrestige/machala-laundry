import React from "react";
import Avatar from "./avatar";
import Building1 from "../assets/images/firstEmpire_branch.jpeg";
import Building2 from "../assets/images/building-1-min.jpeg";
import Machine from "../assets/images/machine-5.jpg";


const Home = () => {
  return (
    <div className="home">
      <div className="home--bg">
        <div className="home--bg--img"></div>
      </div>
      <div className="home--content">
        <div className="home--content__title">
          <h1>Laundry Today or naked Tomorrow.</h1>
          <p className="home--content__subtitle">
          Wash, dry and fold your clothes at affordable prices.
          </p>
          </div>
          <div className="home--content__img">
            <div className="home--content__imgContent">
            <Avatar image={Building1} alt="building" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="home--content__imgContent">
            <Avatar image={Building2} alt="building" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="home--content__imgContent">
            <Avatar image={Machine} alt="building" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
          </div>
    </div>
  );
}







export default Home