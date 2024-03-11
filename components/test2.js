'use client'

import { useState } from "react";
export default function Test2(data) {
    const [pdata, setPdata ] = useState(data)
    console.log("Test 2");
    console.log(pdata.data)
    // const padata = await data;
   
    return (
        <div>
            <div className="text-lg">Test Two</div>
            <div>{pdata && pdata.data.name}</div>
        </div>
    )
}