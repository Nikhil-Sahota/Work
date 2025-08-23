import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

export default function AddProduct() {

    return (
        <>

            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>
                    Sub Category</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>Add Sub Category
                </p>
            </div>

            <section className='px-2  py-4'>


                <div className='rounded border border-slate-400'>
                    <p className='text-[23px]  py-2 px-3 border-b border-slate-400 font-semibold bg-slate-100'>Add Sub Category</p>
                    <div className='p-3'>
                        <form>
                            <section className='grid grid-cols-3 gap-4'>
                                <div className=''>
                                    <div>
                                        <p className='font-medium text-gray-900 text-[14px]'>Product Image</p>

                                        <div className='relative border-1 flex flex-col justify-center items-center  text-center hover:bg-slate-50  border-slate-200 h-[220px]'>
                                            <input type="file" required className='bg-black opacity-0 h-[200px] absolute' />
                                            <IoCloudUploadOutline className='block font-normal text-[56px] text-slate-300' /><p className='font-normal text-[18px] text-slate-300 block'>Drag and drop</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-gray-900 text-[14px]'>Back Image</p>

                                        <div className='relative border-1 flex flex-col justify-center items-center  text-center hover:bg-slate-50  border-slate-200 h-[220px]'>
                                            <input type="file" required className='bg-black opacity-0 h-[200px] absolute' />
                                            <IoCloudUploadOutline className='block font-normal text-[56px] text-slate-300' /><p className='font-normal text-[18px] text-slate-300 block'>Drag and drop</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium text-gray-900 text-[14px]'>Gallery Image</p>

                                        <div className='relative border-1 flex flex-col justify-center items-center  text-center hover:bg-slate-50  border-slate-200 h-[220px]'>
                                            <input type="file" required className='bg-black opacity-0 h-[200px] absolute' />
                                            <IoCloudUploadOutline className='block font-normal text-[56px] text-slate-300' /><p className='font-normal text-[18px] text-slate-300 block'>Drag and drop</p>
                                        </div>
                                    </div>
                                </div>




                                <div>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Product Name</p>
                                    <input type="text" required placeholder='Product Name' className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />


                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Sub Category</p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Select Category</option>
                                        <option value="">Mobile Phone's</option>
                                        <option value="">Laptop</option>
                                        <option value="">Men's Wear</option>
                                        <option value="">Women's Wear</option>
                                    </select>


                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Meterial
                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Neem</option>
                                        <option value="">Babul</option>
                                        <option value="">Shisham</option>
                                        <option value="">Teak</option>
                                        <option value="">Sal</option>
                                        <option value="">Arjun</option>
                                        <option value="">Ashwagandha</option>
                                        <option value="">Tulsi</option>
                                        <option value="">Sandalwood</option>
                                    </select>


                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Prodcut Type
                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Feature</option>
                                        <option value="">New Arrivals</option>
                                        <option value="">Onsale</option>

                                    </select>


                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Is Top Rated
                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>


                                    </select>



                                    <p className='font-medium text-gray-900 text-[14px] mt-4'>Actual Price</p>
                                    <input type="text" placeholder='Actual Price' required min="0" max="20" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />
                                    <p className='font-medium text-gray-900 text-[14px] mt-4'>Total In Stocks</p>
                                    <input type="text" placeholder='Total In Stocks' required min="0" max="20" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />

                                </div>



                                <div>

                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Parent Category</p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Select Category</option>
                                        <option value="">Mobile Phone's</option>
                                        <option value="">Laptop</option>
                                        <option value="">Men's Wear</option>
                                        <option value="">Women's Wear</option>
                                    </select>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Sub Sub Category</p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Select Category</option>
                                        <option value="">Mobile Phone's</option>
                                        <option value="">Laptop</option>
                                        <option value="">Men's Wear</option>
                                        <option value="">Women's Wear</option>
                                    </select>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Select Color
                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Select Color
                                        </option>
                                        <option value="">Red</option>
                                        <option value="">Blue</option>
                                        <option value="">Green</option>
                                        <option value="">Gray</option>
                                    </select>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Is Best Selling
                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Nothing Selected
                                        </option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>

                                    </select>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Is Upsell

                                    </p>
                                    <select name="" id="" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3'>
                                        <option value="">Nothing Selected
                                        </option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>

                                    </select>
                                    <p className='font-medium text-gray-900 mt-5 text-[14px]'>Sale Price</p>
                                    <input type="text" required placeholder='Sale Price' className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />


                                    <p className='font-medium text-gray-900 text-[14px] mt-4'>Order</p>
                                    <input type="text" placeholder='Order' required min="0" max="20" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />

                                </div>
                            </section>
                            <div className='mt-[40px]'>
                                <label htmlFor="" className='font-medium text-gray-900 text-[14px] '>Description</label>
                                <textarea name="" id="" className='border-1 h-25 resize-none
 w-[1050px] border-slate-300 block'></textarea>
                            </div>
                            <button type="submit" className=' my-5  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-b font-medium rounded-lg text-[14px] px-4 py-2 text-center '>Create Product</button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}    
