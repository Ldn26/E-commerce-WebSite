// // "use client"
// import CategoryList from "@/components/CategoryList";
// import ProductList from "../components/ProductList";
// import Slider from "../components/Slider";
// import { wixClientServer } from "../lib/WixClientServer";
// import { Suspense, useEffect } from "react";
// import { useWixClient } from "../../src/hooks/useWixClient";
// const HomePage = async () => {
//   return (
//     <div className="">
//       <Slider />
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64  ">
//         <h1 className="text-2xl mb-12">Featured Product </h1>
//         <Suspense fallback={"Loading"}>
//           <ProductList
//             categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID as string}
//             limit={4}
//           />
//         </Suspense>
//       </div>
//       <div className="mt-24  ">
//         <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64  mb-12">
//           Categories{" "}
//         </h1>
//         <Suspense fallback= {'loading'}>
//         <CategoryList />
//         </Suspense>
//       </div>
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64 ">
//         <h1 className="text-2xl">New Product </h1>
//         <ProductList
//           categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID as string}
//           limit={4}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// app/page.tsx
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

interface HomePageProps {
  searchParams?: { [key: string]: string | undefined };
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  return (
    <div>
      <Slider />
      
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Featured Product</h1>
        <ProductList
          categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID as string}
          limit={4}
          searchParams={searchParams} // pass searchParams here
        />
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Product</h1>
        <ProductList
          categoryID={process.env.FEATURED_PRODUCTS_CATEGORY_ID as string}
          limit={4}
          searchParams={searchParams} // pass searchParams here
        />
      </div>
    </div>
  );
};

export default HomePage;
