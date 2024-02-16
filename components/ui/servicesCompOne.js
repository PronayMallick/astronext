"use client"
import { useState } from 'react'
import Image from 'next/image'
import CompatabilityCompo from '../compatabilityCompo'
import NumerologyCompo from '../numerologyCompo'
import SignCompo from '../signCompo'
import DailyHoroscopeCompo from '../dailyHoroscopeCompo'
import TarotOne from '../tarotOne'
import TarotThree from '../tarotThree'



export default function ServicesCompOne() {

    const [showService, setShowService] = useState(<NumerologyCompo/>)
    const [serviceTitle, setServiceTitle] = useState('Numerology')

    const showCompo = (comp) => {
        
        if(comp === "Numerology") { setShowService(<NumerologyCompo/>); setServiceTitle(comp) } 
        else 
        if(comp === "Compatibility") { setShowService(<CompatabilityCompo/>); setServiceTitle(comp) }
        else 
        if(comp === "DailyHoroscope") { setShowService(<DailyHoroscopeCompo/>); setServiceTitle(comp) }
        else 
        if(comp === "Sign") { setShowService(<SignCompo/>); setServiceTitle(comp) }
        else 
        if(comp === "TarotOne") { setShowService(<TarotOne/>); setServiceTitle("Choose 1 Tarot") }
        else 
        if(comp === "TarotThree") { setShowService(<TarotThree/>); setServiceTitle("Choose 3 Tarot") }
    }
    
    return (
       <div className="servicesWrapper">
         <div className="servicesContent pt-20 pb-12 bg-slate-100 flex flex-col justify-center items-center md:flex-row md:pt-28 ">
          
            <div className="serviceCards flex">

                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("Numerology")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/icons8-numbers-30.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>Check your</div>
                        <div className='text-slate-500'>Numerology</div>
                    </div>                
                </div>

                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("TarotOne")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/icons8-tarot-cards-64-1.png"
                            width={80}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>Choose 1</div>
                        <div className='text-slate-500'>Tarot card</div>
                    </div>
                </div>

                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("TarotThree")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/icons8-tarot-cards-64.png"
                            width={70}
                            height={70}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>Choose 3</div>
                        <div className='text-slate-500'>Tarot card</div>
                    </div>               
                </div>
                    
            </div>

            <div className="serviceCards flex">
              
                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("Sign")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/sign.png"
                            width={65}
                            height={65}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>See</div>
                        <div className='text-slate-500'>Sun Sign</div>
                    </div>                
                </div>
              
                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("Compatibility")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/compatibility.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>Check</div>
                        <div className='text-slate-500'>Compatibility</div>
                    </div>                
                </div>

                <div className="serviceCard w-28 h-40 m-2 text-sm md:mx-2 lg:mx-4" onClick={()=> showCompo("DailyHoroscope")}>
                    <div className='w-full h-24 bg-slate-200 rounded-t-lg flex justify-center items-center hover:bg-slate-100'>
                        <Image
                            src="/images/icons/horoscope.png"
                            width={65}
                            height={65}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-full h-12 mt-2 bg-slate-300 rounded-b-lg flex flex-col justify-center items-center leading-none' >
                        <div className='text-orange-500'>Daily</div>
                        <div className='text-slate-500'>Horoscope</div>
                    </div>                
                </div>
                  
            </div>

        </div>

        <div className="service  bg-slate-200 px-4 pb-5 pt-12">
            <div className='pb-4 text-2xl font-bold dark:text-slate-500'>{serviceTitle}</div>
            <div>
                {showService}
               
                {/* <CompatabilityCompo/> */}
            </div>
        </div>


        <div className="service  bg-slate-50 flex flex-col px-8 py-20">
            <div className="text-3xl pb-2 text-orange-600">Know About Astrology</div>
            <div className=''>
                <div className='pb-4 text-slate-500'>Horoscopes are a form of astrological practice that involves predicting events and personality traits based on the positions of celestial bodies, such as the planets and stars, at the time of a person's birth. The most common form of horoscope is the zodiac, which is divided into 12 astrological signs, each associated with specific dates of the year.</div>
                <div>
                    <div className='pb-1 font-bold text-slate-600'>The 12 zodiac signs are:</div>
                    <div className='pb-3 text-slate-500 text-xs '>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>
                                    <Image 
                                        width={50}
                                        height={50}
                                        src='./images/icons/sign1.svg'
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='p-1'>Aries (March 21 - April 19)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>
                                    <Image 
                                        width={50}
                                        height={50}
                                        src='./images/icons/sign2.svg'
                                        alt="Picture of the author"
                                    /> 
                                </div>
                               <div className='p-1'> Taurus (April 20 - May 20)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>
                                    <Image 
                                        width={50}
                                        height={50}
                                        src='./images/icons/sign3.svg'
                                        alt="Picture of the author"
                                    /> 
                               </div>
                               <div className='p-1'> Gemini (May 21 - June 20)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'> 
                                    <Image 
                                        width={50}
                                        height={50}
                                        src='./images/icons/sign4.svg'
                                        alt="Picture of the author"
                                    /> 
                                </div>
                               <div className='p-1'>Cancer (June 21 - July 22)</div>
                            </div>

                           <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'> 
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign5.svg'
                                    alt="Picture of the author"
                                /> 
                                </div>
                               <div className='p-1'>Leo (July 23 - August 22)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'> 
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign6.svg'
                                    alt="Picture of the author"
                                /> 
                                 </div>
                               <div className='p-1'>Virgo (August 23 - September 22) </div> 
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign7.svg'
                                    alt="Picture of the author"
                                /> 
                                </div>
                               <div className='p-1'>Libra (September 23 - October 22)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'> 
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign8.svg'
                                    alt="Picture of the author"
                                /> 
                                </div>
                               <div className='p-1'>Scorpio (October 23 - November 21)</div>
                            </div>  

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>  
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign9.svg'
                                    alt="Picture of the author"
                                />
                                </div>
                               <div className='p-1'>Sagittarius (November 22 - December 21)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>   
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign10.svg'
                                    alt="Picture of the author"
                                />
                                </div>
                                <div className='p-1'>Capricorn (December 22 - January 19)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'>    
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign11.svg'
                                    alt="Picture of the author"
                                />
                                </div>
                                <div className='p-1'>Aquarius (January 20 - February 18)</div>
                            </div>

                            <div className='p-1 m-1 bg-slate-200 flex flex-col rounded-lg'> 
                                <div className='flex justify-center'> 
                                <Image 
                                    width={50}
                                    height={50}
                                    src='./images/icons/sign12.svg'
                                    alt="Picture of the author"
                                />
                                </div>
                                <div className='p-1'>Pisces (February 19 - March 20)</div>
                            </div> 

                        </div>
                    </div>
                    <div className='pb-3 text-slate-500'>
                        Astrologers create horoscopes by analyzing the positions of the sun, moon, and planets at the time of a person's birth. The sun sign is the most commonly known aspect of the horoscope and is determined by the position of the sun at the time of birth, corresponding to one of the 12 zodiac signs.
                    </div>             
                </div>        
            </div>
        </div>

        <div className='bg-slate-200 px-8 py-20 text-sm dark:text-slate-500'>
            <div>
                <div className="text-3xl pb-2 text-orange-600">Numerology</div>
                <div className='py-1'>Numerology is a belief in the mystical significance of numbers and their influence on various aspects of life. It's based on the idea that each number has a specific vibration and energy that can affect a person's personality, behavior, and life path. Numerology is often associated with the idea that numbers can reveal insights into a person's character, destiny, and even relationships.</div>
                <div className='pt-2'>Key concepts in numerology include:</div>
                <div className='py-1'>1. <span className='font-bold'>Life Path Number:</span> Calculated from a person's date of birth, the life path number is considered the most important in numerology. It is believed to represent the individual's life purpose and characteristics.</div>
                <div className='py-1'>2. <span className='font-bold'>Expression (Destiny) Number:</span> Derived from the letters in a person's full name, this number is thought to reveal the person's natural talents and abilities.</div>
                <div className='py-1'>3. <span className='font-bold'>Soul Urge (Heart's Desire) Number:</span> Calculated from the vowels in a person's name, this number is believed to represent one's inner desires and motivations.</div>
                <div className='py-1'>4. <span className='font-bold'>Personality Number:</span> Based on the consonants in a person's name, the personality number is thought to reflect outward characteristics and how one is perceived by others.</div>
                <div className='py-1'>5. <span className='font-bold'>Birth Day Number:</span> This is derived from the day of the month on which a person is born and is believed to influence specific personality traits.</div>
                <div className='py-1'>Numerology is not scientifically proven, and its principles are largely based on mystical and esoteric beliefs. While some people find meaning and guidance in numerology, it's essential to approach it with a critical perspective. As with astrology, numerology is considered by the scientific community to be a pseudoscience because there is no empirical evidence to support its claims. Many people use numerology for personal insight or as a form of self-reflection, but it's important to keep in mind that its interpretations are subjective and not universally accepted.</div>
            </div>
        </div>

        <div className="footer h-40 bg-slate-900 flex justify-center items-center">
            
        </div>

       </div>
    )
}