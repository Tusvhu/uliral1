import React, { useState } from "react";
import { useRouter } from "next/router";
export default function Task3() {
  const router = useRouter();
  const [Search, setSearch] = useState("");
  
console.log(Search);

return(
    <div className="flex items-center justify-center h-screen flex-col bg-white text-black">
       <p className=" absolute left-5 text-3xl h-16 w-32 rounded-lg hover:bg-gray-700 hover:text-white bg-gray-500 flex items-center justify-center  " onClick={() => router.back()}>Back</p> 
        <input type="Search"
        onChange={(e)=> setSearch(e.target.value)}
        className="border-2 border-black rounded"/>
        <p>search:{Search}</p>
    </div>
)

}