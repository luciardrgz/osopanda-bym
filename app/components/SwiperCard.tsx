import React from "react";

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
      className="swiper-slide w-full h-full"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        borderRadius: "1rem",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/4 rounded-b-[1rem] bg-gradient-to-t from-[#a6eacb] via-[#a6eacb] to-[#a6eacb60] flex flex-col items-start">
        <div className="mt-4 text-center">
          <a
            href={url}
            className="ml-[1.563rem] mr-[1.563rem]  px-[1.875rem] py-[0.438em] text-[0.9rem] hover:text-white hover:bg-darkgreen"
            target="_blank"
          >
            {title}
          </a>
          <p className="text-darkgreen mt-2 text-sm font-medium pl-[1.563rem] overflow-hidden">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
