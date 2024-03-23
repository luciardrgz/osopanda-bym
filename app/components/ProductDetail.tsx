"use client";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PortableText } from "next-sanity";
import React, { useState } from "react";
import { productDetailsButton } from "../consts/styles";
import FabricPrintSelector from "./FabricPrintSelector";
import { simpleProductCard } from "../lib/interface";
import { urlFor } from "../lib/sanity";

interface Props {
  data: simpleProductCard;
}

const ProductDetail: React.FC<Props> = ({ data }) => {
  const [isFabricPrintSelectorOpen, setFabricPrintSelectorOpen] =
    useState(false);

  const toggleModal = () => {
    setFabricPrintSelectorOpen(!isFabricPrintSelectorOpen);
  };
  
  if (!data) {
    return <div>El producto no existe :(</div>; 
  }

  return (
    <div className="flex mt-10 m-auto max-lg:flex-col w-full">
      <div className="bg-[#8fffc7] max-lg:rounded-t-xl lg:rounded-l-xl flex flex-col justify-center items-center">
        <img
          src={urlFor(data.productImage).url()}
          alt="producto"
          className="max-md:rounded-t-xl"
        />
      </div>

      <div className="product-details p-5 lg:p-[40px] w-full bg-white max-lg:rounded-b-xl lg:rounded-r-xl">
        <h1 className="text-4xl uppercase font-extrabold text-darkgreen">
          {data.productName}
        </h1>
        <span className="text-sm text-gray-400 italic">
          {data.productCategory}
        </span>
        <div>
          <span className="text-gray-400 tracking-tight">Hay stock —</span>
          <span className="ml-2 text-2xl font-bold">${data.productPrice}</span>
        </div>

        <h5 className="mt-4">Descripción</h5>
        <p className="text-gray-400 tracking-tight">
          <PortableText value={data.productLongDescription} />
        </p>

        <h5 className="mt-4">Telas usadas</h5>
        <p className="text-gray-400 tracking-tight">Acá van las telas</p>

        <div className="flex max-md:flex-col justify-between mt-[10rem] max-sm:mt-10 gap-11">
          <div>
            <h5 className="font-bold">¿Qué estampado te gusta más?</h5>
            <button
              className={`${productDetailsButton} w-full normal-case`}
              onClick={toggleModal}
            >
              Seleccionar estampados
            </button>
          </div>

          <div>
            <h5 className="font-bold">Unidades</h5>
            <select className={`${productDetailsButton} w-full`}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="flex max-sm:flex-col gap-2">
            <button type="button" className={productDetailsButton}>
              <FontAwesomeIcon icon={faCartPlus} className="w-8 mr-2" />
              <p>Añadir al carrito</p>
            </button>
            <button type="button" className={productDetailsButton}>
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 mr-2" />
              <p>Consultar</p>
            </button>
          </div>
        </div>
      </div>

      {isFabricPrintSelectorOpen && (
        <FabricPrintSelector
          toggleModal={toggleModal}
          productName={data.productName}
          availableFabricPrints={data.productFabricPrints}
        />
      )}
    </div>
  );
};

export default ProductDetail;
