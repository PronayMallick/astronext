'use client'
import { useState } from 'react';
import Image from 'next/image';
import { getOneTarotCard } from '@/app/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/app/submit-button';


const TarotOne =  () => {
  
    const [cards, setCards] = useState(0);
    const [cardLeft, setCardLeft] = useState(0);
    const [dataFlag, setDataFlag] = useState();
    const tarotImg = <Image src='/images/icons/tarot.png' width={50} height={50} style={{ width:'100%', height:'auto'}} alt="Tarot card"/>

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
     
  
    const [state, oneTarotCardAction] = useFormState(getOneTarotCard, null)
    // console.log(state);

    const displayCard = () => {
        if(cards === 0) {
            alert('Please select elect 1 card');
        } else if(cards === 1) {
            oneTarotCardAction();
            setDataFlag('');
            // let showButton = document.getElementById('dispCard');
            // showButton.classList.add("invisible");
        }
   }

   const DisplayLoading = () => {
    if(cards != 0) {
      setDataFlag(
        <div className='flex justify-center items-center h-full  w-full bg-slate-50 absolute right-0 top-0'>
          <div className='h-5 w-5 m-1 animate-spin rounded-full border-b-2 border-slate-500'></div>
        </div>
      ); 
    } 
  }

    return (
        <div className="flex border rounded-md flex-col w-full bg-slate-50 mt-2">

            <div className='flex flex-col h-60 relative items-center bg-slate-200'>
                <div className=' w-56 h-20 flex relative'>
                    <button className='absolute left-0 tarotCard w-14 h-20 rounded-md' id='card-1' onClick={() => selectCard('card-1')}>{tarotImg}</button>
                    <button className='absolute left-4 tarotCard w-14 h-20 rounded-md' id='card-2' onClick={() => selectCard('card-2')}>{tarotImg}</button>
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
                    <button className='absolute left-0 tarotCard w-14 h-20  rounded-md' id='card-12' onClick={() => selectCard('card-12')}>{tarotImg}</button>
                    <button className='absolute left-4 tarotCard w-14 h-20  rounded-md' id='card-13'  onClick={() => selectCard('card-13')}>{tarotImg}</button>
                    <button className='absolute left-8 tarotCard w-14 h-20  rounded-md' id='card-14' onClick={() => selectCard('card-14')}>{tarotImg}</button>
                    <button className='absolute left-12 tarotCard w-14 h-20 rounded-md' id='card-15' onClick={() => selectCard('card-15')}>{tarotImg}</button>
                    <button className='absolute left-16 tarotCard w-14 h-20 rounded-md' id='card-16' onClick={() => selectCard('card-16')}>{tarotImg}</button>
                    <button className='absolute left-20 tarotCard w-14 h-20 rounded-md' id='card-17' onClick={() => selectCard('card-17')}>{tarotImg}</button>
                    <button className='absolute left-24 tarotCard w-14 h-20 rounded-md' id='card-18' onClick={() => selectCard('card-18')}>{tarotImg}</button>
                    <button className='absolute left-28 tarotCard w-14 h-20 rounded-md' id='card-19' onClick={() => selectCard('card-19')}>{tarotImg}</button>
                    <button className='absolute left-32 tarotCard w-14 h-20 rounded-md' id='card-20' onClick={() => selectCard('card-20')}>{tarotImg}</button>
                    <button className='absolute left-36 tarotCard w-14 h-20 rounded-md' id='card-21' onClick={() => selectCard('card-21')}>{tarotImg}</button>
                    <button className='absolute left-40 tarotCard w-14 h-20 rounded-md' id='card-22' onClick={() => selectCard('card-22')}>{tarotImg}</button>          
                </div>
                <div className='relative pb-4'>
                    {/* {cardSelect} */}
                    <form action={displayCard}>
                        <div className='pb-2'>{(cardLeft < 0) ? "Click on Submit" : cards ? "Choose "+ cardLeft +" more cards" : "Select 1 cards"}</div>
                        <div className='flex justify-center' onClick={DisplayLoading}><button id='dispCard' className=' py-2 px-3 rounded-lg text-sm bg-orange-500'> <SubmitButton/></button></div>
                    </form>
                </div>           
            </div>

            <div className='min-h-56 flex bg-slate-100 rounded-b-md relative'>
                {dataFlag}
                <div className='displayCardArea w-1/4 flex flex-col items-center py-5'>
                    {/* {cardHolder} */}
                    <div className='tarotCard w-24 h-32 rounded-md m-1 bg-slate-200' >
                            {state && <div className="text-xs text-slate-400 font-bold text-center pt-8">{state.name}</div>  }
                        </div>
               
                </div>
                <div className='displayCardInfo bg-slate-50 w-3/4  rounded-md'>
                    
                    <div>
                        <div className='min-h-60 py-4 px-1'>
                            {state && state.error && <div className ="font-bold mt-1 text-red-600">{state.error}</div>}
                            {state && state.name && <div id="index" className="font-bold mt-1 text-red-600">Name of your Card: <span className="text-sm text-slate-500 font-bold">{state.name}</span></div>}
                            {state && state.desc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{state.desc}</span></div>}
                            {state && state.rdesc && <div><span className="text-sm text-slate-500 font-bold">Faith: </span ><span className="text-sm text-slate-500 pt-3">{state.rdesc}</span></div>}
                            {/* <div id="index" className="text-sm text-slate-500">{state.sequence}</div>  */}
                        </div> 
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TarotOne;