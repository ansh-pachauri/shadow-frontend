

import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header w-full h-32 bg-[#0f0d42] flex items-center justify-between px-5 sm:px-10 lg:px-20">
        <div className="header1 flex items-center">
          <img
            src={assets.shadowlogo1}
            className=" sm:w-[170px]  md:w-[200px] lg:w-[280px] h-[100px]"
            alt="Logo"
          />
        </div>

        <div className="header2 hidden md:flex text-[#ffffff]  text-[16px]">
        <Link to="/" className='ml-10 mr-10 hover:text-[#ffffffbd] font-bold text-xl '>Home</Link>

        <Link to="/product" className='mr-10 hover:text-[#ffffffbd] font-bold text-xl'>Product</Link>

        <Link to="/services" className='mr-10 hover:text-[#ffffffbd] font-bold text-xl'>Services</Link>

        <Link to="/contact" className='mr-3 hover:text-[#ffffffbd] font-bold text-xl whitespace-nowrap '>Contact Us</Link>

          
          
        </div>

        <div className="header3 hidden md:flex items-center justify-center">
          <div className="btn w-[150px] h-16 bg-blue-900 rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65">
          <Link to="/connect" className='text-[#ffffff] text-[18px] font-bold ' >Let's Connect</Link>
        
          </div>
        </div>

        <div
          className="header3 flex md:hidden items-center"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="hamburger-menu bg-[#0f0d42] text-white text-center py-4 md:hidden">
        <Link to="/" className='block py-2 hover:text-[#ffffffbd] font-semibold'onClick={toggleMenu}>Home</Link>

        <Link to="/product" className='block py-2 hover:text-[#ffffffbd] font-semibold' onClick={toggleMenu}>Products</Link>

        <Link to="/services" className='block py-2 hover:text-[#ffffffbd] font-semibold' onClick={toggleMenu}>Services</Link>

        <Link to="/contact" className='block py-2 hover:text-[#ffffffbd] font-semibold' onClick={toggleMenu}>ContactUs</Link>

          

          <div className="btn w-[150px] h-16 bg-blue-900 rounded-[60px] flex items-center justify-center transition ease-linear delay-75 hover:bg-opacity-65 mt-4 mx-auto">
          <Link to="/connect"className="text-[#ffffff] text-[15px] font-bold" onClick={toggleMenu}>Lets Connect</Link>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Header;