import React from "react";
import Feature from "../components/Feature";

const Features = () => {
  return (
    <div className="mx-auto w-full">
      <div className="bg-white rounded-[10px] px-[15px] relative w-[100%] z-10 flex text-center max-sm:flex-col">
        <Feature
          title="Creamos tu accesorio soñado"
          description="Elegí la tela, el diseño y el tamaño que más te guste. Nosotros nos encargamos del resto! 🎨"
          image="https://24.media.tumblr.com/8fdf4149780fd763305cf17d898f58bc/tumblr_mzucit0SKv1r1blm0o1_400.gif"
          isLastFeature={false}
        />
        <Feature
          title="Hacemos envíos a todo el país"
          description="oSoPanda llega a todos lados! Desde Jujuy hasta Tierra del Fuego y desde Buenos Aires hasta Mendoza. 🧳"
          image="https://lh3.googleusercontent.com/proxy/4LoVbNpQB3cGWAeCcTKblhfgFwby_YQHpjdOyMZoRLB3Z_Is_4fc8ISUK5rmW_9PSh09StW9TOfIS4PPmPI3oxKtJ68ad5tTXLP5esv6FgIzbbjQwV4AQ_zPF-ipTE5bj7M"
          isLastFeature={false}
        />
        <Feature
          title="Aceptamos varios medios de pago"
          description="Podés pagar con cualquier billetera virtual, transferencia bancaria o efectivo. Elegí el que más te convenga 💸"
          image="https://i.pinimg.com/originals/95/bd/67/95bd67c57fb231e049018584b5a57a9a.gif"
          isLastFeature={true}
        />
      </div>
    </div>
  );
};

export default Features;
