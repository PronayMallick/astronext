const getData = async () => {

    const signOne = 'Libra';
    const signTwo = 'Aries';
    const res = await fetch(`https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${signOne}&sign2=${signTwo}`, {
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

const Compatibility = async () => {

    const horoscopeData = await getData();
    console.log("horoscopeData 5");
    console.log(horoscopeData);
    const daata = horoscopeData;
    return (
        <div className="m-4">
            <div className="text-xl font-bold">Compatibility</div>
          
            {daata.map( ( dat) => {
                return (
                <div id="index">
                    <div>
                        <div className="font-bold text-red-600 mt-2">{dat.header}</div>
                        <div className="text-sm text-slate-500">{dat.text}</div>
                    </div>
                </div>
                )
            })}
            
            
        </div>
    )
}

export default Compatibility;