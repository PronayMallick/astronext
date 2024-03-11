'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const TarotOne =  () => {
    const [data, setData] = useState([]);
    const [cardHolder, setCardHolder] = useState('Your Card');
    const [cardSelect, setCardSelect] = useState('');
    const [cardColor, setCardColor] = useState('');
    const [cards, setCards] = useState(0);
    const [cardLeft, setCardLeft] = useState(0);

    const fdata = () => {
        console.log('fdata function');
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

            const response = await res.json();
            const response2 = response.res[0];
            // console.log(response2);
            // console.log(response);
            setData(response2);  
        }
        getData();
    }
    
    useEffect(() => {
        // fdata();
       }, []);

       const selectCard= (la) => {
        if(cards < 1) {
            let element = document.getElementById(la);
            element.classList.add("bottom-2");
            element.classList.add("grayscale");
            element.classList.add("shadow-lg");
            element.classList.add("shadow-white");
          
            setCards(cards+1);
        }
        setCardLeft(cardLeft-1);     
        console.log(cards);
       }
     
       const displayCard = () => {
            if(cards === 1) {
                fdata();
                let showButton = document.getElementById('dispCard');
                showButton.classList.add("invisible");
            }
       }

       const tarotImg = <Image src='/images/icons/tarot.png' width={50} height={50} style={{ width:'100%', height:'auto'}} alt="Tarot card"/>
    // console.log("horoscopeData 3");
    // console.log(data)
    // const daata = data
    //    const selectCard= (la) => {
    //     setCardSelect(<button className={'py-2 px-3 rounded-lg text-sm  ' + la} onClick={() => displayCard(la)}>Select</button>)
    //    }
     
      
    //    const displayCard = (col) => {
    //     fdata();
    //     setCardColor(col);
    //     console.log('clicked' + ' ' + col)
    //    }

    return (
        <div className="flex border rounded-md flex-col w-full bg-slate-50 mt-2">

            <div className='flex flex-col h-56 relative items-center bg-slate-200'>
                <div className=' w-56 h-20 flex relative'>
                    <button className='absolute left-0 tarotCard w-14 h-20 rounded-md filter' id='card-1' onClick={() => selectCard('card-1')}>{tarotImg}</button>
                    <button className='absolute left-4 tarotCard w-14 h-20 rounded-md filter' id='card-2' onClick={() => selectCard('card-2')}>{tarotImg}</button>
                    <button className='absolute left-8 tarotCard w-14 h-20 rounded-md' id='card-3' onClick={() => selectCard('card-3')}>{tarotImg}</button>
                    <button className='absolute left-12 tarotCard w-14 h-20 rounded-md' id='card-4' onClick={() => selectCard('card-4')}>{tarotImg}</button>
                    <button className='absolute left-16 tarotCard w-14 h-20 rounded-md' id='card-5 ' onClick={() => selectCard('card-5')}>{tarotImg}</button>
                    <button className='absolute left-20 tarotCard w-14 h-20 rounded-md' id='card-6' onClick={() => selectCard('card-6')}>{tarotImg}</button>
                    <button className='absolute left-24 tarotCard w-14 h-20 rounded-md' id='card-7' onClick={() => selectCard('card-7')}>{tarotImg}</button>
                    <button className='absolute left-28 tarotCard w-14 h-20 rounded-md' id='card-8' onClick={() => selectCard('card-8')}>{tarotImg}</button>
                    <button className='absolute left-32 tarotCard w-14 h-20 rounded-md' id='card-9' onClick={() => selectCard('card-9')}>{tarotImg}</button>
                    <button className='absolute left-36 tarotCard w-14 h-20 rounded-md' id='card-10' onClick={() => selectCard('card-10')}>{tarotImg}</button>
                    <button className='absolute left-40 tarotCard w-14 h-20 rounded-md' id='card-11'  onClick={() => selectCard('card-11')}>{tarotImg}</button>
                </div>
                <div className='w-52 h-20 flex relative bottom-12'>
                    <button className='absolute left-0 tarotCard w-14 h-20  bg-blue-300 hover:bg-blue-200 rounded-md' id='card-12' onClick={() => selectCard('card-12')}>{tarotImg}</button>
                    <button className='absolute left-4 tarotCard w-14 h-20  bg-rose-300 hover:bg-rose-200 rounded-md' id='card-13'  onClick={() => selectCard('card-13')}>{tarotImg}</button>
                    <button className='absolute left-8 tarotCard w-14 h-20  bg-green-300 hover:bg-green-200 rounded-md' id='card-14' onClick={() => selectCard('card-14')}>{tarotImg}</button>
                    <button className='absolute left-12 tarotCard w-14 h-20  bg-pink-300 hover:bg-pink-200 rounded-md' id='card-15' onClick={() => selectCard('card-15')}>{tarotImg}</button>
                    <button className='absolute left-16 tarotCard w-14 h-20  bg-orange-300 hover:bg-orange-200 rounded-md' id='card-16' onClick={() => selectCard('card-16')}>{tarotImg}</button>
                    <button className='absolute left-20 tarotCard w-14 h-20  bg-indigo-300 hover:bg-indigo-200 rounded-md' id='card-17' onClick={() => selectCard('card-17')}>{tarotImg}</button>
                    <button className='absolute left-24 tarotCard w-14 h-20  bg-green-300 hover:bg-green-200 rounded-md' id='card-18' onClick={() => selectCard('card-18')}>{tarotImg}</button>
                    <button className='absolute left-28 tarotCard w-14 h-20  bg-red-300 hover:bg-red-200 rounded-md' id='card-19' onClick={() => selectCard('card-19')}>{tarotImg}</button>
                    <button className='absolute left-32 tarotCard w-14 h-20  bg-blue-300 hover:bg-blue-200 rounded-md' id='card-20' onClick={() => selectCard('card-20')}>{tarotImg}</button>
                    <button className='absolute left-36 tarotCard w-14 h-20  bg-teal-300 hover:bg-teal-200 rounded-md' id='card-21' onClick={() => selectCard('card-21')}>{tarotImg}</button>
                    <button className='absolute left-40 tarotCard w-14 h-20  bg-fuchsia-300 hover:bg-fuchsia-200 rounded-md' id='card-22' onClick={() => selectCard('card-22')}>{tarotImg}</button>          
                </div>
                <div className='relative'>
                    {/* {cardSelect} */}
                    <button id='dispCard' className=' py-2 px-3 rounded-lg text-sm bg-red-600' onClick={() => displayCard() }> {(cardLeft < 0) ? "Show my reading" : cards ? "Choose "+ cardLeft +" more cards" : "Select 1 cards"}</button>
                </div>           
            </div>

            <div className='min-h-56 flex bg-slate-100 rounded-b-md'>
                <div className='displayCardArea w-1/4 flex flex-col items-center py-5'>
                    {/* {cardHolder} */}
                    <div className='tarotCard w-24 h-32 rounded-md m-1 bg-slate-500' >
                            {data.name && <div className="text-xs text-white font-bold text-center pt-8">{data.name}</div>}
                        </div>
               
                </div>
                <div className='displayCardInfo bg-slate-50 w-3/4  rounded-md'>
                    <div>
                        <div className='min-h-60 py-4 px-1'>
                        {data.name && <div id="index" className="font-bold mt-1 text-red-600">Name of your Card: <span className="text-sm text-slate-500 font-bold">{data.name}</span></div>}
                        {data.desc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.desc}</span></div>}
                        {data.rdesc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.rdesc}</span></div>}
                        <div id="index" className="text-sm text-slate-500">{data.sequence}</div> 
                        </div> 
                    </div>
                </div>
            </div>


            {/* <button className='rounded-md bg-slate-300 p-1 w-40' onClick={fdata}>Get 1 Tarot card</button>
                <div className='h-60 py-4'>
                    {data.name && <div id="index" className="font-bold mt-1 text-red-600">Name of your Card: <span className="text-sm text-slate-500 font-bold">{data.name}</span></div>}
                    {data.desc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.desc}</span></div>}
                    {data.rdesc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{data.rdesc}</span></div>}
                    <div id="index" className="text-sm text-slate-500">{data.sequence}</div> 
                </div> */}
        </div>
    )
}

export default TarotOne;