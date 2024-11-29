import React, { useState } from "react";
export default function Task4() {
    const [grid, setGrid]=useState(false);
     const data =[
        {
            id: 1,
            title: "Test 1",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 2,
            title: "Test 2",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            title: "Test 3",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            title: "Test 4",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }
     ]
     return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold ">Нийтлэлүүд</h1>
                <button onClick={() => setGrid (!grid)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    {grid ? "Жагсаалт харах руу шилжих" : "Grid view рүү шилжих"}
                </button>
            </div>
            <div className={(grid == false ? "w-full text-black" :" w-full text-black grid grid-cols-2 gap-x-8  ")}>
            {data.map((data, index) => (
                <div key={index}>
                <div className="border border-black rounded-lg p-4 mb-4">
                    <p className="text-xl font-bold">{data.title}</p>
                    <p className="mt-4">{data.descr}</p>
                </div>
                </div>
            ))}
            </div>
            
        </div>
     )
}