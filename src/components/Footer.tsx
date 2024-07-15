import Image from "next/image";
import Link from "next/link"


function Footer() {
  return (
    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:px:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className="flex justify-between flex-col md:flex-row gap-24">
        {/* left */}
        <div className=" md:w-1/2 lg:w-1/4 w-full  flex flex-col gap-8 ">
          <Link href={"/"}></Link>
          <div className="font-semibold tracking-wide text-2xl"> Shopy </div>
          <p>Pole Urbain Medea ,Algeria</p>

          <span className="font-semibold">yousseflaidani6@gmail.com</span>
          <span className="font-semibold">+213 541593067 </span>
        </div>
        {/* Center */}
        <div className=" hidden lg:flex justify-between  w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-meduim ">Company </h1>
            <div className="flex flex-col gap-6"></div>
            <Link href={"/"} className="">
              Abou us{" "}
            </Link>
            <Link href={"/"} className="">
              Careers
            </Link>
            <Link href={"/"} className="">
              Affliates
            </Link>
            <Link href={"/"} className="">
              Blog
            </Link>
            <Link href={"/"} className="">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-meduim ">Shop </h1>
            <div className="flex flex-col gap-6"></div>
            <Link href={"/"} className="">
              New Arrivals{" "}
            </Link>
            <Link href={"/"} className="">
              Accesoires
            </Link>
            <Link href={"/"} className="">
              Men
            </Link>
            <Link href={"/"} className="">
              Woman
            </Link>
            <Link href={"/"} className="">
              All Products
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-meduim ">Help </h1>
            <div className="flex flex-col gap-6"></div>
            <Link href={"/"} className="">
              Custumers Service
            </Link>
            <Link href={"/"} className="">
              My Accounts
            </Link>
            <Link href={"/"} className="">
              Find & Store
            </Link>
            <Link href={"/"} className="">
              Legal & Privercy
            </Link>
            <Link href={"/"} className="">
              Gift Card
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="md:w-1/2 lg:w-1/4 w-full  flex flex-col gap-8 ">
          <h1 className="text-lg font-medium ">Subscribe</h1>
          <p>
            {" "}
            Be the first to get the letest news about trends and mush more !!!{" "}
          </p>
          <div className="flex ">
            <input
              type="text"
              name=""
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">Join</button>
          </div>
          <span className="font-semibold ">Secure Payement</span>
          <div className="flex justify-between">
            <Image src={"/discover.png"} height={40} width={40} alt="" />
            <Image src={"/skrill.png"} height={40} width={40} alt="" />
            <Image src={"/paypal.png"} height={40} width={40} alt="" />
            <Image src={"/mastercard.png"} height={40} width={40} alt="" />
            <Image src={"/visa.png"} height={40} width={40} alt="" />
          </div>
        </div>
      </div>
      {/* Buttom */}
      <div className="flex flex-col md:flex-row  justify-between gap-8 items-center mt-16">
        <div className="text-center ">@ 2024 Lama-shop</div>
        <div className="gap-8 flex flex-col  md:flex-row">

        <div className="">
          <span className="text-gray-500  mr-4">Language</span>
          <span className="font-medium">United States | English</span>
        </div>
        <div className="">
          <span className="text-gray-500  mr-4">Currency </span>
          <span className="font-medium">$ USD</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer