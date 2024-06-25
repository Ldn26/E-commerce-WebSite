"use client";
import React from "react";
function CustomizeProduct() {
  return (
    <div className="flex flex-col  gap-6 ">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="cursor-pointer bg-red-500 h-8  w-8 rounded-full ring-1 ring-gray-300 relative  ">
          <div className="absolute w-10 h-10 ring-2 ring-blue-500 top-1/2 left-1/2 rounded-full  transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="cursor-pointer bg-blue-500 h-8  w-8 rounded-full ring-1 ring-gray-300 relative  "></li>
        <li className="cursor-pointer bg-green-500 h-8  w-8 rounded-full ring-1 ring-gray-300 relative  ">
          <div className="absolute w-10 h-[2px] rotate-45 cursor-not-allowed   bg-red-400  top-1/2 left-1/2 rounded-full  transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 cursor-pointer text-sm">
          Small
        </li>
        <li className="ring-1 ring-lama bg-lama text-white rounded-md py-1 px-4 cursor-pointer text-sm">
         Medium
        </li>
        <li className="ring-1 ring-pink-200 bg-pink-200 text-white rounded-md py-1 px-4 cursor-not-allowed text-sm">
       Large
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProduct;
