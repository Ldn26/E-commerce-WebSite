"use client"
import Image from "next/image";
function CartModel() { 
   let cartitems = true


  return (
    <div className="w-max absolute p-4 rounded-md shadow-xl  bg-white  top-12 right-0 flex flex-col gap-6 z-20">
      {!cartitems ? (
        <div>Cart is Empty </div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          {/* // List  */}
          <div className="flex gap-8 flex-col ">
            {/* Item  */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="object-cover  rounded-md"
                width={72}
                height={96}
              />
              <div className="flex flex-col  justify-between w-full">
                {/* top */}
                <div className="">
                  {/* Titel */}
                  <div className="flex items-center  justify-between gap-8">
                    <h3 className="font-semibold">Prduct Name </h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$43</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm  text-gray-500">availeble </div>
                </div>
                {/* buttom */}
                <div className="flex justify-between text-sm ">
                  <span className="text-gray-500 ">Qn : 2 </span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* item  */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="object-cover  rounded-md"
                width={72}
                height={96}
              />
              <div className="flex flex-col  justify-between w-full">
                {/* top */}
                <div className="">
                  {/* Titel */}
                  <div className="flex items-center  justify-between gap-8">
                    <h3 className="font-semibold">Prduct Name </h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$43</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm  text-gray-500">availeble </div>
                </div>
                {/* buttom */}
                <div className="flex justify-between text-sm ">
                  <span className="text-gray-500 ">Qn : 2 </span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Buttom  */}
          <div className="">
            <div className="flex justify-between  font-semibold items-center ">
              <span className="">Subotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1  ring-gray-300">
                View Cart{" "}
              </button>
              <button className="rounded-md px-4 py-3 bg-black text-white ">Check out </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModel