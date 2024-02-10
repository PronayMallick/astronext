const getData = async () => {
    const res = await fetch("https://horoscope-astrology.p.rapidapi.com/tarotcard", {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })

    // if(!res.ok) {
    //     throw new Error("Something went wrong")
    // }
   
    return res.json()
}

const GetATarotCard = async () => {

    const horoscopeData = await getData();
    console.log("horoscopeData 3");
    console.log(horoscopeData);
    const daata = horoscopeData.res;
    return (
        <div className="flex border rounded-md px-4 py-6 flex-col w-full">
          
            <div className="text-xl font-bold">Get a tarot card</div>
           
            {daata.map( ( dat, index) => {
                return (
                <div>
                    <div id="index" className="font-bold mt-1 text-red-600	">{dat.name}</div>
                    <div id="index" className="text-sm text-slate-500">{dat.desc}</div>
                    <div id="index" className="text-sm text-slate-500">{dat.rdesc}</div>
                    <div id="index" className="text-sm text-slate-500">{dat.sequence}</div>
                </div>
                
                )
            })}
            
        </div>
    )
}

export default GetATarotCard;