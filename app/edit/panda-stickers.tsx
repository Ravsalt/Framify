"use client";

import { useImagesStore } from "@/providers/images-store-provider";
import panda1 from "@/public/panda-stickers/angry.svg";
import panda2 from "@/public/panda-stickers/birthday.svg";
import panda3 from "@/public/panda-stickers/eat.svg";
import panda4 from "@/public/panda-stickers/fever.svg";
import panda5 from "@/public/panda-stickers/full.svg";
import panda6 from "@/public/panda-stickers/happy.svg";
import panda7 from "@/public/panda-stickers/hello.svg";
import panda8 from "@/public/panda-stickers/love.svg";
import panda9 from "@/public/panda-stickers/mocking.svg";
import panda10 from "@/public/panda-stickers/peace.svg";


export const PandaStickers = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <img src={panda1.src} alt="" className="absolute top-4 w-12" />
      <img src={panda2.src} alt="" className="absolute top-20 right-6 w-12" />
      <img src={panda3.src} alt="" className="absolute top-40 left-6 w-12" />
      {!isLessThanTwoImages && (
        <img src={panda4.src} alt="" className="absolute top-60 right-6 w-12" />
      )}
      {!isLessThanTwoImages && (
        <img src={panda5.src} alt="" className="absolute top-80 left-6 w-12" />
      )}
      {!isLessThanTwoImages && (
        <img src={panda6.src} alt="" className="absolute top-96 left-32 w-12" />
      )}
      {!isLessThanThreeImages && (
        <img
          src={panda7}
          alt=""
          className="absolute right-6 bottom-56 w-12"
        />
      )}
      {!isLessThanThreeImages && (
        <img src={panda8.src} alt="" className="absolute bottom-36 left-6 w-12" />
      )}
      <img src={panda9.src} alt="" className="absolute right-6 bottom-18 w-12" />
      {!isLessThanTwoImages && (
        <img src={panda10.src} alt="" className="absolute bottom-8 left-6 w-12" />
      )}
    </div>
  );
};
