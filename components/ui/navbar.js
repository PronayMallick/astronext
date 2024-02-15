import { faRightToBracket, faUserPlus, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Navbar() {

    return (
        <div className="flex justify-between p-3">
            <div className='logo flex items-center pl-4'>
                {/* <div className='w-8'><FontAwesomeIcon icon={faSnowflake} style={{color: "#ff6f00",}} /></div> */}
                <Image
                    src="/images/icons/logo.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
                {/* <div className='pl-2 tracking-widest text-md hover:text-amber-500 text-amber-600'>MYJEMZ</div> */}
            </div>
            
            <div className='logSign flex '>
                <div className='logIn flex p-1 items-center mr-4'>
                    {/* <div className='w-3'><FontAwesomeIcon icon={faRightToBracket} style={{color: "#ff6f00",}} /></div> */}
                    <div className='px-1 text-sm hover:text-amber-500 text-amber-600 font-bold'>myjemz.com</div>
                </div>

                {/* <div className='signUp flex p-1 items-center'>
                    <div className='w-4'><FontAwesomeIcon icon={faUserPlus} style={{color: "#ff6f00",}} /></div>
                    <div className='px-1 text-sm hover:text-amber-500'>Sign Up</div> 
                </div> */}
            </div>
        </div>
    )
}