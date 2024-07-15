"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";
import { media as WixMidea } from "@wix/sdk";
function CartModel() {
  // toperory
  //  let cartitems = true

  const wixClient = useWixClient();
  const { cart, removeItem, getcart ,isLoading} = useCartStore();
  useEffect(() => {
    getcart(wixClient);
  }, [wixClient]);
     return (
       <div className="w-max absolute p-4 rounded-md shadow-xl  bg-white  top-12 right-0 flex flex-col gap-6 z-20">
         {isLoading ? (
           "loading"
         ) : !cart.lineItems ? (
           <div>Cart is Empty </div>
         ) : (
           <>
             <h2 className="text-xl">Shopping Cart</h2>
             {/* // List  */}
             <div className="flex gap-8 flex-col ">
               {cart?.lineItems.map((el) => {
                 return (
                   <div className="flex gap-4">
                     {el.image && (
                       <Image
                         src={WixMidea.getScaledToFillImageUrl(
                           el.image,
                           72,
                           96,
                           {}
                         )}
                         alt=""
                         className="object-cover  rounded-md"
                         width={72}
                         height={96}
                       />
                     )}
                     <div className="flex flex-col  justify-between w-full">
                       {/* top */}
                       <div className="">
                         {/* Titel */}
                         <div className="flex items-center  justify-between gap-8">
                           <h3 className="font-semibold">
                             {el.productName?.original}{" "}
                           </h3>
                           <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                             {el.quantity && el.quantity > 1 && (
                               <div className="text-xs text-green-500">
                                 {el.quantity} x{" "}
                               </div>
                             )}
                             ${el.price?.amount}
                           </div>
                         </div>
                         {/* Desc */}
                         <div className="text-sm  text-gray-500">
                           {el.availability?.status}{" "}
                         </div>
                       </div>
                       {/* buttom */}
                       <div className="flex justify-between text-sm ">
                         <span className="text-gray-500 ">
                           Qty : {el.quantity}{" "}
                         </span>
                         <span
                           className="text-blue-500 "
                           style={{
                             cursor: isLoading ? "not-allowed" : "pointer",
                           }}
                           onClick={() => removeItem(wixClient, el._id!)}
                         >
                           Remove
                         </span>
                       </div>
                     </div>
                   </div>
                 );
               })}

               {/* Item  */}
             </div>
             {/* Buttom  */}
             <div className="">
               <div className="flex justify-between  font-semibold items-center ">
                 <span className="">Subotal</span>
{/* total */}
                 {/* <span className="">${cart.subtotal.amount}</span> */}
               </div>
               <p className="text-gray-500 text-sm mt-2 mb-4">
                 Shipping and taxes calculated at checkout
               </p>
               <div className="flex justify-between text-sm">
                 <button className="rounded-md px-4 py-3 ring-1  ring-gray-300">
                   View Cart{" "}
                 </button>
                 <button
                   className="rounded-md px-4 py-3 bg-black text-white disbled:cusror-not-allowed disabled:opacity-75"
                   disabled={isLoading}
                 >
                   Checkout{" "}
                 </button>
               </div>
             </div>
           </>
         )}
       </div>
     );
}

export default CartModel;
