// IMAGE CAROSEL GALLERY

import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Avatar from "./avatar";
import Building from "../assets/images/building-1-min.jpeg";
import Building2 from "../assets/images//laundry.svg";
import Building3 from "../assets/images/machine-5.jpg";
import Building4 from "../assets/images/courier-guy-holding-parcel";
import Building5 from "../assets/images/gift.png";
import Building6 from "../assets/images/machine-bg.jpg";

const Gallery = () => {
  const [images, setImages] = useState([
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
        <h1 className="gallery--header__title">Our Gallery</h1>
        <p className="gallery--header__subtitle">
          We are a team of dedicated professionals, ready to do what ever it
          takes to make your laundry perfect.
        </p>
      </header>
      <div className="gallery--carousel">
        <div className="gallery--carousel__image">
          <Avatar
            src={images[imageIndex]}
            alt="gallery images"
            className="gallery--carousel__image--avatar"
          />
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
