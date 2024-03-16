import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  name,
  image,
  price,
  slug,
}: {
  name: string;
  image: string;
  price: number;
  slug: string;
}) => {
  return (
    <>
      <article className="product-card bg-white relative flex flex-col items-center px-[1.5rem] py-[2rem] rounded-md overflow-hidden group">
        <div className="w-[10rem] h-[10rem] [transition:.5s] group-hover:rotate-[-3deg] group-hover:ml-14 bg-red-500 overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <div
          className="card__name absolute -left-1/4 top-[0] 
          w-14 h-full [writing-mode:vertical-rl] rotate-180 text-center
           text-[#fff] font-bold [transition:.5s]"
        >
          <p className="mr-4 uppercase">{name}</p>
        </div>
        <div className="card-prices mt-4">
          <div className="w-[2rem]">
            <a href={`/products/${slug}`} className="text-[1.5rem] ">
              <FontAwesomeIcon
                icon={faEye}
                className="text-black hover:text-pink-500 transition duration-300"
              />
            </a>
          </div>

          <div>
            <span className="card__price text-gray-500 text-xs">En stock</span>
            <span className="card__price font-extrabold text-lg">${price}</span>
          </div>

          <div className="w-[2rem]">
            <a href="" className="text-[1.5rem] ">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-black hover:text-darkgreen transition duration-300"
              />
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductCard;
