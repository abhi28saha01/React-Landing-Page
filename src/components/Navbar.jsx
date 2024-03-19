import React, { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {
            link : "Overview",
            path : "home"
        },
        {
            link : "Feature",
            path : "feature"
        },
        {
            link : "About",
            path : "about"
        },
        {
            link : "Pricing",
            path : "pricing"
        },
    ]
  return (
    <>

        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-around items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>ARUN</a>
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map((item,index) => <a href={item.path} key={index} className='block hover:text-gray-400'>{item.link}</a>)
                        }
                    </ul>
                </div>
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href='/' className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/><span>Language</span></a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-800'>SignUp</button>
                </div>
                    
                    {/* Menu Button Only Display for Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-400'>
                        {
                            isMenuOpen ? (<RxCross2 className='w-6 h-6 text-primary'/>) : (<IoMenu className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>
            </div>
        </nav>

        <div className={`space-y-4 px-4 pt-5 pb-5 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map((item,index) => <a href={item.path} key={index} className='block hover:text-primary text-xl'>{item.link}</a>)
            }
        </div>  
    </>
    
  )
}

export default Navbar