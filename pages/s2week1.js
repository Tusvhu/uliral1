import { useState } from "react";
export default function s2week1(){
const [click, setClick] = useState(0);
return(
    <div className="bg-gray-100 h-screen w-screen">
        <div className="w-full h-32 mt-[5%] bg-blue-800 font-bold text-white text-4xl  flex items-center justify-center">
            Nest High school
        </div>
        <div className="font-bold text-6xl text-center mt-10">
         Welcome to Nest 
        </div>
        <div className="text-center mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br></br> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </div>
        <div className="w-full h-32 flex space-x-4 justify-center items-center">
             <button onClick={() => setClick(click + 1)} className="w-32 h-12 bg-blue-800 flex justify-center items-center font-bold text-white rounded-lg">Click me</button> 
             <div>Clicked {click} times </div> 
        </div>
        <div className="h-60 grid grid-cols-3 gap-8 mx-96 bg-gray-100 text-center">
            <div className="bg-white rounded-lg shadow-xl font-bold text-xl pt-4 ">Why Choose us?
                <div className="text-sm font-serif pt-2 space-y-4">
                    <p>High Performance</p>
                    <p>Responsive Design</p>
                    <p>Easy to use</p>
                    <p>Scalable Solutions</p>
                    <p>24/7 Support</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl font-bold text-xl pt-4">Our Features
            <div className="text-sm font-serif pt-2 space-y-4">
                    <p>Fast and Lightweight</p>
                    <p>Mobile</p>
                    <p>High Performance</p>
                    <p>High Performance</p>
                    <p>High Performance</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl font-bold text-xl pt-4">Customer Reviews
            <div className="text-sm font-serif pt-2 space-y-4">
                    <p>High Performance</p>
                    <p>High Performance</p>
                    <p>High Performance</p>
                    <p>High Performance</p>
                    <p>High Performance</p>
                </div>
            </div>
        </div>
        <div className="w-full h-12 bg-black mt-10 flex items-center justify-center text-white text-sm" >2025 Our Company. Nest education High school </div>
    </div>
)
}