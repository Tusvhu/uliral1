import { useEffect, useState } from "react";
export default function lab2() {
    const[color, setColor] = useState("");
    return(
        <div className={`bg-${color}-800 h-screen`}>
        <button className="bg-red-800 border p-4 m-4 h-[200px] w-[200px]" onClick={() => setColor("red")}>red</button>
        <button className="bg-blue-800 border p-4 m-4 h-[200px] w-[200px]" onClick={() => setColor("blue")}>blue</button>
        <button className="bg-green-800 border p-4 m-4 h-[200px] w-[200px]" onClick={() => setColor("green")}>green</button>
        <button className="bg-pink-800 border p-4 m-4 h-[200px] w-[200px]" onClick={() => setColor("")}>clear</button>
        </div>
    )
}   