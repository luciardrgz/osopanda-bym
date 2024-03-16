import React from "react";
import { simpleProductCard } from "../lib/interface";
import LastProductCard from "../components/LastProductCard";

interface Props {
  data: simpleProductCard[];
}

const LastProducts: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-[#8fffc7] rounded-md w-full p-1">
        <div className="border-dashed border-darkgreen border-2 box-content">
          <h1 className="text-center text-darkgreen text-3xl font-extrabold py-2">
            LO ÚLTIMO!
          </h1>
        </div>
      </div>
      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-2">
        <LastProductCard data={data} />
      </div>
    </>
  );
};

export default LastProducts;
