import React from "react";
import { simpleProductCard } from "../lib/interface";
import { urlFor } from "../lib/sanity";

interface Props {
  data: simpleProductCard[];
}

const LastProductCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((product, idx) => (
        <div key={idx}>
          <div className="card relative mx-auto w-[320px] h-[450px] max-md:mb-16 max-md:max-w-[38vh] bg-[#8fffc7] hover:bg-darkgreen transition duration-500 rounded-md overflow-hidden">
            <div className="imgBx">
              <img src={urlFor(product.productImage).url()} />
            </div>

            <div className="contentBx flex flex-col gap-2 justify-center">
              <h2 className="text-darkgreen">{product.productName}</h2>
              <div className="color">
                <h3 className="text-[#fff] font-light text-[14px] uppercase tracking-[2px] mr-[10px]">
                  Estampados:
                </h3>
                <span className="w-[20px] h-[20px] bg-[rgb(255,255,0)] rounded-[50%] mx-[5px] my-[0] cursor-pointer"></span>
                <span className="w-[20px] h-[20px] bg-[#9bdc28] rounded-[50%] mx-[5px] my-[0] cursor-pointer"></span>
                <span className="w-[20px] h-[20px] bg-[#ff0] rounded-[50%] mx-[5px] my-[0] cursor-pointer"></span>
              </div>

              <a
                href={`/products/${product.productSlug}`}
                className="inline-block mx-12 py-2 bg-white hover:bg-green-300 hover:text-darkgreen rounded-md no-underline font-semibold text-black transition-opacity transform translate-y-0 hover:translate-y-0 hover:opacity-100 opacity-0"
              > 
                Ver
              </a>

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LastProductCard;
