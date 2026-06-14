"use client";

import axolotl1 from "@/public/axolotl-stickers/hi.svg";
import axolotl2 from "@/public/axolotl-stickers/happy.svg";
import axolotl3 from "@/public/axolotl-stickers/love.svg";
import axolotl4 from "@/public/axolotl-stickers/sad.svg";
import axolotl5 from "@/public/axolotl-stickers/sleep.svg";
import axolotl6 from "@/public/axolotl-stickers/read.svg";
import axolotl7 from "@/public/axolotl-stickers/angry.svg";
import axolotl8 from "@/public/axolotl-stickers/eat.svg";
import axolotl9 from "@/public/axolotl-stickers/ok.svg";
import axolotl10 from "@/public/axolotl-stickers/laugh.svg";
import { useImagesStore } from "@/providers/images-store-provider";

export const AxolotlStickers = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={axolotl1.src} alt="" className="absolute top-4 w-12" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={axolotl2.src} alt="" className="absolute top-20 right-6 w-12" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={axolotl3.src} alt="" className="absolute top-40 left-6 w-12" />
      {!isLessThanTwoImages && (
        <img src={axolotl4.src} alt="" className="absolute top-60 right-6 w-12" />
      )}
      {!isLessThanTwoImages && (
        <img src={axolotl5.src} alt="" className="absolute top-80 left-6 w-12" />
      )}
      {!isLessThanTwoImages && (
        <img src={axolotl6.src} alt="" className="absolute top-96 left-32 w-12" />
      )}
      {!isLessThanThreeImages && (
        <img src={axolotl7.src} alt="" className="absolute right-6 bottom-56 w-12" />
      )}
      {!isLessThanThreeImages && (
        <img src={axolotl8.src} alt="" className="absolute bottom-36 left-6 w-12" />
      )}
      <img src={axolotl9.src} alt="" className="absolute right-6 bottom-18 w-12" />
      {!isLessThanTwoImages && (
        <img src={axolotl10.src} alt="" className="absolute bottom-8 left-6 w-12" />
      )}
    </div>
  );
};
