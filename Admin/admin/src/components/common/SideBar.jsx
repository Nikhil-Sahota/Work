import React, { useState } from 'react';
import { RiDashboard3Fill } from "react-icons/ri";
import { FaUserAlt, FaExpandArrowsAlt, FaUserTag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineStreetview } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaEnvelope, FaShoppingBag } from "react-icons/fa";
import { LiaDotCircle } from "react-icons/lia";
import { FaDroplet, FaAlignLeft, FaNotesMedical, FaSliders, FaLocationArrow } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { FcFaq } from "react-icons/fc";
import { MdSpeakerNotes } from "react-icons/md";


export default function SideBar() {

  let [Dm, setDm] = useState(0)

  return (
    <section className='cursor-pointer h-screen overflow-y-scroll py-2 pr-3 bg-[#F9FAFB]'>

      <figure className='mb-5 border-b pb-5 pt-2  border-slate-400'>
        <img className=" w-[170px] mx-auto" src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo" />
      </figure>

      <div className='pl-2'>
        <ul>
          <li>
            <Link to={'/Dashboard'} className='flex items-center group hover:bg-[#F3F4F6] rounded py-2 px-3  gap-2 font-medium text-gray-900 text-[14px]' >
              <RiDashboard3Fill className='text-[18px] group-hover:text-gray-900  text-gray-500' />Dashboard
            </Link>
          </li>

          <li>
            <Link onClick={() => setDm(Dm == 1 ? 0 : 1)} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-3'>
              <FaUserAlt className='text-[20px]' /> Users

              {Dm == 1 ? <MdKeyboardArrowUp className='ml-[85px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[85px] text-gray-500 text-[17px]' />} </Link>
            <ul className={`${Dm == 1 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/User'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2 '><MdOutlineStreetview className='text-[14px] text-gray-500' />View User</Link></li>
            </ul>
          </li>

          <li>
            <Link onClick={() => setDm(Dm == 2 ? 0 : 2)} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaEnvelope className='text-[20px]' /> Enquirys

              {Dm == 2 ? <MdKeyboardArrowUp className='ml-[63px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[63px] text-gray-500 text-[17px]' />} </Link>
            <ul className={`${Dm == 2 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/ContactEnquirys'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Contact Enquirys</Link></li>
              <li>
                <Link to={'/Newsletters'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Newsletters</Link></li>
            </ul>
          </li>

          <li>
            <Link onClick={() => setDm(Dm == 3 ? 0 : 3)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaDroplet className='text-[18px] group-hover:text-gray-900  text-gray-500' />Colors
              {Dm == 3 ? <MdKeyboardArrowUp className='ml-[77.5px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[77.5px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 3 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddColor'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Color</Link></li>
              <li>
                <Link to={'/ViewColor'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Color</Link></li>
            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 4 ? 0 : 4)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaExpandArrowsAlt className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Materials
              {Dm == 4 ? <MdKeyboardArrowUp className='ml-[59px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[59px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 4 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddMaterial'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Material</Link></li>
              <li>
                <Link to={'/ViewMaterial'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Material</Link></li>
            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 5 ? 0 : 5)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaAlignLeft className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Parent Categorys
              {Dm == 5 ? <MdKeyboardArrowUp className='ml-[6px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[6px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 5 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Category</Link></li>
              <li>
                <Link to={'/ViewCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Category</Link></li>
            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 6 ? 0 : 6)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaAlignLeft className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Sub Categorys
              {Dm == 6 ? <MdKeyboardArrowUp className='ml-[23px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[23px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 6 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddSubCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Sub Category</Link></li>
              <li>
                <Link to={'/ViewSubCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Sub Category</Link></li>
            </ul>

          </li>

          <li>
            <Link onClick={() => setDm(Dm == 7 ? 0 : 7)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaAlignLeft className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Sub Sub Category
              {Dm == 7 ? <MdKeyboardArrowUp className=' text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className=' text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 7 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddSubSubCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Sub Sub Category</Link></li>
              <li>
                <Link to={'/ViewSubSubCategory'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Sub Sub Category</Link></li>
            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 8 ? 0 : 8)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaShoppingBag className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Products
              {Dm == 8 ? <MdKeyboardArrowUp className='ml-[60px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[60px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 8 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddProduct'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Products</Link></li>
              <li>
                <Link to={'/ProductItems'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Products</Link></li>
            </ul>

          </li>



          <li>
            <Link onClick={() => setDm(Dm == 9 ? 0 : 9)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <GiBackwardTime className='text-[26px] group-hover:text-gray-900  text-gray-500 font-black' />Why Choose Us
              {Dm == 9 ? <MdKeyboardArrowUp className='ml-[8px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[8px] text-gray-500 text-[17px]' />} </Link>


            <ul className={`${Dm == 9 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddWhyChooseUs'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Why Us</Link></li>
              <li>
                <Link to={'/WhyChooseUsView'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Why Us</Link></li>
            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 10 ? 0 : 10)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaNotesMedical className='text-[20px] group-hover:text-gray-900  text-gray-500 font-black' />Orders
              {Dm == 10 ? <MdKeyboardArrowUp className='ml-[70px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[70px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 10 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/OrdersList'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Orders</Link></li>

            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 11 ? 0 : 11)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaSliders className='text-[20px] group-hover:text-gray-900  text-gray-500 font-black' />Sliders
              {Dm == 11 ? <MdKeyboardArrowUp className='ml-[70px] text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className='ml-[70px] text-gray-500 text-[17px]' />} </Link>

            <ul className={`${Dm == 11 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddSlider'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Sliders</Link></li>
              <li>
                <Link to={'/ViewSlider'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Sliders</Link></li>

            </ul>

          </li>


          <li>
            <Link onClick={() => setDm(Dm == 12 ? 0 : 12)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaLocationArrow className='text-[20px] text-gray-900 font-black' />Country
              {Dm == 12 ? <MdKeyboardArrowUp className='ml-[67px] text-gray-500 text-[22px]' /> : <MdKeyboardArrowDown className='ml-[67px] text-gray-500 text-[22px]' />} </Link>

            <ul className={`${Dm == 12 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddCountry'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Country</Link></li>
              <li>
                <Link to={'/ViewCountry'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Country</Link></li>

            </ul>

          </li>

          <li>
            <Link onClick={() => setDm(Dm == 13 ? 0 : 13)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FaUserTag className='text-[20px] text-gray-900 font-black' />Testimonial
              {Dm == 13 ? <MdKeyboardArrowUp className='ml-[45px] text-gray-500 text-[22px]' /> : <MdKeyboardArrowDown className='ml-[45px] text-gray-500 text-[22px]' />} </Link>

            <ul className={`${Dm == 13 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddTestimonial'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Testimonials</Link></li>
              <li>
                <Link to={'/ViewTestimonial'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Testimonials</Link></li>

            </ul>

          </li>



          <li>
            <Link onClick={() => setDm(Dm == 14 ? 0 : 14)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[14px] font-medium items-center gap-2 mt-2'>
              <FcFaq className='text-[20px] text-gray-900 font-black' />Faqs
              {Dm == 14 ? <MdKeyboardArrowUp className='ml-[86px] text-gray-500 text-[18px]' /> : <MdKeyboardArrowDown className='ml-[86px] text-gray-500 text-[18px]' />} </Link>

            <ul className={`${Dm == 14 ? '' : 'hidden'}`}>
              <li>
                <Link to={'/AddFaq'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />Add Faq</Link></li>
              <li>
                <Link to={'/ViewFaq'} className='flex hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[12px] font-medium items-center gap-2'><LiaDotCircle className='text-[16px] text-gray-500' />View Faq</Link></li>

            </ul>

          </li>



          <li>
            <Link onClick={() => setDm(Dm == 15 ? 0 : 15)} className='flex group hover:bg-[#F3F4F6] rounded py-2 px-3 text-[#111827] text-[13px] font-medium items-center gap-2 mt-2'>
              <MdSpeakerNotes className='text-[18px] group-hover:text-gray-900  text-gray-500 font-black' />Terms & Conditions
              {Dm == 15 ? <MdKeyboardArrowUp className=' text-gray-500 text-[17px]' /> : <MdKeyboardArrowDown className=' text-gray-500 text-[17px]' />} </Link>



          </li>


        </ul>
      </div>



    </section>
  )
}
