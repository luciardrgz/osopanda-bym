import { product } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "product" && productSlug.current == '${slug}' ] {
    "productSlug": slug.current,
    productName, 
    productLongDescription,
      productImage
  } [0]`;

  const data = await client.fetch(query);
  return data;
}

async function Product({ params }: { params: { slug: string } }) {
  const data: product = await getData(params.slug);
  return (
    <div className="mt-8 ">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Greg Peters - blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">
          {data.productName}
        </span>
      </h1>
      <Image
        src={urlFor(data.productImage).url()}
        width={600}
        height={150}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert ">
        <PortableText value={data.productLongDescription} />
      </div>
    </div>
  );
}

export default Product;
