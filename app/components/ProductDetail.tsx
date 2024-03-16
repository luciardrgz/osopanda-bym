import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

const ProductDetail = ({
  name,
  price,
  longDescription,
  image,
}: {
  name: string;
  price: number;
  longDescription: string;
  image: string;
}) => {
  return (
    <div className="flex mt-10 m-auto max-lg:flex-col">
      <div className="bg-[#8fffc7] max-lg:rounded-t-xl lg:rounded-l-xl flex flex-col justify-center items-center">
        <Image src="/logo.png" alt="" width={100} height={100} />
        <img src={image} alt="producto" />
      </div>

      <div className="product-details p-[40px] w-full bg-white max-lg:rounded-b-xl lg:rounded-r-xl">
        <h1 className="text-4xl uppercase font-extrabold text-darkgreen">{name}</h1>
        <span className="text-sm text-gray-400">Categoría</span>
        <div>
          <span className="text-gray-400 tracking-tight">Hay stock —</span>
          <span className="ml-2 text-2xl font-bold">${price}</span>
        </div>

        <h5 className="mt-4">Descripción</h5>
        <p className="text-gray-400 tracking-tight">
          <PortableText value={longDescription} />
        </p>

        <div className="flex max-sm:flex-col mt-[10rem] max-sm:mt-10 gap-11">
          <div className="flex gap-2">
            <button
              type="button"
              className="uppercase font-bold bg-[#8fffc7] leading-tight text-darkgreen hover:bg-darkgreen hover:text-white transition duration-100 flex items-center p-3 rounded-xl"
            >
              <FontAwesomeIcon icon={faCartPlus} className="w-8 mr-2" />
              <p>Añadir al carrito</p>
            </button>
            <button
              type="button"
              className="uppercase font-bold bg-[#8fffc7] leading-tight text-darkgreen hover:bg-darkgreen hover:text-white transition duration-100 flex items-center p-3 rounded-xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 mr-2" />
              <p>Consultar</p>
            </button>
          </div>

          <div>
            <h5 className="font-bold">Telas usadas</h5>
            <ul>Acá van las telas</ul>
          </div>

          <div>
            <h5 className="font-bold">Estampados disponibles</h5>
            <a href="#!" className="option">
              Estampado
            </a>
          </div>

          <div>
            <h5 className="font-bold">Unidades</h5>
            <a href="#!" className="option">
              Cuántas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
