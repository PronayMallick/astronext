const getData = async () => {
    const res = await fetch("https://horoscope-astrology.p.rapidapi.com/dailyphrase", {
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

const DailyPhrase = async () => {

    const horoscopeData = await getData();
    console.log("horoscopeData 1");
    console.log(horoscopeData.daily);
    const daata = horoscopeData.daily;
    return (
        <div>
            <div className="text-xl font-bold text-slate-500">Daily Phrase</div>
            <div className="text-slate-400 text-lg">{daata}</div>
        </div>
    )
}

export default DailyPhrase;