'use client'
import { useState, useEffect } from 'react';

export default function CompatabilityCompo() {
  const [data, setData] = useState([]);
 
  const optionsA = [
    {value: 'Not selected' , text: 'Select'},
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
    {value: 'Not selected' , text: 'Select'},
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

  const sOne = event => {   
    setSignOne(event);
    console.log(event);
  };
  // const handleChangeB = event => {   
  //   setSignTwo(event.target.value);
  // };

  async function fdata() {

    console.log('Ip 1 fdata')
    console.log(signOne)
    console.log('Ip 2 fdata')
    console.log(signTwo)
    
    
    // async function fetchData() {

      if( signOne === "Not selected" && <span className='text-red-400'>{signOne}</span> || signTwo === "Not selected") {
        // console.log('s1-f s2-f')
      
      return
      }
       else {
       
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${signOne}&sign2=${signTwo}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })

  
      const datat = await response.json();
      console.log(datat);
     
       if(!response.error) {
        // throw new Error("Something went wrong")
        console.log(datat.error);
        setData(datat);
       } 
      
    }
    
    
  // }
  // fetchData();
  
}
  

  useEffect(() => {
    // setSignOne();
    // setSignTwo();
   fdata();

  }, []);

  return (
    <div className="flex w-full pb-10">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5">
               <div id='outputDiv'>
                    
                   
                    {!data.error && data.map( ( dat) => {
                       
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

            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">
                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold">Your sign</div>
                    
                    <div>
                      <select className="text-sm border rounded-md w-20 mt-1 p-1 mr-2" value={signOne} onChange={event => sOne(event.target.value)}  >
                        {optionsA.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                      <span className='text-xs'>{signOne}</span>
                    </div>

                    <div className="text-xs font-bold mt-2">Partner's sign</div>

                    <div>
                      <select className="text-sm border rounded-md w-20 my-1 p-1 mr-2" value={signTwo} onChange={ event => setSignTwo(event.target.value)} >
                        {optionsB.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                      <span className='text-xs'>{signTwo}</span>
                    </div>

                    <button className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-4 text-white text-sm p-1" onClick={fdata}>Submit</button>
                   
                </div>
            </div>
            
        </div>
  );
}