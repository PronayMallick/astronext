'use client'
import { useState, useEffect } from 'react';

const NumerologyComp = async () => {

    const [data, setData] = useState([]);
    const [num, setNum] = useState([]);

    function fdata() {
        async function fetchData() {
            const lat = 6;
            const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${num}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })
          const data = await response.json();
          setData(data);
        }
        
        fetchData();
    }

    useEffect(() => {
        fdata();

       }, []);


    return (
        <div className="flex w-full">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5">
               <div>
                    <div className="text-xl font-bold">Numerology</div>

                    <div className="font-bold text-red-600 mt-2">Your Number</div>
                    <div className="text-sm text-slate-500">{data.number}</div>

                    <div className="font-bold text-red-600 mt-2">About</div>
                    <div className="text-sm text-slate-500">{data.desc}</div>
               </div>
            </div>
            
            <div className="inputData w-2/6 md:w-3/12 bg-slate-200 rounded-r-md">
                <div className="flex flex-col px-4 pt-12">
                    <div className="text-xs font-bold">Enter a number</div>
                    <div className="text-xs">from 1 to 11</div>
                    <input type="number" className=" border rounded-md w-16 mt-5 " value={num} onChange={(e) => setNum(e.target.value)}/>
                    <button className="w-16 rounded-md bg-slate-400 mt-2 text-white text-sm p-1" onClick={fdata}>Submit</button>
                   
                </div>
            </div>
            
        </div>

        

        
    )
}

export default NumerologyComp;