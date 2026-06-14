"use client";

import sage1 from "@/public/sage/1.png";
import sage2 from "@/public/sage/2.png";
import sage3 from "@/public/sage/3.png";
import sage4 from "@/public/sage/4.png";
import sage5 from "@/public/sage/5.png";
import sage6 from "@/public/sage/6.png";
import sage7 from "@/public/sage/7.png";
import sage8 from "@/public/sage/8.png";
import sage9 from "@/public/sage/9.png";
import sage10 from "@/public/sage/10.png";

import { useImagesStore } from "@/providers/images-store-provider";

export const Sage = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  
  return (
    <div>
      <img src={sage1.src} alt="" className="absolute top-4 w-20" />
      <img src={sage2.src} alt="" className="absolute top-20 right-6 w-20" />
      <img src={sage3.src} alt="" className="absolute top-40 left-6 w-20" />
      {!isLessThanTwoImages && (
        <img src={sage4.src} alt="" className="absolute top-60 right-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <img src={sage5.src} alt="" className="absolute top-80 left-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <img src={sage6.src} alt="" className="absolute top-96 left-32 w-20" />
      )}
      {!isLessThanThreeImages && (
        <img
          src={sage7.src}
          alt=""
          className="absolute right-6 bottom-56 w-20"
        />
      )}
      {!isLessThanThreeImages && (
        <img
          src={sage8.src}
          alt=""
          className="absolute bottom-36 left-6 w-20"
        />
      )}
      <img
        src={sage9.src}
        alt=""
        className="absolute right-6 bottom-18 w-20"
      />
      {!isLessThanTwoImages && (
        <img
          src={sage10.src}
          alt=""
          className="absolute bottom-8 left-6 w-20"
        />
      )}
    </div>
  );
};
