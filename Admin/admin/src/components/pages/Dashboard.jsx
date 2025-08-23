import React from 'react';
import { HiDotsVertical } from "react-icons/hi";



export default function Dashboard() {
  return (
    <>
     

   <section className='mb-[150px]'>

      <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
        <p className='cursor-pointer hover:text-blue-600'>Home</p>
        <p>/</p>
        <p className='cursor-pointer hover:text-blue-600'>Dashboard</p>
      </div>


      <div className='grid grid-cols-3 gap-4 px-3 mt-5'>

        <div className=' items-center rounded bg-[#5956D3] p-4'>
          <h1 className='inline font-bold text-[#ffffff] text-[25px] '>26K</h1>
          <p className='inline font-bold text-[#ffffff] text-[16px] ml-2'>(-12.4% ↓) <HiDotsVertical className='inline text-[#ffffff] text-[22px] ml-[160px] ' /></p>
          <p className='font-semibold text-[#ffffff] text-[19px] pb-[70px]'>Users</p>
        </div>
<div className=' items-center rounded bg-[#2998FE] p-4'>
          <h1 className='inline font-bold text-[#ffffff] text-[25px] '>$6,200</h1>
          <p className='inline font-bold text-[#ffffff] text-[16px] ml-2'>(40.9% ↑) <HiDotsVertical className='inline text-[#ffffff] text-[22px] ml-[140px] ' /></p>
          <p className='font-semibold text-[#ffffff] text-[19px] pb-[70px]'>Product</p>
        </div>

        <div className=' items-center rounded bg-[#FCB01E] p-4'>
          <h1 className='inline font-bold text-[#ffffff] text-[25px] '>2.49%</h1>
          <p className='inline font-bold text-[#ffffff] text-[16px] ml-2'>(84.7% ↑) <HiDotsVertical className='inline text-[#ffffff] text-[22px] ml-[145px] ' /></p>
          <p className='font-semibold text-[#ffffff] text-[19px] pb-[70px]'>Users</p>
        </div>

        <div className=' items-center rounded bg-[#E95353] p-4'>
          <h1 className='inline font-bold text-[#ffffff] text-[25px] '>44K</h1>
          <p className='inline font-bold text-[#ffffff] text-[16px] ml-2'>(-23.6% ↓) <HiDotsVertical className='inline text-[#ffffff] text-[22px] ml-[160px] ' /></p>
          <p className='font-semibold text-[#ffffff] text-[19px] pb-[70px]'>Orders</p>
        </div>

      </div>

</section>

    </>
  )
}
