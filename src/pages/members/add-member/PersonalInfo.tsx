import React from 'react'

const PersonalInfo: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-2xl pops font-bold'>Fill in your information correctly</p>
      <div className='grid grid-cols-2 gap-4 px-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Surname <span className='text-red-600'>*</span></p>
          <input className='member-input'/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>First Name <span className='text-red-600'>*</span></p>
          <input className='member-input'/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Other Names (optional)</p>
          <input className='member-input'/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Email Address <span className='text-red-600'>*</span></p>
          <input className='member-input'/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Phone Number <span className='text-red-600'>*</span></p>
          <input className='member-input'/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm'>Alternate Phone Number</p>
          <input className='member-input'/>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo