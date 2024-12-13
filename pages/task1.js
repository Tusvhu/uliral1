import Image from "next/image";
import { useRouter } from "next/router";
export default function Home(){
    const router = useRouter();
    return(
        <div className="bg-pink-200 h-screen w-screen">
            <div className="bg-pink-300 h-[10%] w-screen flex justify-center items-center space-x-10">
            <p className=" absolute left-5 text-3xl h-16 w-32 rounded-lg hover:bg-gray-700 hover:text-white bg-gray-500 flex items-center justify-center  " onClick={() => router.back()}>Back</p>
            <h1 className=" text-5xl">Home</h1>
            <h1 className=" text-5xl font-bold">Introduction</h1>
            <h1 className=" text-5xl">Contact</h1>
            
            </div>
            <div className="flex ml-[30%] items-center jusify-center  h-[90%]  " >
            <div>
             <Image className="border-4 border-pink-300" src="/tuvshu.jpg" width={200} height={200}/>
            </div>
            <div className="ml-10 text-5xl items-start h-[10%] text-pink-500">
                <p>Name:Tuvshin</p>
                <p>Age:16</p>
                <p>Hobby:Basketball</p>
                <p>Fav subject:Frontend</p>
                
            </div>
            </div>
            <div className="flex justify-center h-screen w-screen bg-pink-500 ">
            <div className="flex items-center justify-center h-auto w-3/4    text-3xl">
             <p>
               "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
             </p>
            </div>
            </div>
        
        </div>
    );
}