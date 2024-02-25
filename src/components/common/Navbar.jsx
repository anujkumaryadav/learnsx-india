import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/favicon-pink.png'

export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <>
        <div className='flex items-center justify-between p-3 shadow-lg'>
        <div className='flex items-center gap-3'>
            <img src={Logo} width={60}/>
            <div>
                <Link to='/'>
                    <div className=' flex flex-col '>
                        <p className='text-pink-100 font-bold text-xl'>LearnsX India</p>
                        <p className='text-pink-100 text-xs'>Let's Normalize the Sex Education</p>
                    </div>
                </Link>
            </div>
            
        </div>

        <div className='hidden md:flex items-center justify-end'>
            <div className='text-center list-none flex select-none'>
                <Link to='/' className=' text-black hover:text-pink-200 px-4 py-2'><li>Home</li></Link>
                <Link to='/learn' className='text-black hover:text-pink-200 px-4 py-2'><li>Learn</li></Link>
                <Link to='/contact' className='text-black hover:text-pink-200 px-4 py-2'><li>Contact</li></Link>
                <Link to='/about' className='text-black hover:text-pink-200 px-4 py-2 mr-5'><li>About</li></Link>
            </div>

            <div className='hidden md:block text-right '>
                <Link to="#">
                     <button className='rounded-full bg-pink-200 text-white px-5 h-10 hover:bg-pink-500 transition-all duration-200 mr-4'>
                         Get Started
                     </button>
                 </Link>
             </div>
         </div>

        <div className="mr-2 flex items-center sm:hidden">
            <button onClick={toggleMenu} 
            type="button" 
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">
                Open main menu
            </span>
            {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            </button>
        </div>
     </div>
     {isMenuOpen && (
     <div className="sm:hidden">
       <div className="flex flex-col m-2 p-2 gap-2 shadow-md">
         <Link to='/' className='hover:text-pink-100 ' onClick={toggleMenu}>Home</Link>
         <Link to='/learn' className='hover:text-pink-100' onClick={toggleMenu}>Learn</Link>
         <Link to='/contact' className='nav-link hover:text-pink-100' onClick={toggleMenu}>Contact Us</Link>
         <Link to='/about' className='nav-link hover:text-pink-100' onClick={toggleMenu}>About Us</Link>
         <Link to="#" className='flex justify-center'>
            <button className='rounded-full bg-pink-200 text-white px-5 h-10 hover:bg-pink-500 transition-all duration-200 mr-4' onClick={toggleMenu}>
                Get Started
            </button>
        </Link>
       </div>
     </div>
   )}
    </>
   )
 }