
import { SubmitButton } from '@/app/submit-button'
import { getMySign } from '@/app/actions'
 
// Server Component
export default async function Test3() {

    const options = [
        {value: 0 , text: 'Select any'},
        {value: 'aries' , text: 'Aries'},
        {value: 'taurus' , text: 'Taurus'},
        {value: 'gemini' , text: 'Gemini'},
        {value: 'cancer' , text: 'Cancer'},
        {value: 'leo' , text: 'Leo'},
        {value: 'virgo' , text: 'Virgo'},
        {value: 'libra' , text: 'Libra'},
        {value: 'scorpio' , text: 'Scorpio'},
        {value: 'sagittarius' , text: 'Sagittarius'},
        {value: 'capricorn' , text: 'Capricorn'},
        {value: 'aquarius' , text: 'Aquarius'},
        {value: 'pisces' , text: 'Pisces'}, 
      ];

      const getMySign = async (formData) => {
        "use server";
        const sign = formData.get('sign');
        const response = await fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9dc604005msh3be6b07701922ebp1f95fbjsn76c549b14a4f',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            },
        })
        const data = await response.json();
        // console.log(data);
        return data;
        // revalidatePath('/');     
      }
     
        console.log('tat');
       
       
     

  return (
   <div>
      <form action={getMySign}>
        <select name="sign" className=" border rounded-md w-28 mt-2 p-1" >
            {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
            ))}
        </select>
        <SubmitButton />
      </form>

      <div>
            {/* <div className="text-sm text-slate-500">hi t4{datt.about}</div> */}
        </div>
   </div>
  )
}