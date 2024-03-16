import React from "react";

const Feature = ({
  title,
  description,
  image,
  isLastFeature,
}: {
  title: string;
  description: string;
  image: string;
  isLastFeature: boolean;
}) => {
  return (
    <div
      className={`basis-[100%] max-sm:p-[10px] max-sm:py-[10px] px-[50px] py-[25px] ${
        isLastFeature
          ? "border-b-[none] border-r-[none]"
          : "max-sm:border-b-[1px] max-sm:border-b-[#e1f1ff] sm:border-r-[1px] sm:border-r-[#e1f1ff]"
      }`}
    >
      <div className="max-w-[10rem] h-[10rem] mb-8 flex justify-center items-center mx-auto">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
      </div>

      <h2 className="text-[#888] font-extrabold leading-[1rem] sm:w-[70%] mx-auto">
        {title}
      </h2>
      <ul className="text-black m-auto">
        <li className="text-sm leading-normal px-[0] py-[15px]">
          {description}
        </li>
      </ul>
    </div>
  );
};

export default Feature;
