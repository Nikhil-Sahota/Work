import React from 'react'

export default function Footer() {
  return (
    <>
      <section className='flex items-center border-t border-gray-200 justify-between'>
        <div className='flex  text-[14px] gap-1 py-3 px-5 text-[#111827] font-normal '>
          <p>© 2025</p>
            <span className='hover:underline
'>WsCube Tech™.</span>
          <p>  All Rights Reserved. </p>
        </div>
        <div className='text-[#6b7280] hover:underline
 text-[14px] font-normal cursor-pointer'>
          <p className='mr-5'>Design By <span className='text-[#2563eb]'>WsCube Tech </span> </p>
        </div>
      </section>
    </>
  )
}
