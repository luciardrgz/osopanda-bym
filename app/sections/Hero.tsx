"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SwiperCard from "../components/SwiperCard";
import { simpleProductCard } from "../lib/interface";

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
      loop: true,
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
    <div className="hero h-[87vh] -mt-10 grid-cols-2 w-full bg-[#d7f8e7] rounded-md">
      <div className="p-6">
        <span className="text-lg uppercase text-darkgreen">Esto es</span>
        <h1 className="title-gradient text-7xl font-extrabold tracking-tighter">
          oSoPanda
        </h1>
        <hr className="block bg-darkgreen h-[0.25rem] w-[6.25rem] border-none mt-[1.125rem] mb-[1.875rem]" />
        <p className="text-darkgreen font-medium tracking-tight">
          Nacido en Mar del Plata en 2021, te ofrecemos bolsos y mochilas únicos
          en su especie. Hechos a mano con materiales de alta calidad. En cada
          creación se refleja la pasión por el diseño y la artesanía. ¡Animate a
          ser parte de la familia oSoPanda!
        </p>
        <a href="#">download app</a>
      </div>
      <div className="swiper my-10">
        <div className="swiper-wrapper">
          {data.map((product, index) => (
            <SwiperCard
              key={index}
              title={product.productName}
              paragraph={product.productSmallDescription}
              url="https://en.wikipedia.org/wiki/Jellyfish"
              backgroundImageUrl={product.productImage} // Nueva prop para la URL de la imagen de fondo
            />
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Hero;
