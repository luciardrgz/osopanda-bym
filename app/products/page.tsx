import React from "react";
import ProductCard from "../components/ProductCard";
import { client, urlFor } from "../lib/sanity";
import { simpleProductCard } from "../lib/interface";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    productName,
      productPrice,
      productSmallDescription,
      "productSlug": productSlug.current,
      productImage
  }`;

  const data = await client.fetch(query);
  return data;
}

async function page() {
  const data: simpleProductCard[] = await getData();

  return (
    <div>

      <div className="bg-black rounded-md max-w-[90%] mx-auto my-4 p-[0.3rem]">
        <div className="border-dashed border-[#8fffc7] border-2 box-content">
          <h1 className="font-bold relative py-1 text-xl text-center text-white">
            Todo lo que amamos hacer 🤍
          </h1>{" "}
        </div>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            name={product.productName}
            image={urlFor(product.productImage).url()}
            price={product.productPrice}
            slug={product.productSlug}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
