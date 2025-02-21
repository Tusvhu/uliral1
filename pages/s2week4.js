import { useEffect, useState } from "react";
export default function WEEK4(){
    const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const touristAttractions = await fetch(
                    "https://mongol-api-rest.vercel.app/touristAttractions"
                );

                const clothes = await fetch(
                    'https://mongol-api-rest.vercel.app/clothes'
                );

                const instruments = await fetch (
                    'https://mongol-api-rest.vercel.app/instruments'
                );

                const tools= await fetch (
                    'https://mongol-api-rest.vercel.app/historicalTools'
                );

                const ethnic = await fetch (
                    'https://mongol-api-rest.vercel.app/ethnicGroups'
                );

                const provinces = await fetch (
                    'https://mongol-api-rest.vercel.app/provinces'
                );

                const figures = await fetch (
                    'https://mongol-api-rest.vercel.app/historicalFigures'
                )
                const result = await touristAttractions.json();
                const result1 = await clothes.json();
                const result2 = await instruments.json();
                const result3 = await tools.json();
                const result4 = await ethnic.json();
                const result5 = await provinces.json();
                const result6 = await figures.json();   


                setData([...result.touristAttractions,...result1.clothes,...result2.instruments,...result3.historicalTools,...result4.ethnicGroups,...result5.provinces,...result6.historicalFigures]);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(data);
    return(
        
        <div className="grid grid-cols-4 gap-4 bg-white max-h-full w-full pl-14">
            {data.map((item) => (
                <div className="text-black border border-black shadow-lg rounded-md w-[400px]  ">
                  <img
              src={item.images} 
              alt={item.name}
              className="w-full h-56 object-cover border rounded-lg mb-4     "
            />
                    <p  className="text-xl font-bold text-center">{item?.name}</p> 
                   <p className="text-center">{item?.description}</p>  
                  <p className="opacity-75 text-center">{item?.address?.country}</p>                      
                </div>
            ))}
        </div>
    )
}