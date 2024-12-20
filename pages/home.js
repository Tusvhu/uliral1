    import { useRouter } from "next/router";
export default function Home(){
    const router = useRouter();
    return(
        <div className="w-full h-screen bg-slate-950 ">
             <p className="font-bold  text-center text-xl text-white py-8" >Home</p>
             <div className="flex justify-center">
             <div className="grid grid-cols-6 gap-16 flex">
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("task1") }>WEEK1</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("task22") }>WEEK2</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("task3") }>WEEK3</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("task4") }>WEEK4</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("task5") }>WEEK5</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-gray-500 text-white flex rounded-lg hover:bg-gray-700" onClick={() =>router.push("biydaalt") }>Assignment</p>     
             </div>
             </div>
             
            
        </div>
    );
}