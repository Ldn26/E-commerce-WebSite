"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Menu() {
  const [Open, setOpen] = useState(false);
  return (
    <div >
      <Image
        src="/menu.png"
        alt="menu"
        height={28}
        width={28}
        className="cursor-pointer "
        onClick={() =>
          setOpen(prv=>!prv)}
      />
      {Open && (
        <div className="absolute left-0 top-20 flex flex-col items-center justify-center gap-8 w-full h-[calc(100vh-80px)] text-white bg-black text-2xl ">
          <Link href={"/"}>Home </Link>
          <Link href={"/"}>About </Link>
          <Link href={"/"}>Contact </Link>
         <Link href={"/"}>Home </Link>
          <Link href={"/"}>Home </Link>
          <Link href={"/"}>Home </Link>
          <Link href={"/"}>Home </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
