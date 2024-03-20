import React from "react";
import ProductCard from "../components/ProductCard";
import { client, urlFor } from "../lib/sanity";
import { simpleProductCard } from "../lib/interface";
import StitchedTitle from "../components/StitchedTitle";

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
    <div className="mt-5">
      <StitchedTitle title="Esto es todo lo que amamos hacer ❤️"/>

      <div className="mt-5 grid grid-cols-3 gap-8 max-md:grid-cols-1">
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
