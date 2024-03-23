import ProductDetail from "@/app/components/ProductDetail";
import { simpleProductCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "product" && productSlug.current == '${slug}' ] {
    "productSlug": slug.current,
    productName, 
    "productCategory": productCategory->categoryName,
    productLongDescription,
      productImage,
      productPrice,
      "productFabricPrints": productFabricPrints[]->{
        fabricPrintName,
        fabricPrintSlug,
        "fabricPrintImg": fabricPrintImg.asset->url
      }
  } [0]`;

  const data = await client.fetch(query);
  return data;
}

async function Product({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: simpleProductCard = await getData(slug);

  return <ProductDetail data={data} />;
}

export default Product;
