

function Filter() {
  return (
    <div className="flex mt-12 justify-between">
      <div className="flex flex-wrap gap-6 ">
        <select
          name="type"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="degital">degital</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="min price "
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price "
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />

        <select
          name="size"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Size</option>
          <option value="">Size</option>
        </select>
        <select
          name="color"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Color</option>

          <option value="">Test </option>
        </select>
        <select
          name="Cathegory"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Cathegory</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>All Filters</option>
         
        </select>
      </div>
      <div className="">
        <select
          name="type"
          className="rounded-2xl 
          text-xs font-medium bg-[#EBEDED] py-2 px-4"
          id=""
        >
          <option>Sort by</option>
          <option value="">Price (Low to High)</option>
          <option value="">Price (High to Low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter