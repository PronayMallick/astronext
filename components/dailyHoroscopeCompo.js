'use client'
import { useState, useEffect } from 'react';

export default function DailyHoroscopeCompo() {
  const [data, setData] = useState([]);

  const days = [
    {value: 0 , text: 'Select any'},
    {value: 'today' , text: 'Today'},
    // {value: 'yesterday' , text: 'Yesterday'},
    // {value: 'tomorrow' , text: 'Tomorrow'},
    {value: 'week' , text: 'Week'},
    {value: 'month' , text: 'Month'},
    {value: 'year' , text: 'Year'},
  ];

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

  const [day, setDay] = useState(days[0].value);
  const [sunsign, setSunsign] = useState(options[0].value);

  const handleChangeA = event => {   
    setDay(event.target.value);
  };
  const handleChangeB = event => {   
    setSunsign(event.target.value);
  };


  function fdata() {

    if(day === 0 && sunsign === 0) {
    document.getElementById("outputDiv").style.display = "none"; 
    } else {
    document.getElementById("outputDiv").style.display = "block";
    }

    async function fetchData() {
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/horoscope?day=${day}&sunsign=${sunsign}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })
      const datat = await response.json();
      // console.log(datat);
      setData(datat);
     
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
                    {/* <div className="text-xl font-bold dark:text-slate-500">Daily Horoscope</div> */}
          
                    <div className="m-4">
                        

                        {data.date && <div className="font-bold text-red-600 mt-2">Date</div>}
                        <div className="text-sm text-slate-500">{data.date}</div>

                        {data.week && <div className="font-bold text-red-600 mt-2">Week</div>}
                        <div className="text-sm text-slate-500">{data.week}</div>

                        {data.sunsign && <div className="font-bold text-red-600 mt-2">Sunsign</div>}
                        <div className="text-sm text-slate-500">{data.sunsign}</div>
                      
                        {data.areas && data.areas.map(area => {
                          return (
                            <div key={area.title}>
                                <div className="font-bold text-red-600 mt-2">{area.title}</div>
                                <div className="text-sm text-slate-500">{area.desc}</div>
                            </div>
                          )
                        })}

                        {/* <div className="font-bold text-red-600 mt-2">{data.areas[0].title}</div>
                        <div className="text-sm text-slate-500">{data.areas[0].desc}</div>

                        <div className="font-bold text-red-600 mt-2">{data.areas[1].title}</div>
                        <div className="text-sm text-slate-500">{data.areas[1].desc}</div>

                        <div className="font-bold text-red-600 mt-2">{data.areas[2].title}</div>
                        <div className="text-sm text-slate-500">{data.areas[2].desc}</div>

                        <div className="font-bold text-red-600 mt-2">{data.areas[3].title}</div>
                        <div className="text-sm text-slate-500">{data.areas[3].desc}</div>

                        <div className="font-bold text-red-600 mt-2">{data.areas[4].title}</div>
                        <div className="text-sm text-slate-500">{data.areas[4].desc}</div> */}

                        {data.horoscope && <div className="font-bold text-red-600 mt-2">Horoscope</div>}
                        <div className="text-sm text-slate-500">{data.horoscope}</div>
                        
                    </div>
               </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">
                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold">Enter day</div>
                  
                    <select className="text-sm border rounded-md w-28 my-1 p-1" value={day} onChange={handleChangeA}>
                      {days.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>


                    <div className="text-xs font-bold my-1">Enter Sunsign</div>

                    <select className="text-sm border rounded-md w-28 p-1" value={sunsign} onChange={handleChangeB}>
                      {options.map(option => (
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