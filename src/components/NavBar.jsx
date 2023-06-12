import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO</h1>
            <ul className='desktop hidden md:flex'>
                <li className='p-4'>
                    <a href="#">Home</a>
                </li>
                <li className='p-4'>
                    <a href="#">Company</a>
                </li>
                <li className='p-4'>
                    <a href="#">Resources</a>
                </li>
                <li className='p-4'>
                    <a href="#">About</a>
                </li>
                <li className='p-4'>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO</h1>
                <li className='p-4 border-b border-gray-600'>  <a href="#">Home</a></li>
                <li className='p-4 border-b border-gray-600'> <a href="#">  <a href="#">Resources</a></a></li>
                <li className='p-4 border-b border-gray-600'> <a href="#">Resources</a></li>
                <li className='p-4 border-b border-gray-600'> <a href="#">About</a></li>
                <li className='p-4'>  <a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;