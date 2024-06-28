"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
function Filter() {
  const pathname = usePathname(); /// to get the Path name
  const searchParam = useSearchParams();
  const { replace } = useRouter();

  const handelFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParam.toString());
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex mt-12 justify-between">
      <div className="flex flex-wrap gap-6 ">
        <select
          name="type"
          id=""
          onChange={handelFilterChange}
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="degital">degital</option>
        </select>

        <input
          onChange={handelFilterChange}
          type="text"
          name="min"
          placeholder="min price "
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          onChange={handelFilterChange}
          name="max"
          placeholder="max price "
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />

        <select
          name="cat"
          onChange={handelFilterChange}
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Cathegory</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          // name="sort"
          onChange={handelFilterChange}
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
          onChange={handelFilterChange}
        >
          <option>Sort by</option>
          <option value="asc price">Price (Low to High)</option>
          <option value="dsc price">Price (High to Low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="dsc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
