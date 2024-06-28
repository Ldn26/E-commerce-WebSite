import Image from "next/image";
import Filter from "../../components/Filter"
import ProductList from "@/components/ProductList";
import { wixClientServer } from "../../lib/WixClientServer";
import { Suspense } from "react";
async function ListPage({searchParams}:{searchParams:any}) {
  const SearchedCat = searchParams.cat || "all-products"
  const wixClient = await wixClientServer();
  const categoriesInfo = await wixClient.collections.getCollectionBySlug(SearchedCat);
 
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64 relative ">
      {/* Campaign  */}
      <div className="bg-pink-50  justify-between hidden sm:flex  px-4 h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-4xl font-semibold  leading-[48px] text-gray-700">
            Grap Up to 50 % off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl text-white bg-lama py-3 px-5 text-sm">
            Buy Now{" "}
          </button>
        </div>
        <div className="relative w-1/3">
          <Image fill src="/woman.png" alt="" className="object-contain " />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products  */}
      <h1 className="text-lg  mt-12  font-semibold">{categoriesInfo.collection?.name} For You ! </h1>
      <Suspense fallback={"loading"}>
        <ProductList
          categoryID={
            (categoriesInfo.collection?._id as string) ||
            "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

export default ListPage