import React from 'react'
import logo from '../../assets/boy.jpg'
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

export default function ProductItems() {
    return (
        <>

            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>
                    Product</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>Product Items</p>
            </div>


            <section className='px-3 py-4 mb-[70px]'>

                <div className='rounded border border-slate-400'>
                    <p className='text-[24px]  py-2 px-3 border-b border-slate-400 font-semibold bg-slate-100'>Product Items</p>
                    <table>

                        <thead className='text-[14px]  text-[#374151] font-bold uppercase bg-[#F9FAFB] '>
                            <th className='px-6 py-2'>Delete</th>
                            <th className='px-5 py-2'>S. No.</th>
                            <th className='px-6 py-2'>Product Name</th>
                            <th className='pl-5 pr-15 py-2'>Description</th>
                            <th className='pl-15 pr-10 py-2'>Short Description</th>
                            <th className='px-10 py-2'>Thumbnails</th>
                            <th className='px-5 py-2'>Action</th>
                            <th className='px-6 py-2'>Status</th>
                        </thead>

                        <tbody>

                            <tr className='bg-white border-b border-1 border-gray-200'>
                                <td className='text-[#6b7280] py-8 pl-9 text-[14px] font-normal'>
                                    <input type="checkbox" />
                                </td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>1</td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>Men's</td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span></td>
                                <td className='text-[#6b7280] pl-15 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span>  </td>
                                <td className='pl-10'><img src={logo} alt="" className='w-[60px] rounded' /></td>
                                <td className='flex pl-5 items-center pt-6 '><MdOutlineDeleteForever className='font-normal text-[#FF0000] text-[22px]' />|<BiEdit className='text-[#FFD700] font-normal  text-[20px]' /></td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Active</td>
                            </tr>
                             <tr className='bg-white border-b border-1 border-gray-200'>
                                <td className='text-[#6b7280] py-8 pl-9 text-[14px] font-normal'>
                                    <input type="checkbox" />
                                </td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>2</td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>Men's</td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span></td>
                                <td className='text-[#6b7280] pl-15 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span>  </td>
                                <td className='pl-10'><img src={logo} alt="" className='w-[60px] rounded' /></td>
                                <td className='flex pl-5 items-center pt-6 '><MdOutlineDeleteForever className='font-normal text-[#FF0000] text-[22px]' />|<BiEdit className='text-[#FFD700] font-normal  text-[20px]' /></td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Active</td>
                            </tr>
                             <tr className='bg-white border-b border-1 border-gray-200'>
                                <td className='text-[#6b7280] py-8 pl-9 text-[14px] font-normal'>
                                    <input type="checkbox" />
                                </td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>3</td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>Men's</td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span></td>
                                <td className='text-[#6b7280] pl-15 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span>  </td>
                                <td className='pl-10'><img src={logo} alt="" className='w-[60px] rounded' /></td>
                                <td className='flex pl-5 items-center pt-6 '><MdOutlineDeleteForever className='font-normal text-[#FF0000] text-[22px]' />|<BiEdit className='text-[#FFD700] font-normal  text-[20px]' /></td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Active</td>
                            </tr>
                             <tr className=''>
                                <td className='text-[#6b7280] py-8 pl-9 text-[14px] font-normal'>
                                    <input type="checkbox" />
                                </td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>4</td>
                                <td className='text-[#6b7280] pl-9 text-[14px] font-normal'>Men's</td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span></td>
                                <td className='text-[#6b7280] pl-15 text-[14px] font-normal'>Lorem ipsum dolor sit...
                                    <br />
                                    <span className='text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold'>Read More</span>  </td>
                                <td className='pl-10'><img src={logo} alt="" className='w-[60px] rounded' /></td>
                                <td className='flex pl-5 items-center pt-6 '><MdOutlineDeleteForever className='font-normal text-[#FF0000] text-[22px]' />|<BiEdit className='text-[#FFD700] font-normal  text-[20px]' /></td>
                                <td className='text-[#6b7280] pl-5 text-[14px] font-normal'>Active</td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </section>



        </>
    )
}
