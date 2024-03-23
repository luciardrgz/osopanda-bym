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
          <div className="card relative mx-auto w-[320px] h-[450px] max-md:mb-16 max-md:max-w-[38vh] bg-[#8fffc7] hover:bg-white transition duration-500 rounded-md overflow-hidden">
            <div className="imgBx">
              <img src={urlFor(product.productImage).url()} />
            </div>

            <div className="contentBx flex flex-col gap-2 justify-center">
              <h2 className="text-darkgreen text-xl font-bold">
                {product.productName}
              </h2>
              <div className="color mt-2">
                <h3 className="text-black text-sm uppercase max-md:mr-[2px] mr-[10px]">
                  Estampados:
                </h3>
                {product.productFabricPrints.map((print, printIdx) => (
                  <img
                    key={printIdx}
                    src={urlFor(print.fabricPrintImg).url()}
                    title={print.fabricPrintName}
                    alt={print.fabricPrintName}
                    className="w-[20px] h-[20px] rounded-full mx-1 transition-transform duration-300 transform hover:scale-[2.2]"
                  />
                ))}
              </div>

              <a
                href={`/products/${product.productSlug}`}
                className="mx-12 mt-2 py-2 bg-darkgreen text-white hover:bg-green-300 
                hover:text-darkgreen rounded-md no-underline font-semibold transform translate-y-0 hover:translate-y-0 
                hover:opacity-100 opacity-0"
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
