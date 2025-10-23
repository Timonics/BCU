import React from 'react'

import checkmark from "../../assets/check-mark.png"
import { Link } from 'react-router'

const EmailVerified: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 mb-4'>
      <img src={checkmark} alt='verified-checkmark' className='size-30'/>
      <h1 className='text-[32px] font-bold pops text-[#1E1E1E]'>Email Verified</h1>
      <p className='worksan text-[16px] opacity-55'>Hi Famaye, we have successfully verified your email.</p>
      <Link to={"/auth"} className='mt-10 w-3/4 pops font-bold text-slate-100 bg-[#009AF4] p-3 rounded-lg text-center'>Done</Link>
    </div>
  )
}

export default EmailVerified