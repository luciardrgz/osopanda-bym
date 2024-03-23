"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SwiperCard from "../components/SwiperCard";
import { simpleProductCard } from "../lib/interface";
import { urlFor } from "../lib/sanity";

interface Props {
  data: simpleProductCard[];
}

const Hero: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="h-full mt-2 grid grid-cols-2 max-md:grid-cols-1">
      <div className="my-auto p-6 h-[60vh] max-md:h-[50vh] bg-[#8fffc7] rounded-md max-md:mx-auto">
        <span className="text-lg uppercase text-darkgreen">Esto es</span>
        <h1 className="title-gradient text-7xl max-sm:text-5xl font-extrabold tracking-tighter">
          oSoPanda
        </h1>
        <hr className="block bg-darkgreen h-[0.25rem] w-[6.25rem] border-none mt-[1.125rem] mb-[1.875rem]" />
        <p className="text-darkgreen font-medium tracking-tight">
          Nacido en Mar del Plata en 2021, te ofrecemos bolsos y mochilas únicos
          en su especie. Hechos a mano con materiales de alta calidad. En cada
          creación se refleja la pasión por el diseño y la artesanía. ¡Animate a
          ser parte de la familia oSoPanda!
        </p>
      </div>

      <div className="swiper w-full h-[85vh] max-md:h-[50vh] max-md:mx-auto">
        <div className="swiper-wrapper">
          {data.map((product, index) => (
            <SwiperCard
              key={index}
              title={product.productName}
              paragraph={product.productSmallDescription}
              url={`/products/${product.productSlug}`}
              backgroundImageUrl={urlFor(product.productImage).url()}
            />
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Hero;
