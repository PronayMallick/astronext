"use client"
import { Suspense, useState, useEffect } from 'react';


export default  function NumeroOutput(data) {
   
    // console.log("numero Out");
    // console.log(data);
    console.log("numero Out ooo");
    const fetchData =  data.data;
    // const dat = (dt.number ? true : false)
    // setDat1(dat);
    console.log(fetchData);
    // let data= {
    //     'number' : 0
    // } 
   

    return (
        // <div id='outputDiv'> 
        <div > 
          
           {/* {console.log("hi man "+ fetchData.number)} */}
            {/* {dt && dt.number} */}
            {/* <div className="font-bold text-red-600 mt-2"> {state && state.error} </div> */}
            { fetchData  &&<div className='dark:text-slate-500'>Calculate Your Life Path Number:</div>}
            {fetchData && fetchData.number && <div className="font-bold text-red-600 mt-2">Your Number</div>}
            <div className="text-sm text-slate-500">{fetchData && fetchData.number}</div>

            {fetchData && fetchData.desc && <div className="font-bold text-red-600 mt-2">About</div>}
            <div className="text-sm text-slate-500">{fetchData && fetchData.desc}</div>
        </div>
    )
}