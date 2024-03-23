import ProductCard from "@/app/components/ProductCard";
import StitchedTitle from "@/app/components/StitchedTitle";
import { simpleProductCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(category: string) {
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const query = `*[_type == "product" && productCategory->categoryName == '${capitalizedCategory}' ] {
    "productSlug": productSlug.current,
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
  }`;

  const data = await client.fetch(query);
  return data;
}

async function Product({ params }: { params: { category: string } }) {
  const { category } = params;
  const data: simpleProductCard[] = await getData(category);

  return (
    <div className="mt-5">
      <StitchedTitle title={`Toooodos nuestros ${category}❤️`} />

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

export default Product;
