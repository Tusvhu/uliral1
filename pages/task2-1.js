import React, { useState } from "react";
export default function Home() {
  const [color, setColor] = useState("");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>өнгө солих:</p>
      <button className="bg-white border py-4 px-6" 
      onClick={() => {setColor("white");}}
      >default</button>
      <button className="bg-red-800 border py-4 px-6"
       onClick={() => {
        setColor("red");
       }} >
        улаан 
      </button>
      <button
        className="border bg-blue-800 py-4 px-6"
        onClick={() => {
          setColor("blue");
        }}
      >
        цэнхэр
      </button>
      <button
        className="border bg-green-800 py-4 px-6"
        onClick={() => {
          setColor("green");
        }}
      >
        ногоон
      </button>
    </div>
  );
}