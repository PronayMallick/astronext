'use client'
import { useState, useEffect } from 'react';

const TarotOne =  () => {
    const [data, setData] = useState([]);

    const fdata = () => {
        console.log('fdata function');
        const getData = async () => {
            const res = await fetch("https://horoscope-astrology.p.rapidapi.com/tarotcard", {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                    'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
                },
            })    
            // if(!res.ok) {
            //     throw new Error("Something went wrong")
            // }

            const response = await res.json();
            const response2 = response.res[0];
            console.log(response2);
            // console.log(response);
            setData(response2);  
        }
        getData();
    }
    
    useEffect(() => {
        // fdata();
       }, []);
    

    
    console.log("horoscopeData 3");
    console.log(data)
   
    // const daata = data
    return (
        <div className="flex border rounded-md px-4 flex-col w-full ">
            <button className='rounded-md bg-slate-300 p-1 w-40' onClick={fdata}>Get 1 Tarot card</button>
         
                <div className='h-60 py-4'>
                    {data.name && <div id="index" className="font-bold mt-1 text-red-600">Name of your Card: <span className="text-sm text-slate-500 font-bold">{data.name}</span></div>}
                    {data.desc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.desc}</span></div>}
                    {data.rdesc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.rdesc}</span></div>}
                    {/* <div id="index" className="text-sm text-slate-500">{data.sequence}</div> */}

                    
                </div>
        </div>
    )
}

export default TarotOne;