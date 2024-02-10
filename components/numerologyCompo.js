'use client'
import { useState, useEffect } from 'react';

export default function NumerologyCompo() {
  const [data, setData] = useState([]);

  const options = [
    {value: 0 , text: 'Select any'},
    {value: 1 , text: 1},
    {value: 2 , text: 2},
    {value: 3 , text: 3},
    {value: 4 , text: 4},
    {value: 5 , text: 5},
    {value: 6 , text: 6},
    {value: 7 , text: 7},
    {value: 8 , text: 8},
    {value: 9 , text: 9},
    {value: 10 , text: 10},
    {value: 11 , text: 11},
    
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    
    setSelected(event.target.value);
  };

  function fdata() {
    async function fetchData() {
        if(selected=== 0) {
          document.getElementById("outputDiv").style.display = "none"; 
        } else {
          document.getElementById("outputDiv").style.display = "block";
        }
        
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${selected}`, {
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
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5" >
               <div id='outputDiv'>
                    <div className="text-xl font-bold">Numerology</div>

                    <div className="font-bold text-red-600 mt-2">Your Number</div>
                    <div className="text-sm text-slate-500">{data.number}</div>

                    <div className="font-bold text-red-600 mt-2">About</div>
                    <div className="text-sm text-slate-500">{data.desc}</div>
               </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-200 rounded-r-md">

                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold">Enter a number</div>
                    <div className="text-xs">from 1 to 11</div>
                    <select className="text-sm border rounded-md w-28 mt-2 p-1" value={selected} onChange={handleChange}>
                      {options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                    <button className="w-16 rounded-md bg-slate-400 mt-2 hover:bg-slate-500 text-white text-sm p-1" onClick={fdata}>Submit</button>

                   
                   
                </div>
            </div>
            
        </div>
  );
}