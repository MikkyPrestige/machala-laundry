import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Building from "../assets/images/firstEmpire_branch.jpeg";
import Building2 from "../assets/images//laundry3.jpg";
import Building3 from "../assets/images/folded-clothes.jpg";
import Building4 from "../assets/images/washing-machine.jpg";
import Building5 from "../assets/images/laundry2.jpg";
import Building6 from "../assets/images/hanged-clothes.jpg";

const Gallery = () => {
  const [images] = useState([
    Building,
    Building2,
    Building3,
    Building4,
    Building5,
    Building6,
  ]);

  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
  };

  const prevImage = () => {
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
  };

  return (
    <section className="gallery">
      <header className="gallery--header">
        <h1 className="gallery--header__title">Our amazing works</h1>
        <p className="gallery--header__subtitle">
          Thats why you can trust <em>Machala Laundry Service</em> to take care
          of your laundry with care.
        </p>
      </header>
      <div className="gallery--carousel">
        <div className="gallery--carousel__img">
          <img src={images[imageIndex]} alt="gallery images" />
        </div>
        <div className="gallery--carousel__btn">
          <button className="gallery--carousel__btn--prev" onClick={prevImage}>
            <FcPrevious className="gallery--carousel__btn--icon" />
          </button>
          <button className="gallery--carousel__btn--next" onClick={nextImage}>
            <FcNext className="gallery--carousel__btn--icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
