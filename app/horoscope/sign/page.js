const getData = async () => {

    const signOne = 'libra';
    const res = await fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${signOne}`, {
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

const Sign = async () => {

    const horoscopeData = await getData();
    console.log("Sign");
    console.log(horoscopeData);
    const daata = horoscopeData;
    return (
        <div className="m-4">
            <div className="text-xl font-bold">Sign</div>
            
            <div className="font-bold text-red-600 mt-2">About</div>
            <div className="text-sm text-slate-500">{daata.about}</div>

            <div className="font-bold text-red-600 mt-2	">Career</div>
            <div className="text-sm text-slate-500">{daata.career}</div>

            <div className="font-bold text-red-600	">Compatibility:</div>
            <div className="text-sm text-slate-500">{daata.compatibility}</div>

            <div className="font-bold text-red-600 mt-2">Date Range</div>
            <div className="text-sm text-slate-500">{daata.date_range}</div>

            <div className="font-bold text-red-600 mt-2">Element</div>
            <div className="text-sm text-slate-500">{daata.element}</div>

            <div className="font-bold text-red-600 mt-2">Health</div>
            <div className="text-sm text-slate-500">{daata.health}</div>

            <div className="font-bold text-red-600 mt-2">Love</div>
            <div className="text-sm text-slate-500">{daata.love}</div>

            <div className="font-bold text-red-600 mt-2">Man</div>
            <div className="text-sm text-slate-500">{daata.man}</div>

            <div className="font-bold text-red-600 mt-2">Name</div>
            <div className="text-sm text-slate-500">{daata.name}</div>

            <div className="font-bold text-red-600 mt-2">Nature</div>
            <div className="text-sm text-slate-500">{daata.nature}</div>

            <div className="font-bold text-red-600 mt-2">Relationship</div>
            <div className="text-sm text-slate-500">{daata.relationship}</div>

            <div className="font-bold text-red-600 mt-2">Ruling Planet</div>
            <div className="text-sm text-slate-500">{daata.rulinh_planet}</div>
            <div className="font-bold text-red-600 mt-2">Strengths</div>
            <div className="text-sm text-slate-500">{daata.strengths}</div>
            <div className="font-bold text-red-600 mt-2">Symbol</div>
            <div className="text-sm text-slate-500">{daata.synbol}</div>
            <div className="font-bold text-red-600 mt-2">Weaknesses</div>
            <div className="text-sm text-slate-500">{daata.weaknesses}</div>
            <div className="font-bold text-red-600 mt-2">Woman</div>
            <div className="text-sm text-slate-500">{daata.woman}</div>
           
            
           
            
        </div>
    )
}

export default Sign;