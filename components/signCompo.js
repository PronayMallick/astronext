'use client'
import { useState } from 'react';
import { getMySign } from '@/app/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/app/submit-button';

export default function SignCompo() {

  const [data, setData] = useState([]);
  const [dataFlag, setDataFlag] = useState();

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

  const [state, mySignActionTwo] = useFormState(getMySign, null);

  const mySignAction = () => {
    mySignActionTwo(signOne);
    setDataFlag('')
  }

  function DisplayLoading() {
    if(signOne == 0) {
      alert('Select your sign')  
    } else {
      setDataFlag(
        <div className='flex justify-center h-full  w-full bg-slate-50 absolute right-0 top-0 '>
          <div className='h-5 w-5 m-1 animate-spin rounded-full border-b-2 border-slate-500 mt-10'></div>
        </div>
      ); 
    } 
  }

  
  return (
    <div className="flex w-full pb-10">

      <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5">
        <div id='outputDiv'className='relative' >
          {dataFlag}
          <div className="m-4">
            <div className="text-xl font-bold dark:text-slate-500">{signOne>0 && signOne}</div>  
            <div className="font-bold text-red-600 mt-2">{state && state.error}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.about && "About"}</div>
            <div className="text-sm text-slate-500">{state && state.about}</div>
            <div className="font-bold text-red-600 mt-2">{state &&state.career && "Career"}</div>
            <div className="text-sm text-slate-500">{state && state.career}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.compatibility && "Compatibility"}</div>
            <div className="text-sm text-slate-500">{state && state.compatibility}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.date_range && "Date Range"}</div>
            <div className="text-sm text-slate-500">{state && state.date_range}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.element && "Element"}</div>
            <div className="text-sm text-slate-500">{state && state.element}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.health && "Health"}</div>
            <div className="text-sm text-slate-500">{state && state.health}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.love && "Love"}</div>
            <div className="text-sm text-slate-500">{state && state.love}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.man && "Man"}</div>
            <div className="text-sm text-slate-500">{state && state.man}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.name && "Name"}</div>
            <div className="text-sm text-slate-500">{state && state.name}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.nature && "Nature"}</div>
            <div className="text-sm text-slate-500">{state && state.nature}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.relationship && "Relationship"}</div>
            <div className="text-sm text-slate-500">{state && state.relationship}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.rulinh_planet && "Ruling Planet"}</div>
            <div className="text-sm text-slate-500">{state && state.rulinh_planet}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.strengths && "Strengths"}</div>
            <div className="text-sm text-slate-500">{state && state.strengths}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.synbol && "Symbol"}</div>
            <div className="text-sm text-slate-500">{state && state.synbol}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.weaknesses && "Weaknesses"}</div>
            <div className="text-sm text-slate-500">{state && state.weaknesses}</div>
            <div className="font-bold text-red-600 mt-2">{state && state.woman && "Woman"}</div>
            <div className="text-sm text-slate-500">{state && state.woman}</div>      
          </div>
        </div>
      </div>
      <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">
          <div className="flex flex-col px-4 pt-12 pb-10">

              <div className="text-xs font-bold">Enter your Sign</div>
              <form action={mySignAction}>
                <select className=" border rounded-md w-26 text-sm mt-2 p-1" name='sign' value={signOne} onChange={handleChange}>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                <div onClick={DisplayLoading}><button className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-2 text-white text-sm p-1" ><SubmitButton/></button></div>
              </form>
          </div>
      </div>
            
    </div>
  );
}