"use client";
import React, { useState } from "react";

function Add() {
// /temporary 
 let stoke = 4
    const [count,Setcount] = useState(1)
    const handelQuantity = (type: "i"|"d")=>{
     if(type === "d" && count >1 ){
        Setcount((prv)=>prv- 1)
     }  if (type === "i" && count < stoke ) {
       Setcount((prv) => prv +1);
     }
    }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium">Choose a Quantity</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 ">
          <div className="bg-gray-100 rounded-3xl py-2 px-4 flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => {
                handelQuantity("i");
              }}
            >
              {" "}
              +
            </button>
            {count}
            <button
              className="cursor-pointer text-xl"
              onClick={() => {
                handelQuantity("d");
              }}
            >
              {" "}
              -
            </button>
          </div>
          <div className="text-xs ">
            Only <span className="text-orange-400">4 items</span> left! <br />{" "}
            Don't miss it
          </div>
        </div>
        <button className="text-sm w-36 rounded-3xl ring-lama text-lama  disabled:bg-pink-200 disabled:cursor-not-allowed disabled:text-white disabled:ring-none bg-white hover:bg-lama hover:text-white  ring-1 py-2 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
