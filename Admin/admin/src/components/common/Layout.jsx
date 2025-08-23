import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <section className='grid grid-cols-[16.5%_auto] h-screen overflow-hidden'>

            <aside className='h-screen overflow-y-auto'>
                <SideBar />
            </aside>


            <div className='h-screen overflow-y-auto flex flex-col'>

        
                <Header />
                <main className='flex-grow'>
                    <Outlet />
                </main>
                <Footer />

            </div>

        </section>
    )
}
