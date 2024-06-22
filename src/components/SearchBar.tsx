"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
function SearchBar() {

  const router = useRouter()
  const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{ // the signiture
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
   const name = formData.get("name") as string
   if(name){
    router.push(`/list?name=${name}`);
   }
 
    }
  return (
 
      <form
        onSubmit={handleSearch}
        className="flex justify-between rounded-md items-center p-2 flex-1 bg-gray-100"
      >
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
          <Image src={"/search.png"} width={14} height={14} alt="search" />

      </form>

  ); 
}

export default SearchBar;
