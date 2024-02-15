'use client'
import { useState, useEffect } from 'react';

const TarotThree =  () => {
    const [data, setData] = useState([]);

    const fdata = () => {
        console.log('fdata function');
        const getData = async () => {
            const res = await fetch("https://horoscope-astrology.p.rapidapi.com/threetarotcards", {
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
            const response2 = response.res;
            // console.log(response.res);
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
            <button className='rounded-md bg-slate-300 p-1 w-40' onClick={fdata}>Get 3 Tarot card</button>
         
                <div className='min-h-60 py-4'>
                    {/* <div id="index" className="font-bold mt-1 text-red-600	">Name of your Card:</div>
                    <div id="index" className="text-sm text-slate-500 font-bold">{data.name}</div>
                    <div id="index" className="text-sm text-slate-500 pt-3">{data.desc}</div>
                    <div id="index" className="text-sm text-slate-500 pt-1">{data.rdesc}</div> */}

                    {/* <div id="index" className="text-sm text-slate-500">{data.sequence}</div> */}


                    {data.map( ( dat) => {
                        return (
                        <div className="" key={dat.name}>
                            <div id="index" className="font-bold mt-1 text-red-600" >{dat.name}</div>
                            <div id="index" className="text-sm text-slate-500">{dat.desc}</div>
                            <div id="index" className="text-sm text-slate-500">{dat.rdesc}</div>
                            {/* <div id="index" className="text-sm text-slate-500">{dat.sequence}</div> */}
                        </div>
                        )
                    })}
                   

                    
                </div>
        </div>
    )
}

export default TarotThree;