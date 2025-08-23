import React from "react";
import { HiPencil } from "react-icons/hi";


export default function ViewFaq() {
  return (

   <>
   

      <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
        <p className='cursor-pointer hover:text-blue-600'>Home</p>
        <p>/</p>
        <p className='cursor-pointer hover:text-blue-600'>Faq</p>
        <p>/</p>
        <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>View</p>
      </div>

     
         <section className='pb-[250px]'>

      <section className='px-3 py-4' >


        <div className='border-1 rounded border-slate-400'>

          <div className='bg-slate-100 flex justify-between p-3 border-b pb-4 border-slate-400' >
            <div className='font-semibold text-[#000000 text-[23px]'>View Faq</div>

            <div className='flex items-center'>
            
              <button className='bg-green-700 hover:bg-green-800 ml-2 cursor-pointer rounded-lg  px-5 py-2 font-medium text-[#ffffff] text-[13px]'>Change Status</button>
              <button className='#991B1B px-4 py-2  ml-2 mr-3 cursor-pointer rounded-lg bg-red-700 hover:bg-red-800 font-medium text-white text-[14px]'>Delete</button>
            </div>
          </div>


          <div className='bg-gray-50 px-4 py-3 grid grid-cols-[35%_auto]'>

            <div className='flex gap-9'>
              <input type="checkbox" />
              <p className='font-bold text-[#374151] text-[11px]'>Question</p>
            </div>

            <div className='flex font-bold text-[#374151] text-[11px] gap-[70px] uppercase'>
              <p className="mr-[260px]">Answer</p>
              <p className=''>Order</p>
              <p className='ml-6'>	Status</p>
              <p>	Action</p>
            </div>

          </div>



          <div className='hover:bg-gray-50 px-4 py-3 grid grid-cols-[35%_auto]'>

            <div className='flex gap-9 items-center'>
              <input type="checkbox" />
              <p className='font-semibold text-[#111827] text-[14px]'>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</p>
            </div>

            <div className='flex font-normal items-center  text-[#6b7280]  text-[14px] gap-[30px]'>
              <p className="font-normal text-[13px] text-[#6b7280]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Repudiandae adipisci explicabo molestias possimus quidem <br /> obcaecati deserunt vel, officiis, nobis facilis earum quaerat <br /> aut esse consequuntur ab praesentium eius suscipit natus!</p>
              <p className='ml-5'>1</p>
              <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4  py-1 text-center ml-[70px]'>Active</button>
              <div className='text-[#ffffff] w-[35px] h-[35px] rounded-full flex justify-center items-center bg-blue-700 ml-[20px] hover:bg-blue-800 text-[20px] font-normal'><HiPencil /></div>
            </div>

          </div>



         <div className='hover:bg-gray-50 px-4 py-3 grid grid-cols-[35%_auto]'>

            <div className='flex gap-9 items-center'>
              <input type="checkbox" />
              <p className='font-semibold text-[#111827] text-[14px]'>Neil Sims</p>
            </div>

            <div className='flex font-normal items-center  text-[#6b7280]  text-[14px] gap-[30px]'>
              <p className="font-normal text-[13px] text-[#6b7280]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Repudiandae adipisci explicabo molestias possimus quidem <br /> obcaecati deserunt vel, officiis, nobis facilis earum quaerat <br /> aut esse consequuntur ab praesentium eius suscipit natus!</p>
              <p className='ml-5'>1</p>
               <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center ml-[60px]'>Deactive</button>
              <div className='text-[#ffffff] w-[35px] h-[35px] rounded-full flex justify-center items-center bg-blue-700 ml-[5px] hover:bg-blue-800 text-[20px] font-normal'><HiPencil /></div>
            </div>

          </div>


        </div>




      </section>
      </section>
    </>
    
  )
}
