
export default function AddFaq() {
    return (

        <>

            <div className='flex p-3 gap-3 text-[14px] font-medium text-gray-700 border-b-1 border-gray-200'>
                <p className='cursor-pointer hover:text-blue-600'>Home</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600'>
                    Faq</p>
                <p>/</p>
                <p className='cursor-pointer hover:text-blue-600 text-[#6b7280]'>Add</p>
            </div>

            <section className='px-2  py-4'>


                <div className='rounded border border-slate-400'>
                    <p className='text-[24px]  py-2 px-3 border-b border-slate-400 font-semibold bg-slate-100'>Add Faq</p>
                    <div className='p-3'>
                        <form>
                            <p className='font-medium text-gray-900 text-[14px] mb-2'>Question</p>
                            <input type="text" required placeholder='Question' className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />

                            <div className='mt-[20px]'>
                                <label htmlFor="" className='font-medium text-gray-900 text-[14px] '>Answer</label>
                                <textarea name="" id="" className='border-1 h-30 resize-none w-full border-slate-300 block rounded' placeholder="Answer"></textarea>
                            </div>

                            <p className='font-medium text-gray-900 text-[14px] mt-4 mb-2'>Order</p>
                            <input type="number" placeholder='Order' required min="0" max="20" className='text-[14px] border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3' />
                            <button type="submit" className=' mt-8 mb-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-[14px] px-4 py-2'>Add Faq</button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}
