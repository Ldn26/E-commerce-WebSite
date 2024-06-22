"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CartModel from './CartModel'
import Link from 'next/link'
function NavIcons() {
  const router = useRouter();
  const IsLogin = false
  const [isProfileOpen,SetIsProfileOpen]= useState(false)
    const [isCartOpen, SetIsCartOpen] = useState(false);
  const handleProfile = ()=>{

if(!IsLogin){
  router.push('/login')
}
   
  SetIsProfileOpen((prv)=> !prv)
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
        <div className="absolute z-10 p-4 rounded-md top-12 shadow-md left-0 text-sm">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Log out</div>
        </div>
      )}
      <Image
        src="/notification.png"
        className="cursor-pointer"
        alt="notification"
        height={22}
        width={22}
      />
      <div className='relative  cursor-pointer'>
        <Image
          src="/cart.png"
          alt="cart"
          className="cursor-pointer"
          height={22}
          width={22}
          onClick={() => SetIsCartOpen((prv) => !prv)}
        />
        <div className='absolute -top-4 w-6 h-6  bg-lama rounded-full text-white items-center flex  justify-center'>2</div>
        {isCartOpen && <CartModel />}
      </div>
    </div>
  );
}

export default NavIcons