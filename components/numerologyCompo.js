'use client'
import { useState } from 'react';
import { getNumerology } from '@/app/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/app/submit-button';


export default function NumerologyCompo() {
  const [dataFlag, setDataFlag] = useState();
  const [numCatcher, setNumCatcher] = useState(0);

  const handleChange = event => {
    setNumCatcher(event.target.value);
  };

  const generateSingleDigit = () => { 
   
   
    let nums = [];
    let sum = 0;
    if(numCatcher == 0){ alert("Enter proper date in the format:  day - month - year")}
    console.log("Num Catcher");
    console.log(numCatcher);
    function abc() {
      for (let i = 0; i < numCatcher.length; i++) {
        if (!isNaN(Number(numCatcher[i]))) {
          nums.push(Number(numCatcher[i]));
        }
      }
    }
    abc();
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }

    let finalVal = sum.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0); 
    let finalValTwo = finalVal.toString().split("").reduce((finalVal, digit) => finalVal + parseInt(digit), 0); 
   
    if(finalValTwo != 0) {
      numerologyAction(finalValTwo);
      setDataFlag('');
    }
  }

  const [state, numerologyAction] = useFormState(getNumerology, null)

  const DisplayLoading = () => {
    if(numCatcher != 0) {
      setDataFlag(
        <div className='flex justify-center items-center h-full  w-full bg-slate-50 absolute right-0 top-0'>
          <div className='h-5 w-5 m-1 animate-spin rounded-full border-b-2 border-slate-500'></div>
        </div>
      ); 
    } 
  }
 
  return (
    <div className="flex w-full pb-10">
     
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5 relative" >
            { dataFlag}
                <div id='outputDiv' className=''>
                    <div className="font-bold text-red-600 mt-2"> {state && state.error} </div>
                    {state && state.number && <div className="font-bold text-red-600 mt-2">Your Number</div>}
                    <div className="text-sm text-slate-500">{state && state.number}</div>
                    {state && state.desc && <div className="font-bold text-red-600 mt-2">About</div>}
                    <div className="text-sm text-slate-500">{state && state.desc}</div>
                </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md dark:text-slate-500">

                <div className="flex flex-col px-4 pt-12 pb-10">
                    <div className="text-xs font-bold pb-1">Enter Birthday</div>               
                    <form action={generateSingleDigit}>
                      <div ><input className='text-xs md:text-base' type='date' asp-format="{0:yyyy-MM-dd}" onChange={ handleChange} /></div>
                      <div><button className='w-16 rounded-md bg-slate-400 hover:bg-slate-500 mt-4 text-white text-sm p-1'onClick={DisplayLoading} ><SubmitButton/></button></div>
                    </form>
                   
                </div>
            </div>
            
        </div>
  );
}