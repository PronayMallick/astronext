'use server'

import Test4 from "@/components/test4";
import { revalidatePath } from "next/cache";

 
export async function getMySign(formData) {
    const sign = formData.get('sign');
    const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })
    const data = await response.json();
    console.log(data);
    revalidatePath('/');
    // return  <Test4 data = {data}/>
       
}