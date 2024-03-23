import React from "react";
import { simpleProductCard } from "../lib/interface";
import LastProductCard from "../components/LastProductCard";
import StitchedTitle from "../components/StitchedTitle";

interface Props {
  data: simpleProductCard[];
}

const LastProducts: React.FC<Props> = ({ data }) => {
  return (
    <>
      <StitchedTitle title="¡Lo último!" />
      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-2">
        <LastProductCard data={data} />
      </div>
    </>
  );
};

export default LastProducts;
