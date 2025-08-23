import React from 'react'
import { HiMenu } from "react-icons/hi";
import logo from '../../assets/boy.jpg';
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

export default function Header() {
  return (

    <>

      <section className='p-2 border-b-1 border-gray-200 flex justify-between'>

        <div className='flex items-center text-[18px] font-semibold gap-4 text-[#64748b]'>
          <HiMenu className='text-[20px] font-black' /> Dashboard</div>


        <div className='relative bg-[#F3F4F6] group w-[45px] h-[45px] text-[25px] mr-4 rounded-full flex items-center justify-center'>

  <img src={logo} alt="logo" className='w-full h-full rounded-full' />

   <div className='absolute cursor-pointer top-10 right-5 w-[170px] opacity-0 group-hover:opacity-100  hover:opacity-100 group-hover:pointer-events-auto transition duration-300 bg-white shadow-lg rounded my-2 text-[#111827] text-[14px] font-medium border border-gray-200'>
  

    <div className='flex items-center gap-2 py-1 pl-3 border-b border-gray-200 hover:text-[#1d4ed8] hover:bg-[#F3F4F6]'><IoPersonCircleSharp />Profile</div>
    <div className='flex items-center gap-2 py-1 pl-3 border-b border-gray-200 hover:text-[#1d4ed8] hover:bg-[#F3F4F6]'><BsFillPersonVcardFill />Company Profile</div>
    <div className='flex items-center gap-2 py-1 pl-3 pb-2 hover:text-[#1d4ed8] hover:bg-[#F3F4F6]'><FaLock />Logout</div>
  </div>

</div>


      </section>
      




    </>
  )
}
