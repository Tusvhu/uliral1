import { useEffect, useState } from "react";
export default function lab2() {
    const[color, setColor] = useState("");
    const [data, setdata] = useState("");
    useEffect(() =>{
        const fetchData = async () =>{
            return await fetch('https://mongol-api-rest.vercel.app/clothes')
            .then(res => res.json())
            .then(json => console.log(json));
        };
        fetchData();
        console.log(fetchData);   
    }, []);
}   