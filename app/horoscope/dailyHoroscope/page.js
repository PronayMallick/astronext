const getData = async () => {

    const day = 'today';
    const sunsign = 'libra';
    const res = await fetch(`https://horoscope-astrology.p.rapidapi.com/horoscope?day=${day}&sunsign=${sunsign}`, {
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

const DailyHoroscope = async () => {
    const horoscopeData = await getData();
    console.log("horoscopeData 7");
    console.log(horoscopeData);
    const daata = horoscopeData;
   
    return (
        <div className="m-4">
            <div className="text-xl font-bold">Daily horoscope</div>

            <div className="font-bold text-red-600 mt-2">Date</div>
            <div className="text-sm text-slate-500">{daata.date}</div>

            <div className="font-bold text-red-600 mt-2">Horoscope</div>
            <div className="text-sm text-slate-500">{daata.horoscope}</div>
           
           
            
            {/* {daata.map( ( dat, index) => {
                return (<div id="index">{dat.header}</div>)
            })} */}
            
        </div>
    )
}

export default DailyHoroscope;