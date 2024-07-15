"use client"
import Image from "next/image";
import Link from "next/link";
import { useState ,useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];



function Slider() {
    const [Curent,SetCurent] = useState(0)
    // useEffect(() => {
    //   const interval = setInterval(() => {
    // SetCurent((prv)=> (prv === slides.length-1 ? 0 :prv+1))
    //   }, 3000);
    //   return ()=>clearInterval(interval)
    // },[]);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
      style={{transform:`translateX(-${Curent* 100}vw)`}}>
        {slides.map((slide) => {
          return (
            <div
              className={`${slide.bg} w-screen gap-16 flex h-full flex-col xl:flex-row`}
              key={slide.id}
            >
              {/* Text Container */}
              <div className="h-1/2 xl:h-full xl:w-1/2 flex items-center flex-col gap-8 justify-center 2xl:gap-12 text-center">
                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                  {/* {slide.description} */}
                </h2>
                <h1 className="text-2xl  lg:text-6xl  2xl:text-8xl font-semibold">
                  {/* {slide.title} */}Spring Sale <br /> Collections
                </h1>
                <Link href={slide.url}>
                  <button className="rounded-md bg-black text-white py-3 px-4">
                    Shop Now
                  </button>
                </Link>
              </div>
              {/* Image Container  */}
              <div className="h-1/2 xl:w-1/2 xl:h-full  relative">
                <Image
                  src={slide.img}
                  alt="desc"
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute m-auto flex left-1/2 bottom-8 gap-4 ">
      {slides.map((slide, index) => (
        <div
          className={`${
           Curent === index ? "scale-150 " : ""
          } w-3 h-3 ring-1 ring-gray-600 cursor-pointer  rounded-full items-center justify-center flex  xl:flex-row`}
          key={slide.id}
          onClick={()=>{SetCurent(index)}}
        >
          {Curent === index &&  (
            <div className="w-[6px] bg-gray-600 rounded-full h-[6px]"></div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Slider;
