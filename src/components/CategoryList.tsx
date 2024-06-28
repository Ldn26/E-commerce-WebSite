import Image from 'next/image'
import Link from 'next/link'
import { wixClientServer } from "../lib/WixClientServer";
import React from 'react'
async function   CategoryList() {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();
 
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide ">
      <div className="flex gap-4  md:gap-8 ">
        {categories.items.map((cat)=>{
          return (
            <Link
              key={cat._id}
              href={"/list?cat=" + cat.slug}
              className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
            >
              <div className="relative bg-slate-100  w-full h-96">
                <Image
                  src={
                    (cat.media?.mainMedia?.image?.url as string) ||
                    "/cat.png"
                  }
                  alt="category"
                  sizes="20vw"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-meduim tracking-wide text-lg  mt-8">
             {cat.name}
              </h1>
            </Link>
          );
        })}
    
      </div>
    </div>
  );
}

export default CategoryList