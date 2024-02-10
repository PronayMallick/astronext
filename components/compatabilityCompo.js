'use client'
import { useState, useEffect } from 'react';

export default function CompatabilityCompo() {
  const [data, setData] = useState([]);
 
  const optionsA = [
    {value: false , text: 'Select any'},
    {value: 'Aries' , text: 'Aries'},
    {value: 'Taurus' , text: 'Taurus'},
    {value: 'Gemini' , text: 'Gemini'},
    {value: 'Cancer' , text: 'Cancer'},
    {value: 'Leo' , text: 'Leo'},
    {value: 'Virgo' , text: 'Virgo'},
    {value: 'Libra' , text: 'Libra'},
    {value: 'Scorpio' , text: 'Scorpio'},
    {value: 'Sagittarius' , text: 'Sagittarius'},
    {value: 'Capricorn' , text: 'Capricorn'},
    {value: 'Aquarius' , text: 'Aquarius'},
    {value: 'Pisces' , text: 'Pisces'},
    
  ];

  const optionsB = [
    {value: false , text: 'Select any'},
    {value: 'Aries' , text: 'Aries'},
    {value: 'Taurus' , text: 'Taurus'},
    {value: 'Gemini' , text: 'Gemini'},
    {value: 'Cancer' , text: 'Cancer'},
    {value: 'Leo' , text: 'Leo'},
    {value: 'Virgo' , text: 'Virgo'},
    {value: 'Libra' , text: 'Libra'},
    {value: 'Scorpio' , text: 'Scorpio'},
    {value: 'Sagittarius' , text: 'Sagittarius'},
    {value: 'Capricorn' , text: 'Capricorn'},
    {value: 'Aquarius' , text: 'Aquarius'},
    {value: 'Pisces' , text: 'Pisces'},
    
  ];

  const [signOne, setSignOne] = useState(optionsA[0].value);
  const [signTwo, setSignTwo] = useState(optionsB[0].value);



  const handleChangeA = event => {   
    setSignOne(event.target.value);
  };
  const handleChangeB = event => {   
    setSignTwo(event.target.value);
  };

  function fdata() {

    if(signOne === false && signTwo === false) {
    return
    }
     else if (signOne === false) {
      return
     }
     else if(signTwo === false) {
      return
     } else
    {
    
    async function fetchData() {
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${signOne}&sign2=${signTwo}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })
      const datat = await response.json();
       if(!response.ok) {
        throw new Error("Something went wrong")
       }
      console.log(datat);
      setData(datat);
    }
    
    fetchData();

  }
}
  

  useEffect(() => {

   fdata();

  }, []);

  return (
    <div className="flex w-full">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5">
               <div id='outputDiv'>
                    <div className="text-xl font-bold">Compatibility</div>
          
                    {data.map( ( dat) => {
                       
                        return (
                            <div key={dat.header}>
                                <div>
                                    <div className="font-bold text-red-600 mt-2">{dat.header}</div>
                                    <div className="text-sm text-slate-500">{dat.text}</div>
                                </div>
                            </div>
                        )
                        
                    })}
               </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-200 rounded-r-md">
                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold">Your sign</div>
                    
                    <select className="text-sm border rounded-md w-20 mt-1 p-1" value={signOne} onChange={handleChangeA}  >
                      {optionsA.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>

                    <div className="text-xs font-bold mt-2">Partner's sign</div>

                    <select className="text-sm border rounded-md w-20 my-1 p-1" value={signTwo} onChange={handleChangeB} >
                      {optionsB.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>

                    <button className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-4 text-white text-sm p-1" onClick={fdata}>Submit</button>
                   
                </div>
            </div>
            
        </div>
  );
}