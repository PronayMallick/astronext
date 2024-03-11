
import Test2 from './test2';

const Test = async () => {
    const res = await fetch("https://horoscope-astrology.p.rapidapi.com/tarotcard", {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    }) 

    const response = await res.json();
    const response2 = response.res[0];
    console.log(response2);
    console.log("Server Comp");
    // setData(response2);  
    return (
        <main>
            {/* <YourClientComponent data={data}/> */}
            <Test2 data = {response2}/>
        </main>
    )

}

export default Test;
   
   
   

   
   