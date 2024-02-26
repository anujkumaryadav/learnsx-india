import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Founder from '../../assets/founder.png';

export default function MeetOurTeam() {
  return (
    <>
      <p className='text-3xl font-bold font-serif text-gray-800 text-center p-2 m-2 mt-5'> -- Meet Our Team --</p>  
      <div className='flex flex-col md:flex-row mx-4 md:mx-14 p-5 bg-gray-200 rounded-xl gap-5'>
        <img src={Founder} alt="Founder" className='w-full md:w-auto md:max-w-none mx-auto md:ml-0' style={{ maxWidth: '250px' }} />
        <div className='flex flex-col mx-5 place-content-center'>
          <p className='text-lg md:text-xl font-thin text-center md:text-left text-black'>
            Hii there! this is Anujkumar, a Frontend Avenger, a failure and aspiring Full Stack Cyclone. My superpowers lie in HTML, CSS, JavaScript, and ReactJs. I am also proficient in C++, DSA, and SDLC, and I am currently in the process of mastering NodeJS and ExpressJs, with a thirst for even more knowledge. My unwavering belief in "Failure is an event never an person". My ultimate goal is to become an entrepreneur, creating innovative products that makes Impact on society. I'm crazy about Startups.
          </p>
          <div className='flex justify-center gap-2 md:justify-start mt-5'>
            <Link to='https://www.linkedin.com/in/anujkumarlyadav/' target='_blank' rel='noopener noreferrer'> <FaLinkedinIn className='text-3xl mx-2 md:mx-0' /> </Link>
            <Link to='https://github.com/anujkumaryadav' target='_blank' rel='noopener noreferrer'> <FaGithub className='text-3xl mx-2 md:mx-0' /> </Link>
            <Link to='https://twitter.com/Anujkum74777634' target='_blank' rel='noopener noreferrer'> <FaTwitter className='text-3xl mx-2 md:mx-0' /> </Link>
            <Link to='https://www.instagram.com/yadav.ji.in/' target='_blank' rel='noopener noreferrer'> <FaInstagram className='text-3xl mx-2 md:mx-0' /> </Link>
          </div>
        </div>
      </div>
    </>

  )
}
