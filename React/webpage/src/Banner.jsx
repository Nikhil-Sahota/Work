
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
    return (
        <>

            <section className="w-full">

                <section className="w-[1250px] m-auto pb-[55px] flex">

                    <div className="w-[55%]">
                        <h1 className="text-[60px] font-extrabold leading-none mt-[110px]">The experience makes all the difference.</h1>
                        <p className="text-[#6b7280] text-[20px] font-light mt-[15px]">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 font-medium text-[16px]  bg-[#EF4444] py-3 px-4 rounded-[7px] mt-7 text-[#ffffff]">Get started<FaArrowRight /></button>
                            <button className="flex items-center gap-1.5 font-medium text-[16px]  bg- py-3 px-5 rounded-[7px] mt-7 text-[#111827] border border-[rgb(209,213,219)] hover:bg-[#F3F4F6]
">OFFERS</button>
                        </div>
                    </div>


                    <div className="w-[45%]">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" className="mt-[70px] w-[600px] pr-[10px]" />
                    </div>
                </section>


            </section>

 <section className="w-full p-4 mt-7">

                <h1 className="text-center text-[36px] text-[#1f2937] font-semibold mb-7">Shop By Category</h1>

               <div className="flex gap-7 ml-[55px]">

  <div className="w-[30%]  h-[700px] overflow-hidden relative">
   <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="" className="h-[700px] object-cover object-[center_top] scale-x-[1.1]" />
   <button className="absolute bottom-4 left-[120px] bg-[#FFFFFF] text-[16px] text-[#1f2937] font-medium py-[7px] px-[40px] border border-[#E3E2E1] border-2">Women</button>
  </div>

  <div className="w-[30%]">
    <div className="h-[335px] relative">
   <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" className="object-cover object-[center_top] h-[335px]"/>
   <button className="absolute bottom-5 left-[120px] bg-[#FFFFFF] text-[16px] text-[#1f2937] font-medium py-[7px] px-[50px] border border-[#E3E2E1] border-2">Shoes</button>
    </div>
     <div className="h-[335px] mt-[27px] relative">
   <img src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="" className="object-cover object-[center_top] h-[335px]"/>
   <button className="absolute bottom-5 left-[120px] bg-[#FFFFFF] text-[16px] text-[#1f2937] font-medium py-[7px] px-[40px] border border-[#E3E2E1] border-2">Watches</button>
    </div>

  </div>

  
    <div className="w-[30%]  h-[700px] relative">
   <img src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="" className="h-[700px] object-cover object-[center_top] w-full" />
   <button className="absolute bottom-4 left-[120px] bg-[#FFFFFF] text-[16px] text-[#1f2937] font-medium py-[7px] px-[30px] border border-[#E3E2E1] border-2">Accessories</button>
  </div>
  </div>



            </section>



        </>
    )
}
export default Banner