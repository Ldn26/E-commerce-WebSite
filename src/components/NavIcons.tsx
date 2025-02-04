"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {  useRouter } from 'next/navigation'
import { useState } from 'react'
import CartModel from './CartModel'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useWixClient } from '@/hooks/useWixClient'
import { useCartStore } from '@/hooks/useCartStore'
function NavIcons() {



   const wixClient = useWixClient();
   const getisLogin = async()=>{
 const IsLogin = await wixClient.auth.loggedIn()
 return IsLogin
   }


     
  const { cart, counter,getcart } = useCartStore();
  useEffect(() => {
    getcart(wixClient);
  }, [wixClient]);
   const IsLogin = getisLogin()
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [isProfileOpen,SetIsProfileOpen]= useState(false)
    const [isCartOpen, SetIsCartOpen] = useState(false);
  const handleProfile = ()=>{
if(!IsLogin){
  router.push('/login')
}else{

  SetIsProfileOpen((prv)=> !prv)
} 
  } 

const handelLogout = async()=>{
  setIsloading(true)
 Cookies.remove("refreshToken")
  SetIsProfileOpen(false)
  setIsloading(false)
  router.push('/login')
  } 

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        className="cursor-pointer"
        height={22}
        width={22}
        alt="profile"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute z-10 p-4 rounded-md top-12 bg-white shadow-md left-0 text-sm">
          <Link href={""}>Profile</Link>
          <div className="mt-2  cursor-pointer" onClick={handelLogout}>
            {isLoading ? "Loging out" : "Log out"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        className="cursor-pointer"
        alt="notification"
        height={22}
        width={22}
      />
      <div
        className="relative  cursor-pointer"
        onClick={() => SetIsCartOpen((prv) => !prv)}
      >
        <Image
          src="/cart.png"
          alt="cart"
          className="cursor-pointer"
          height={22}
          width={22}
        />
        {counter !== 0 && (
          <div className="absolute -top-4 w-6 h-6  bg-lama rounded-full text-white items-center flex  justify-center">
        {counter}
          </div>
        )}

        {isCartOpen && <CartModel />}
      </div>
    </div>
  );
}

export default NavIcons