// IMAGE CAROSEL GALLERY

import React from "react";
import Building from "../assets/images/building-1-min.jpeg";
import Building2 from "../assets/images//laundry.svg";
import Building3 from "../assets/images/machine-5.jpg";
import Building4 from "../assets/images/courier-guy-holding-parcel";
import Building5 from "../assets/images/gift.png";
import Building6 from "../assets/images/machine-bg.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery--container">
        <div className="gallery--container__item">
          <img src={Building} alt="building" className="gallery--img" />
        </div>
        <div className="gallery--container__item">
          <img src={Building2} alt="building" className="gallery--img" />
        </div>
        <div className="gallery--container__item">
          <img src={Building3} alt="building" className="gallery--img" />
        </div>
        <div className="gallery--container__item">
          <img src={Building4} alt="building" className="gallery--img" />
        </div>
        <div className="gallery--container__item">
          <img src={Building5} alt="building" className="gallery--img" />
        </div>
        <div className="gallery--container__item">
          <img src={Building6} alt="building" className="gallery--img" />
        </div>
      </div>
    </section>
  );
}
