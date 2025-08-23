import React from 'react';
import { FaFilter } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";

export default function ViewMaterial() {
    return (

        <>


            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>

                    Material
                </p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>View</p>
            </div>


            <section className='pb-[250px]'>

                <section className='px-3 py-4' >


                    <div className='border-1 rounded border-slate-400'>

                        <div className='bg-slate-100 flex justify-between p-3 border-b pb-4 border-slate-400' >
                            <div className='font-semibold text-[#000000 text-[23px]'>View Material</div>

                            <div className='flex items-center'>
                                <div className='bg-blue-700 hover:bg-blue-800 h-[35px] w-[35px] flex justify-center items-center rounded'>
                                    <FaFilter className='text-white cursor-pointer' />
                                </div>
                                <button className='bg-green-700 hover:bg-green-800 ml-2 cursor-pointer rounded-lg  px-5 py-2 font-medium text-[#ffffff] text-[13px]'>Change Status</button>
                                <button className='#991B1B px-4 py-2  ml-2 mr-3 cursor-pointer rounded-lg bg-red-700 hover:bg-red-800 font-medium text-white text-[14px]'>Delete</button>
                            </div>
                        </div>


                        <div className='bg-gray-50 px-4 py-3 grid grid-cols-[55%_auto]'>

                            <div className='flex gap-9'>
                                <input type="checkbox" />
                                <p className='font-bold text-[#374151] text-[11px] uppercase'>Material Name</p>
                            </div>

                            <div className='flex font-bold text-[#374151] ml-[180px] text-[11px] gap-[80px] uppercase'>
                                
                                <p>Order</p>
                                <p className=''>	Status</p>
                                <p className='ml-4'>	Action</p>
                            </div>

                        </div>



                        <div className='hover:bg-gray-50 px-4 py-5 grid grid-cols-[55%_auto]'>

                            <div className='flex gap-9 items-center'>
                                <input type="checkbox" />
                                <p className='font-semibold text-[#111827] text-[14px]'>Neil Sims</p>
                            </div>

                            <div className='flex font-normal items-center  text-[#6b7280] ml-[160px] text-[14px] gap-[40px]'>
                                
                                <p className='ml-9'>1</p>
                                <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4  py-1 text-center ml-[50px]'>Active</button>
                                <div className='text-[#ffffff] w-[35px] h-[35px] rounded-full flex justify-center items-center bg-blue-700 ml-[30px] hover:bg-blue-800 text-[20px] font-normal'><HiPencil /></div>
                            </div>

                        </div>




                    </div>




                </section>
            </section>
        </>

    )
}
