import React from 'react'

export default function OrdersList() {
    return (
        <>


            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>


                    Orders
                </p>

            </div>


            <section className='p-3 mb-[300px]'>


                <div className='text-[24px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
                    <h1>Order's List</h1>

                </div>
                <div className='border border-t-0 border-slate-400'>
                    <table>
                        <thead className='flex gap-5 px-3 py-3 bg-[#F9FAFB] items-center' >
                            <th><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'>Delete</button></th>
                            <th className='font-bold text-[14px] text-[#374151] px-5 uppercase'>S. No.</th>
                            <th className='font-bold text-[14px] text-[#374151] px-3 uppercase'>Order ID</th>
                            <th className='font-bold text-[14px] text-[#374151] px-3 uppercase'>Name</th>
                            <th className='font-bold text-[14px] text-[#374151] pl-[120px] uppercase'>Quantity</th>
                            <th className='font-bold text-[14px] text-[#374151] px-9 uppercase'>Price</th>
                            <th className='font-bold text-[14px] text-[#374151] px-4 uppercase'>Date</th>
                            <th className='font-bold text-[14px] text-[#374151] mx-9 uppercase'>Status</th>
                            <th className='font-bold text-[14px] text-[#374151] mx-5 pr-6 uppercase'>View</th>
                        </thead>

                         <tbody className='flex gap-5 px-3 py-3 items-center' >
                            <td className='mx-8'><input type="checkbox" /></td>
                            <td className='font-bold text-[14px] text-[#374151] px-5 ml-4 uppercase'>1</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3 ml-7 '>Frank01</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3 ml-5'>Roshan Chaurasia</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3 ml-14 mr-11'>2</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3 ml-5'>₹ 3500</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3'>10/06/2024</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3'>Processing...</td>
                            <td className='font-normal text-[14px] text-[#6b7280] px-3'>
                                <button className=' mt-2 py-2 px-5 me-2 mb-2 text-[14px] font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700'>View</button></td>
                            
                        </tbody>
                    </table>
                </div>

            </section>


        </>
    )
}
