'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <div type="submit" aria-disabled={pending} className='flex justify-center'>
       {pending ? <div className='h-3 w-3 m-1 animate-spin rounded-full border-b-2 border-white'></div> : <div>Submit</div>}
    </div>
  )
}