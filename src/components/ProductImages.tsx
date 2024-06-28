"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function ProductImages({items}:{items:any}) {
    const[index,Setindex] = useState(0)

  return (
    <div>
      <div className="h-[450px] relative">
        <div className="">
          <Image
           src={items[index].image?.url}
           alt=""
            fill
            className="object-cover rounded-md"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8 ">


{items.map((img:any,i:number)=>{
    return (
        <div className="w-1/4 gap-4 relative h-32 mt-8 cursor-pointer" key={img._id} onClick={()=>Setindex(i)} >  
          <Image
           src={img?.image?.url}
            alt=""
            fill
            className="object-cover rounded-md"
            sizes="30vw"
          /> 
        </div>
    )
})}

      </div>
    </div>
  );
}

export default ProductImages