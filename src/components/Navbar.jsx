import React, { useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { path: "خانه", link: "home" },
        { path: "خدمات", link: "services" },
        { path: "درباره", link: "aboutMe" },
    ]
    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center'>
                        <a href="/" className='text-2xl font-semibold flext items-center space-x-3 text-primary'>امین</a>
                        <ul className='md:flex hidden'>
                            {navItems.map(({ link, path }) => <a key={link} href={link} className='block hover:text-gray-300 mr-8'>{path}</a>)}
                        </ul>
                    </div>

                    <div className='mr-8 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='ml-2' />زبان</a>
                        <button className='bg-secondary py-2 px-4 mr-8 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600'>ثبت نام</button>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>{
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-primary' />) : (<FaBars className='h-6 w-6 text-primary' />)
                        }</button>
                    </div>

                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary  text-xl ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => <a key={link} href={link} className='block hover:text-gray-300'>{path}</a>)}
            </div>
        </>
    )
}

export default Navbar