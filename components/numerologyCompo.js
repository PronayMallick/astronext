'use client'
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";    
import "react-datepicker/dist/react-datepicker.css";


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

  // const [selected, setSelected] = useState(options[0].value);  
  
  const [numFinal, setNumFinal] = useState();
  const [startDate, setStartDate] = useState(new Date());
  

  // const handleChange = event => {
  //   setSelected(event.target.value);
    
  // };

  const generateNum = (event) => {
   
      setStartDate(event.target.value);
      console.log(startDate);
      let nums = [];
      let sum = 0;
      console.log('function abc')
      console.log(startDate);
      function abc() {
        for (let i = 0; i < startDate.length; i++) {
          if (!isNaN(Number(startDate[i]))) {
            nums.push(Number(startDate[i]));
          }
        }
      }
      abc();
      console.log(nums);
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      console.log(sum);
      let finalVal = sum.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0); 
      let finalValTwo = finalVal.toString().split("").reduce((finalVal, digit) => finalVal + parseInt(digit), 0); 
      console.log(finalVal);

      setNumFinal(finalValTwo);

      console.log("final value st");
      console.log(numFinal);  
      console.log("final value ed");
     
    
  }

  // const setNumber = event => {
  //   console.log('hi pro')
  //   setStartDate(event.target.value);
  //   console.log(startDate);
  //   let nums = [];
  //   let sum = 0;
  //   console.log('function abc')
  //   console.log(startDate);
  //   function abc() {
  //     for (let i = 0; i < startDate.length; i++) {
  //       if (!isNaN(Number(startDate[i]))) {
  //         nums.push(Number(startDate[i]));
  //       }
  //     }
  //   }

  //   abc();
  //   console.log(nums);
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //   }
  //   console.log(sum);
  //   let finalVal = sum.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0); 
  //   let finalValTwo = finalVal.toString().split("").reduce((finalVal, digit) => finalVal + parseInt(digit), 0); 
  //   console.log(finalVal);
  //   console.log(finalValTwo);
  //   setNumFinal(finalValTwo);
    
  // };

  // const sumDigitsFromString = ()=> {
  //   console.log(startDate);
  //   const str = startDate;
  //   console.log(str.length);
  //   let nums = [];
  //   let sum = 0;
  
  //   for (let i = 0; i < str.length; i++) {
  //     if (!isNaN(Number(str[i]))) {
  //       nums.push(Number(str[i]));
  //     }
  //   }
  //   console.log(nums);
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //   }
  //   console.log(sum);
  //   let finalVal = sum.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0); 
  //   console.log(finalVal);
  //   setNumFinal(finalVal);
  //   return finalVal;
  // }

  function fdata() {
    
    async function fetchData() {

        if(numFinal=== 0) {
          document.getElementById("outputDiv").style.display = "none"; 
        } else {
          document.getElementById("outputDiv").style.display = "block";
        }
        
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${numFinal}`, {
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
  


 
  
  // Test it
  // console.log(sumDigitsFromString(startDate));

    

  useEffect(() => {
    
   fdata();
  }, []);

  return (
    <div className="flex w-full pb-10">
            
            <div className="outputData w-4/6 md:w-9/12 bg-slate-50 rounded-l-md px-4 py-5" >
          
               <div id='outputDiv'>
                    <div className="text-xl font-bold">Numerology</div>
                    <div>Calculate Your Life Path Number:</div>
                    <div className="font-bold text-red-600 mt-2">Your Number</div>
                    <div className="text-sm text-slate-500">{data.number}</div>

                    <div className="font-bold text-red-600 mt-2">About</div>
                    <div className="text-sm text-slate-500">{data.desc}</div>
               </div>
            </div>

            <div className="inputData w-2/6 md:w-3/12 bg-slate-100 rounded-r-md">

                <div className="flex flex-col px-4 pt-12 pb-10">

                    <div className="text-xs font-bold pb-1">Enter Birthday</div>
                    {/* <div className="text-xs">from 1 to 11</div> */}

                    {/* <input type='date' asp-format="{0:yyyy-MM-dd}"   onChange={(e) => setNumber(e)} /> */}
                    <input type='date' asp-format="{0:yyyy-MM-dd}"   onChange={(e) => generateNum(e)} />
                      <button className='bg-slate-300 text-xs py-1 rounded-md mt-2' onClick={generateNum}>Generate your Number</button>
                      {numFinal>0 && <div className="text-xs font-bold py-2 " >Your Number is: {numFinal} <br/>
                      <button className="w-28 rounded-md bg-slate-400 mt-2 hover:bg-slate-500 text-white text-sm p-1" onClick={fdata}>See your Numerology</button>
                      </div>}
                      {/* <div className="text-xs font-bold py-2 " >Your Number is: {numFinal}</div> */}
 
                    {/* <select className="text-sm border rounded-md w-28 mt-2 p-1" value={selected} onChange={handleChange}>
                      {options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select> */}
                    {/* <button className="w-16 rounded-md bg-slate-400 mt-2 hover:bg-slate-500 text-white text-sm p-1" onClick={fdata}>Submit</button> */}

                   {/* <button onClick={sumDigitsFromString}>Calculate</button> */}
                 
                   
                </div>
            </div>
            
        </div>
  );
}