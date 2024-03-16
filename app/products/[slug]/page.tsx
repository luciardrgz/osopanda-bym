import ProductDetail from "@/app/components/ProductDetail";
import { product } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "product" && productSlug.current == '${slug}' ] {
    "productSlug": slug.current,
    productName, 
    productLongDescription,
      productImage,
      productPrice
  } [0]`;

  const data = await client.fetch(query);
  return data;
}

async function Product({ params }: { params: { slug: string } }) {
  const data: product = await getData(params.slug);
  return (
    <ProductDetail
      name={data.productName}
      price={data.productPrice}
      longDescription={data.productLongDescription}
      image={urlFor(data.productImage).url()}
    />
  );
}

export default Product;