import React, { useState } from "react";
export default function Task3() {

  const [Search, setSearch] = useState("");
  
console.log(Search);

return(
    <div className="flex items-center justify-center h-screen flex-col bg-white text-black">
        <input type="Search"
        onChange={(e)=> setSearch(e.target.value)}
        className="border-2 border-black rounded"/>
        <p>search:{Search}</p>
    </div>
)

}