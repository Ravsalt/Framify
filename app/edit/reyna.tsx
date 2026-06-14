"use client";

import reyna1 from "@/public/reyna/1.png";
import reyna2 from "@/public/reyna/2.png";
import reyna3 from "@/public/reyna/3.png";
import reyna4 from "@/public/reyna/4.png";
import reyna5 from "@/public/reyna/5.png";
import reyna6 from "@/public/reyna/6.png";
import reyna7 from "@/public/reyna/7.png";
import reyna8 from "@/public/reyna/8.png";
import reyna9 from "@/public/reyna/9.png";
import reyna10 from "@/public/reyna/10.png";

import { useImagesStore } from "@/providers/images-store-provider";

export const Reyna = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  
  return (
    <div>
      <img src={reyna1.src} alt="" className="absolute top-4 w-16" />
      <img src={reyna2.src} alt="" className="absolute top-20 right-6 w-16" />
      <img src={reyna3.src} alt="" className="absolute top-40 left-6 w-16" />
      {!isLessThanTwoImages && (
        <img src={reyna4.src} alt="" className="absolute top-60 right-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <img src={reyna5.src} alt="" className="absolute top-80 left-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <img src={reyna6.src} alt="" className="absolute top-96 left-32 w-16" />
      )}
      {!isLessThanThreeImages && (
        <img
          src={reyna7.src}
          alt=""
          className="absolute right-6 bottom-56 w-16"
        />
      )}
      {!isLessThanThreeImages && (
        <img
          src={reyna8.src}
          alt=""
          className="absolute bottom-36 left-6 w-16"
        />
      )}
      <img
        src={reyna9.src}
        alt=""
        className="absolute right-6 bottom-18 w-16"
      />
      {!isLessThanTwoImages && (
        <img
          src={reyna10.src}
          alt=""
          className="absolute bottom-8 left-6 w-16"
        />
      )}
    </div>
  );
};
