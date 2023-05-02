import React from "react";
import Avatar from "../components/avatar";
import Location from "../assets/images/business-location.svg";
import Call from "../assets/images/call-center.png";
import Time from "../assets/images/work-time.svg";

const Stores = () => {
  return (
    <section className="stores">
      <div className="stores--headOffice">
       <header className="stores--headOffice__header">
       <h1 className="stores--headOffice__header--title">Stores</h1>
        <h2 className="stores--headOffice__header--subtitle">Come Visit Us</h2>
       </header>
        <div className="stores--headOffice__body">
          <h2 className="stores--headOffice__body--title">
            Head Office
          </h2>
          <div className="stores--headOffice__body--content">
            <div className="stores--headOffice__body--content__item">
              <div className="stores--headOffice__body--content__item--avatar">
                <Avatar
                src={Location}
                alt="location Icon"
                style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3 className="stores--headOffice__body--content__item--text">
                17 DBS Rd, Opposite first empire, Asaba
              </h3>
    </section>
  );
}