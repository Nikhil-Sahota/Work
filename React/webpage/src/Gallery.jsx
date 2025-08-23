function Gallery() {
    return (
        <>
        
            <section className="w-full p-4">

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
    );
}
export default Gallery