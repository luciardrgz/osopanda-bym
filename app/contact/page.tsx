import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <section className="bg-white rounded-xl mt-5 p-5">
      <div>
        <h3 className="text-xl">Contactanos!</h3>
        <span className="inline-block mr-[20px] w-[60px] h-[3px] bg-mediumgreen"></span>
        <h2 className="font-bold text-5xl my-4 max-md:text-4xl">
          oSoPanda quiere escucharte
        </h2>
        <p className="my-4 ">
          Si tenés alguna duda, sugerencia, o simplemente querés escribirnos, no
          dudes en hacerlo. Estamos acá para ayudarte :)
        </p>
      </div>

      <div className="flex justify-center items-center py-16">
        <ul className="flex max-md:flex-col gap-24 socials">
          <li>
            <a
              href="https://www.facebook.com/osopanda.bym"
              className="flex flex-col justify-center items-center bg-darkgreen text-white hover:bg-[#8fffc7] hover:text-darkgreen hover:font-bold"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-10" />
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/osopanda.bym/"
              className="flex flex-col justify-center items-center bg-darkgreen text-white hover:bg-[#8fffc7] hover:text-darkgreen hover:font-bold"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-10" />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=2235800068&text=Hola%21+Escribo+desde+la+web+de+oSoPanda"
              className="flex flex-col justify-center items-center bg-darkgreen text-white hover:bg-[#8fffc7] hover:text-darkgreen hover:font-bold"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-10" />
              <p>WhatsApp</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
