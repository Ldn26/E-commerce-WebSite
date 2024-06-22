import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
function Navbar() {
  return (
    <div className="h-20  px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64 relative ">
      {/* mobile screen */}
      <div className="flex h-full justify-between md:hidden items-center">
        <Link href={"/"}>
          <div className="font-semibold tracking-wide text-2xl"> LAMA </div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screens */}
      <div className="hidden  md:flex  items-center justify-between gap-8  h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href={"/"} className="flex items-center">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="font-semibold mx-4 tracking-wide text-2xl">
              {" "}
              LAMA{" "}
            </div>
          </Link>
          <div className="xl:flex gap-4 items-center hidden">
            <Link href={"/"}>Home </Link>
            <Link href={"/"}>About </Link>
            <Link href={"/"}>Contact </Link>
            <Link href={"/"}>Shop </Link>
            <Link href={"/"}>Deals</Link>
      
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center  gap-8 justify-between ">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar