'use client'
import { useState, useEffect } from 'react';

export default function Datpg() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState([]);

  function fdata() {
    async function fetchData() {
        const lat = 6;
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/numerology?n=${num}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        },
    })
      const data = await response.json();
      setData(data);
    }
    
    fetchData();
}
  

  useEffect(() => {

   fdata();

  }, []);

  return (
    <div>
      {/* Display data from the external API */}
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={fdata}>Get weather data</button><br/>
      {console.log("fetchData")}
      {data.number}
      <br/>
      {data.desc}
    </div>
  );
}