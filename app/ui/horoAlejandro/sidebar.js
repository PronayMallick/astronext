import Link from "next/link"
export default function Sidebar() {

    return (
        <div>   
           
            <Link href="/horoscope/numerology">       
                <div className="text-white px-4 py-2 border rounded-md my-2 bg-amber-500 hover:bg-amber-400 ">Numerology</div>
            </Link> 
            <Link href="/horoscope/compatibility"> 
                <div className="text-white px-4 py-2 border rounded-md my-2	bg-amber-500 hover:bg-amber-400">Compatibility</div>
            </Link>
            <Link href="/horoscope/getThreeTarotCard"> 
                <div className="text-white px-4 py-2 border rounded-md my-2	bg-amber-500 hover:bg-amber-400">Get three tarot card</div>
            </Link>
            <Link href="/horoscope/getATarotCard"> 
                <div className="text-white px-4 py-2 border rounded-md my-2	bg-amber-500 hover:bg-amber-400">Get a tarot card</div>
            </Link>            
            <Link href="/horoscope/sign"> 
                <div className="text-white px-4 py-2 border rounded-md my-2	bg-amber-500 hover:bg-amber-400">Sign</div>
            </Link> 
            <Link href="/horoscope/dailyHoroscope"> 
                <div className="text-white px-4 py-2 border rounded-md my-2	bg-amber-500 hover:bg-amber-400">Daily horoscope</div>
            </Link> 
        </div>
    )
}