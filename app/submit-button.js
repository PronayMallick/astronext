'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={pending} className=' rounded-md px-2 py-1 bg-slate-500'>
      Check
    </button>
  )
}