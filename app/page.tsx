import { simpleProductCard } from "./lib/interface";
import { client } from "./lib/sanity";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import LastProducts from "./sections/LastProducts";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    productName,
    productPrice,
    productSmallDescription,
    "productSlug": productSlug.current,
    productImage,
    "productFabricPrints": productFabricPrints[]->{
      fabricPrintName,
      fabricPrintSlug,
      "fabricPrintImg": fabricPrintImg.asset->url
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleProductCard[] = await getData();

  return (
    <>
      <Hero data={data} />
      <Features />
      <LastProducts data={data} />
    </>
  );
}
