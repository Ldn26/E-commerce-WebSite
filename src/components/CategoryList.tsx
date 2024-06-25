import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide ">
      <div className="flex gap-4  md:gap-8 ">
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>

        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0  w-full  sm:w-1/2 lg-w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100  w-full h-96">
            <Image
              src="https://images.pexels.com/photos/20013177/pexels-photo-20013177/free-photo-of-two-people-in-boat-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="category"
              sizes="20vw"
              fill
              className="object-cover"
            /> 
          </div>
          <h1 className="font-light tracking-wide text-xl mt-8">
            Category name
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList