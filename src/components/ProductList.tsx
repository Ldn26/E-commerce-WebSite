import Image from "next/image"
import Link from "next/link"

function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 flex-wrap  justify-between ">
      <Link
        href="/test"
        className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative  w-full h-80">
          <Image
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0   transition-opacity easy duration-500"
            src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Image
            alt="product" 
            fill
            sizes="25vw"
            // className="a object-cover rounded-md "
            src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
        </div>
        <div className="flex justify-between">
          <span className=" font-medium">Product name </span>
          <span className="font-semibold ">$49 </span>
        </div>
        <div className="text-gray-500 text-sm ">My description</div>
        <button className="rounded-2xl ring-1 ring-lama w-max text-lama px-4 py-2 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative  w-full h-80">
          <Image
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0   transition-opacity easy duration-500"
            src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Image
            alt="product"
            fill
            sizes="25vw"
            // className="a object-cover rounded-md "
            src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
        </div>
        <div className="flex justify-between">
          <span className=" font-medium">Product name </span>
          <span className="font-semibold ">$49 </span>
        </div>
        <div className="text-gray-500 text-sm ">My description</div>
        <button className="rounded-2xl ring-1 ring-lama w-max text-lama px-4 py-2 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative  w-full h-80">
          <Image
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0   transition-opacity easy duration-500"
            src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Image
            alt="product"
            fill
            sizes="25vw"
            // className="a object-cover rounded-md "
            src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
        </div>
        <div className="flex justify-between">
          <span className=" font-medium">Product name </span>
          <span className="font-semibold ">$49 </span>
        </div>
        <div className="text-gray-500 text-sm ">My description</div>
        <button className="rounded-2xl ring-1 ring-lama w-max text-lama px-4 py-2 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full  flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative  w-full h-80">
          <Image
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0   transition-opacity easy duration-500"
            src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Image
            alt="product"
            fill
            sizes="25vw"
            src="https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

            // className="a object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className=" font-medium">Product name </span>
          <span className="font-semibold ">$49 </span>
        </div>
        <div className="text-gray-500 text-sm ">My description</div>
        <button className="rounded-2xl ring-1 ring-lama w-max text-lama px-4 py-2 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
    </div>
  );
}

export default ProductList