'use client'

import { useState } from "react";
export default  function Test4(data) {
    const [pdata, setPdata ] = useState(data);

    console.log("Test 4");
    console.log(pdata)
    console.log(data);
    
    return (
        <div>
            <div className="text-sm text-slate-500">hi t4{pdata.about}</div>
        </div>
    )
}