'use client'
import { useState } from 'react';
import { getHoroscope } from '@/app/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/app/submit-button';

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
  const [sunSign, setSunsign] = useState(options[0].value);
  const [dataFlag, setDataFlag] = useState();


  const handleChangeA = event => {   
    setDay(event.target.value);
  };
  const handleChangeB = event => {   
    setSunsign(event.target.value);
  };

  const [state, horoscopeActionTwo] = useFormState(getHoroscope, null);
  const fData = {
    'time' : day,
    'sign' : sunSign
  }

  const horoscopeAction = () => {
    horoscopeActionTwo(fData);
    setDataFlag('');
  }

  const DisplayLoading = () => {
    if(day == 0 && sunSign == 0) {
      alert("Select time and your Sunsign")
    }else if(day == 0) {
      alert("Select time");
    }else if(sunSign == 0) {
      alert("Select your Sunsign");
    }else {
    setDataFlag(
      <div className='flex justify-center h-full  w-full bg-slate-50 absolute right-0 top-0'>
        <div className='h-5 w-5 m-1 animate-spin rounded-full border-b-2 border-slate-500 mt-20'></div>
      </div>
    ); 
    }
  }
  
  return (
    <div className="flex w-full pb-10">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5 relative">
              {dataFlag}
               <div id='outputDiv'>          
                    <div className="m-4">
                 
                        {state && state.error && <div className="font-bold text-red-600 mt-2">{state.error}</div>}

                        {state && state.date && <div className="font-bold text-red-600 mt-2">Date</div>}
                        <div className="text-sm text-slate-500">{state && state.date}</div>

                        {state && state.week && <div className="font-bold text-red-600 mt-2">Week</div>}
                        <div className="text-sm text-slate-500">{state && state.week}</div>

                        {state && state.sunsign && <div className="font-bold text-red-600 mt-2">Sunsign</div>}
                        <div className="text-sm text-slate-500">{state && state.sunsign}</div>
                      
                        {state && state.areas && state.areas.map(area => {
                          return (
                            <div key={area.title}>
                                <div className="font-bold text-red-600 mt-2">{area.title}</div>
                                <div className="text-sm text-slate-500">{area.desc}</div>
                            </div>
                          )
                        })}

                        {state && state.horoscope && <div className="font-bold text-red-600 mt-2">Horoscope</div>}
                        <div className="text-sm text-slate-500">{state && state.horoscope}</div>
                        
                    </div>
               </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">
                <div className="flex flex-col px-4 pt-12 pb-10">
                    <div className="text-xs font-bold">Enter time</div>
                  
                    <form action={horoscopeAction}>
                      <select className="text-sm border rounded-md w-26 my-1 p-1" name='time' value={day} onChange={handleChangeA}>
                        {days.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select>

                      <div className="text-xs font-bold my-1">Enter Sunsign</div>
                      <select className="text-sm border rounded-md w-26 p-1" name='sign' value={sunSign} onChange={handleChangeB}>
                        {options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select><br/>
                      <button className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-4 text-white text-sm p-1" onClick={DisplayLoading}> <SubmitButton /></button>
                     
                    </form>
                </div>
            </div>
            
        </div>
  );
}