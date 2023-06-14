/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/img/srhb.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="gradient">

            <div className='nav flex justify-between items-center max-w-[1240px] mx-auto p-4'>
                <img src={logo} />
                <ul className='desktop hidden md:flex'>
                    <li className='p-4'>
                        <a href="#">Home</a>
                    </li>
                    <li className='p-4'>
                        <a href="#">Company</a>
                    </li>
                    <li className='p-4'>
                        <a href="#services">Services</a>
                    </li>
                    <li className='p-4'>
                        <a href="#about">About</a>
                    </li>
                    <li className='p-4'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? ' mob-nav fixed text-white left-0 top-0 w-[60%] h-full bg-[#02afff] ease-in-out duration-500 z-100' : 'ease-in-out duration-500 fixed left-[-100%]'}>

                    <li className='p-4 border-b border-white-600'>  <a href="#">Home</a></li>
                    <li className='p-4 border-b border-white-600'> <a href="#">  <a href="#">Resources</a></a></li>
                    <li className='p-4 border-b border-white-600'> <a href="#">Resources</a></li>
                    <li className='p-4 border-b border-white-600'> <a href="#">About</a></li>
                    <li className='p-4'>  <a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;