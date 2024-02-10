const getData = async () => {
    const res = await fetch("https://horoscope-astrology.p.rapidapi.com/threetarotcards", {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })

    // if(!res.ok) {
    //     throw new Error("Something went wrong")
    // }
    console.log("Daily 1");

    return res.json()
}

const GetThreeTarotCard = async () => {

    const horoscopeData = await getData();
    console.log("horoscopeData 2");
    console.log(horoscopeData);
    const daata = horoscopeData.res;
    return (    
        <div className="m-4">
         
            <div className="text-xl font-bold">Get three tarot card</div>

            {daata.map( ( dat) => {
                return (
                <div className="">
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

export default GetThreeTarotCard;