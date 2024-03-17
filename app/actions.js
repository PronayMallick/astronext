'use server'

import NumeroOutput from "@/components/numeroOutput";

 
export async function getMySign(state, formData) {
    const sign = formData.get('sign');
    try {
        if(sign != 0) {
            const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })
        const data = await response.json();
        return data; 
        }
    }   catch (err) {
        let data ={'error' : 'Server Busy..'}
        return data 
    }
     
    
   
}

export async function getOneTarotCard(state, formData) {
    try {
        const response = await fetch("https://horoscope-astrology.p.rapidapi.com/tarotcard", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })  
        const mainData = await response.json();
        const data = mainData.res[0];
        return data;
    }   catch (err) {
        let edata ={'error' : 'Server Busy..'}
        return edata;
    }
      
}

export async function getThreeTarotCard(state, formData) {
    try {
        const response = await fetch("https://horoscope-astrology.p.rapidapi.com/threetarotcards", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })  
        const mainData = await response.json();
        const data = mainData.res;
        return data; 
    }   catch (err) {
        let edata ={'error' : 'Server Busy..'}
        return edata;
    }
     
}

export async function getNumerology(state, formData) {
    try {
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${formData}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })  
        const data = await response.json();
        // return data; 
        return data;
    }   catch (err) {
        let edata ={'error' : 'Server Busy..'}
        return edata;
    }
}

export async function getCompatibility(state, formData) {
    try {
        const signOne = formData.get('signOne');
        const signTwo = formData.get('signTwo');
        if(signOne != "Not selected" && signTwo != "Not selected") {
            const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${signOne}&sign2=${signTwo}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })  
        const data = await response.json();
        return data;   
        }
        
    }   catch(err) {
        let edata ={'error' : 'Server Busy..'}
        return edata;
    }   
}

export async function getHoroscope(state, formData) {
    try {
        const time = formData.get('time');
        const sign = formData.get('sign');

        if(time != 0 && sign != 0) {
            const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/horoscope?day=${time}&sunsign=${sign}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })  
        const data = await response.json();
        return data;  
        }
    }   catch(err) {
        let edata ={'error' : 'Server Busy..'}
        return edata; 
    }
}