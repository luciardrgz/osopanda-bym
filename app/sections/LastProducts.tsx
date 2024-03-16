import React from "react";
import { simpleProductCard } from "../lib/interface";
import LastProductCard from "../components/LastProductCard";

interface Props {
  data: simpleProductCard[];
}

const LastProducts: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-darkgreen rounded-md w-full">
        <h1 className="text-center  text-white text-3xl font-extrabold my-2">LO ÚLTIMO!</h1>
      </div>
      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-2">
        <LastProductCard data={data} />
      </div>
    </>
  );
};

export default LastProducts;
