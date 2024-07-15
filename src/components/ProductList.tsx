import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../lib/WixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./pagination";
const ProductList = async ({
  categoryID,
  limit,
  searchParams,
}: {
  categoryID: string;
  limit?: number; // optional
  searchParams?: any;
}) => {
  const PRODUCT_PER_PAGE = 8;
  const wixClient = await wixClientServer();
  const ProductQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryID)
    .hasSome("productType", [searchParams?.type || "physical", "degital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

   if(searchParams?.sort){
    const [sortType, sortBy] = searchParams?.sort.split(" ")
 if(sortBy === "asc"){
ProductQuery.ascending(sortBy)
 }
  if (sortBy === "dsc") {
    ProductQuery.descending(sortBy);
  }
   }


    const res= await ProductQuery.find();
  return (
    <div className="flex gap-x-8 gap-y-16 flex-wrap  justify-between ">
      {res.items.map((product: products.Product) => {
        return (
          <Link
            key={product._id}
            href={"/" + product.slug}
            className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <div className="relative  w-full h-80">
              <Image
                alt="product"
                fill
                sizes="25vw"
                src={
                  (product.media?.mainMedia?.image?.url as string) ||
                  "/product.png"
                }
                className="absolute object-cover rounded-md z-10 hover:opacity-0   transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                  alt="product"
                  fill
                  sizes="25vw"
                  className="a object-cover rounded-md "
                  src={
                    (product.media?.items[1]?.image?.url as string) ||
                    "/product.png"
                  }
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className=" font-medium">{product.name}</span>
              <span className="font-semibold ">
                {product.price?.currency} {product.price?.price}{" "}
              </span>
            </div>
            <div className="text-gray-500 text-sm ">
              {product.additionalInfoSections && (
                <div
                  className="text-sm text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      product.additionalInfoSections.find(
                        (section: any) => section.title === "shortDesc"
                      )?.description || ""
                    ),
                  }}
                ></div>
              )}
            </div>
            <button className="rounded-2xl ring-1 ring-lama w-max text-lama px-4 py-2 text-xs hover:bg-lama hover:text-white">
              Add to cart
            </button>
          </Link>
        );
      })}
      <Pagination currentPage={res.currentPage || 0 }  hasPrev={res.hasPrev()} hasNext= {res.hasNext()}/>
    </div>
  );
};

export default ProductList;
