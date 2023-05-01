// IMAGE CAROSEL GALLERY

import React, { useState } from "react";
import {FcNext, FcPrevious } from "react-icons/fc"
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
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
  }

  const prevImage = () => {
  }