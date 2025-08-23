import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>

            <section className="bg-[#F9FAFB] dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className=" mr-2 w-[170px]" src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-3 sm:p-8 rounded shadow-lg">
                            <h1 className="text-[24px] font-bold leading-tight tracking-tight text-[#111827] md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-3" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#111827] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#111827] dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                            <Link to='/dashboard'>
                                <button className='bg-[#2563EB] text-[14px] font-medium text-[#ffffff] w-[99%] ml-1 rounded py-2 cursor-pointer'>Sign in</button>
                            </Link>
                        </form>
                    </div>
                </div>
        </div>
            </section >

        </div >
    )
}
