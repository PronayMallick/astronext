'use server'
const getData = async () => {
    const numb = 4;
    const res = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${numb}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })

    if(!res.ok) {
        throw new Error("Something went wrong")
    }
   
    return res.json()
}

const Numerology = async () => {

    const horoscopeData = await getData();
    // console.log("horoscopeData 4");
    // console.log(horoscopeData);
    const daata = horoscopeData;
    return (
            <div className="flex w-full">
                <div className="showData w-3/4 px-4 py-6">
                    <div>Your Number = {daata.number}</div> 
                    <div>{daata.desc}</div>
                </div>

                <div className="inputData bg-slate-100 w-1/4 h-full	">

                </div>
            </div>
    )
}

export default Numerology;



// const Numerology = () => {

//     return (
//         <div className="flex w-full">
//             <div className="showaData w-3/4">

//             </div>
//             <div className="inputData bg-slate-100 w-1/4 h-full	">

//             </div>
//         </div>
//     )
// }

// export default Numerology;