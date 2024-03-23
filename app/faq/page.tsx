import React from "react";
import FAQCard from "../components/FAQCard";
import StitchedTitle from "../components/StitchedTitle";

const Page = () => {
  return (
    <div className="mt-5">
      <StitchedTitle title="¡Sacate las dudas!" />
      <div className="mt-5 flex flex-col gap-4">
        <FAQCard
          question="¿Cuáles son sus días y horarios de atención?"
          answer="De Lunes a Viernes de 9 a 17 hs."
        />
        <FAQCard
          question="¿Cómo puedo abonar mi pedido?"
          answer="Podés abonarla con transferencia bancaria, a través de una CVU o en efectivo."
        />
        <FAQCard
          question="¿Hacen envíos a todo el país?"
          answer="Si, a través de Correo Argentino :)"
        />
        <FAQCard
          question="¿Tienen una tienda física donde pueda ver los productos en persona?"
          answer="Por el momento solo vendemos online, pero podemos coordinar un punto de encuentro para que puedas ver los productos."
        />
        <FAQCard
          question="¿Ofrecen opciones de personalización?"
          answer="Si, podemos personalizar los productos con la tela que más te guste, siempre y cuando sea posible realizar el producto con la tela que elijas."
        />
      </div>
      <div className="mt-5 flex flex-col">
        <StitchedTitle title="¿Tenés otra consulta?" />
        <a href="/contact">
          <img
            src="/click-contacto.png"
            alt="Contacto"
            className="w-[30rem] mx-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Page;
