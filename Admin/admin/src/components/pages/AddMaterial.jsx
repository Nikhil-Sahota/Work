import React from 'react'

export default function AddMaterial() {
   
    return (
        
        <>

            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>
                Material</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>Add</p>
            </div>

            <section className='px-2  py-4'>


                <div className='rounded border border-slate-400'>
                    <p className='text-[24px]  py-2 px-3 border-b border-slate-400 font-semibold bg-slate-100'>Add Material</p>
                    <div className='p-3'>
                        <form>
                        <p className='font-medium text-gray-900 text-[14px]'>Category Name</p>
                        <input type="text" required placeholder='Material Name' className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />

                      
                        <p className='font-medium text-gray-900 text-[14px] mt-4'>Order</p>
                        <input type="number" placeholder='Order' required min="0" max="20" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />
                        <button type="submit" className=' mt-8 mb-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-[14px] px-4 py-2'>Add Material</button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}
