'use client'
import { useState, useEffect } from 'react';

export default function SignCompo() {

  const [data, setData] = useState([]);
  const [blankValue, setBlankValue] = useState();

  const options = [
    {value: 0 , text: 'Select any'},
    {value: 'aries' , text: 'Aries'},
    {value: 'taurus' , text: 'Taurus'},
    {value: 'gemini' , text: 'Gemini'},
    {value: 'cancer' , text: 'Cancer'},
    {value: 'leo' , text: 'Leo'},
    {value: 'virgo' , text: 'Virgo'},
    {value: 'libra' , text: 'Libra'},
    {value: 'scorpio' , text: 'Scorpio'},
    {value: 'sagittarius' , text: 'Sagittarius'},
    {value: 'capricorn' , text: 'Capricorn'},
    {value: 'aquarius' , text: 'Aquarius'},
    {value: 'pisces' , text: 'Pisces'}, 
  ];

  const [signOne, setSignOne] = useState(options[0].value);

  const handleChange = event => {   
    setSignOne(event.target.value);
  };

  function fdata() {
    console.log('test blank');
    console.log(signOne);
   
    if(signOne === 0) {
      
      document.getElementById("outputDiv").style.display = "none"; 
    } else {
      document.getElementById("outputDiv").style.display = "block";
    }

    async function fetchData() {
        
      const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${signOne}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
      })
      const datat = await response.json();
      setData(datat);
      // console.log(data);

    }
    
    fetchData();
}
  

  useEffect(() => {
   fdata();
  }, []);

  return (
    <div className="flex w-full pb-10">
            
      <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5">
        <div id='outputDiv'>
          <div className="m-4">
            <div className="text-xl font-bold dark:text-slate-500">{signOne}</div>  

            <div className="font-bold text-red-600 mt-2">About</div>
            <div className="text-sm text-slate-500">{data.about}</div>
            <div className="font-bold text-red-600 mt-2	">Career</div>
            <div className="text-sm text-slate-500">{data.career}</div>
            <div className="font-bold text-red-600	">Compatibility:</div>
            <div className="text-sm text-slate-500">{data.compatibility}</div>
            <div className="font-bold text-red-600 mt-2">Date Range</div>
            <div className="text-sm text-slate-500">{data.date_range}</div>
            <div className="font-bold text-red-600 mt-2">Element</div>
            <div className="text-sm text-slate-500">{data.element}</div>
            <div className="font-bold text-red-600 mt-2">Health</div>
            <div className="text-sm text-slate-500">{data.health}</div>
            <div className="font-bold text-red-600 mt-2">Love</div>
            <div className="text-sm text-slate-500">{data.love}</div>
            <div className="font-bold text-red-600 mt-2">Man</div>
            <div className="text-sm text-slate-500">{data.man}</div>
            <div className="font-bold text-red-600 mt-2">Name</div>
            <div className="text-sm text-slate-500">{data.name}</div>
            <div className="font-bold text-red-600 mt-2">Nature</div>
            <div className="text-sm text-slate-500">{data.nature}</div>
            <div className="font-bold text-red-600 mt-2">Relationship</div>
            <div className="text-sm text-slate-500">{data.relationship}</div>
            <div className="font-bold text-red-600 mt-2">Ruling Planet</div>
            <div className="text-sm text-slate-500">{data.rulinh_planet}</div>
            <div className="font-bold text-red-600 mt-2">Strengths</div>
            <div className="text-sm text-slate-500">{data.strengths}</div>
            <div className="font-bold text-red-600 mt-2">Symbol</div>
            <div className="text-sm text-slate-500">{data.synbol}</div>
            <div className="font-bold text-red-600 mt-2">Weaknesses</div>
            <div className="text-sm text-slate-500">{data.weaknesses}</div>
            <div className="font-bold text-red-600 mt-2">Woman</div>
            <div className="text-sm text-slate-500">{data.woman}</div>      
          </div>
        </div>
      </div>
            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">
                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold">Enter your Sign</div>

                    <select className=" border rounded-md w-28 mt-2 p-1" value={signOne} onChange={handleChange}>
                      {options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                   
                   
                    <div>{blankValue}</div>
                    <button className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-2 text-white text-sm p-1" onClick={fdata}>Submit</button>
                   
                </div>
            </div>
            
        </div>
  );
}