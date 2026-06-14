"use client";

import jet1 from "@/public/jet/1.png";
import jet2 from "@/public/jet/2.png"
import jet3 from "@/public/jet/3.png"
import jet4 from "@/public/jet/4.png"

import jet5 from "@/public/jet/5.png"
import jet6 from "@/public/jet/6.png"
import jet7 from "@/public/jet/7.png"
import jet8 from "@/public/jet/8.png"
import jet9 from "@/public/jet/9.png"
import jet10 from "@/public/jet/10.png"

import { useImagesStore } from "@/providers/images-store-provider";

export const Jet = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <img src={jet1.src} alt="" className="absolute top-4 w-16" />
      <img src={jet2.src} alt="" className="absolute top-20 right-6 w-16" />
      <img src={jet3.src} alt="" className="absolute top-40 left-6 w-16" />
      {!isLessThanTwoImages && (
        <img src={jet4.src} alt="" className="absolute top-60 right-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <img src={jet5.src} alt="" className="absolute top-80 left-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <img src={jet6.src} alt="" className="absolute top-96 left-32 w-16" />
      )}
      {!isLessThanThreeImages && (
        <img
          src={jet7.src}
          alt=""
          className="absolute right-6 bottom-56 w-16"
        />
      )}
      {!isLessThanThreeImages && (
        <img
          src={jet8.src}
          alt=""
          className="absolute bottom-36 left-6 w-16"
        />
      )}
      <img
        src={jet9.src}
        alt=""
        className="absolute right-6 bottom-18 w-16"
      />
      {!isLessThanTwoImages && (
        <img
          src={jet10.src}
          alt=""
          className="absolute bottom-8 left-6 w-16"
        />
      )}
    </div>
  );
};
