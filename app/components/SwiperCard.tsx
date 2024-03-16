import React from "react";
import { urlFor } from "../lib/sanity";

const SwiperCard = ({
  title,
  paragraph,
  url,
  backgroundImageUrl,
}: {
  title: string;
  paragraph: string;
  url: string;
  backgroundImageUrl: string;
}) => {
  return (
    <div
      className="relative swiper-slide w-[18.75rem] h-[28.125rem] flex flex-col justify-end items-start"
      style={{
        backgroundImage: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${urlFor(
          backgroundImageUrl
        ).url()})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "80% 50%",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0f2027] via-[#203a4300] to-[#2c536400] flex flex-col items-start">
        <h2 className="text-white text-xl uppercase font-extrabold mb-[0.625rem] pl-[1.563rem]">
          {title}
        </h2>
        <p className="text-white text-sm font-medium pl-[1.563rem] overflow-hidden">
          {paragraph}
        </p>
        <a
          href={url}
          className="ml-[1.563rem] mr-[1.563rem] my-5 px-[1.875rem] py-[0.438em] text-[0.9rem] hover:text-white hover:bg-darkgreen"
          target="_blank"
        >
          Más info!
        </a>
      </div>
    </div>
  );
};

export default SwiperCard;
