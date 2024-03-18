'use client'
import { useState } from 'react';
import { getCompatibility } from '@/app/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/app/submit-button';

export default function CompatabilityCompo() {

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

  
  const [dataFlag, setDataFlag] = useState();
  const [signOne, setSignOne] = useState(optionsA[0].value);
  const [signTwo, setSignTwo] = useState(optionsB[0].value);
  const [state, CompatabilityActionTwo] = useFormState(getCompatibility, null);

  const fData = {
    'signOne' : signOne,
    'signTwo' : signTwo
  }

  const CompatabilityAction = () => {
    CompatabilityActionTwo(fData);
    setDataFlag('');
  }

  const DisplayLoading = () => {
    if(signOne == "Not selected") {
      alert("Select your sign");
    }else if(signTwo == "Not selected") {
      alert("Select your Partner's Sign");
    }
    setDataFlag(
      <div className='flex justify-center h-full  w-full bg-slate-50 absolute right-0 top-0'>
        <div className='h-5 w-5 m-1 animate-spin rounded-full border-b-2 border-slate-500 mt-20'></div>
      </div>
    ); 
  }
  
  return (
    <div className="flex w-full pb-10">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5 relative">
              {dataFlag}
              <div id='outputDiv'>
                {state && state.error && <div className="font-bold text-red-600 mt-2">{state.error}</div>}                
                {state && !state.error && state.map( ( dat) => { 
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
                    
                  <form action={CompatabilityAction}>
                    <div>
                      <select className="text-sm border rounded-md w-20 mt-1 p-1 mr-2" name='signOne' value={signOne} onChange={event => setSignOne(event.target.value)}  >
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
                      <select className="text-sm border rounded-md w-20 my-1 p-1 mr-2" name='signTwo' value={signTwo} onChange={ event => setSignTwo(event.target.value)} >
                        {optionsB.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                      <span className='text-xs'>{signTwo}</span>
                    </div>
                    <button type='submit' className="w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-4 text-white text-sm p-1" onClick={DisplayLoading}><SubmitButton/></button>                 
                  </form> 
                </div>
            </div>
            
        </div>
  );
}